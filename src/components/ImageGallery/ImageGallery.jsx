import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, setModalImage }) {
    return (
        <ul className={s.gallery}>
            {images.map(image => (
                <li className={s.item} key={image.id}>
                    <ImageCard
                       image={image}
                       onClick={setModalImage}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;