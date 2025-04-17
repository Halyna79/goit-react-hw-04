import s from './ImageModal.module.css';
import ReactModal from 'react-modal';

function ImageModal({ modalImage, setModalImage }) {
    return (
        <ReactModal
            isOpen={!!modalImage}
            onRequestClose={() => setModalImage(null)}
            overlayClassName={s.overlay}
            className={s.content}
        >
            <div className={s.container}>
                <img
                    className={s.image}
                    src={modalImage?.urls?.regular}
                    alt={modalImage?.description}
                />

                <div className={s.data}>
                    {!!modalImage?.user?.name && <p className={s.author}>Author: {modalImage?.user?.name}. </p>}
                    {!!modalImage?.description && <p className={s.description}>{modalImage?.description}</p>}
                    {!!modalImage?.likes && <p className={s.likes}>{modalImage?.likes} people liked this photo</p>}
                </div>
            </div>
        </ReactModal>
    );
}

export default ImageModal;