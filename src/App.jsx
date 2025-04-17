import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { getImages } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ReactModal from 'react-modal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { BarLoader } from 'react-spinners';

ReactModal.setAppElement('#root');

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isError, setIsError] = useState(false);
  const pagesCountRef = useRef(0);

  useEffect(() => {
    if (!search) return;
    addNextImages();
  }, [search, page]);
  async function addNextImages() {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await getImages(search, page);
      pagesCountRef.current = response.total_pages;
      setImages(imgs => [...imgs, ...response.results]);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(search) {
    pagesCountRef.current = 0;
    setImages([]);
    setSearch(search);
    setPage(1);
  }
  function onLoadMore() {
    setPage(p => p + 1);
  }
  const shoulShowLoadMoreBtn =
    images.length > 0 && page < pagesCountRef.current;
  return (
    <>
      <div>
        <Toaster toastOptions={{error: {iconTheme: {primary: '#FFC107'}}}} position='top-right' />
      </div>
      <SearchBar onSubmit={onSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery
            images={images}
            setModalImage={setModalImage}
          />
          {shoulShowLoadMoreBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </>
      )}
      <Loader isLoading={isLoading} />
      <ImageModal
        modalImage={modalImage}
        setModalImage={setModalImage}
      />
    </>
  );
}

export default App
