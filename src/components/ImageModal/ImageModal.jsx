import s from './ImageModal.module.css';
import ReactModal from 'react-modal';

function ImageModal({ image, onClose }) {
    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={() => onClose(null)}
            overlayClassName={s.overlay}
            className={s.modal}
        >
            {image && (
                <div className={s.content}>
                    <img src={image.urls.regular} alt={image.alt_description} />
                    <p><strong>Author</strong> {image.user.name}</p>
                    <p><strong>Likes</strong> {image.likes}</p>
                    {image.alt_description && (
                        <p><strong>Description</strong> {image.alt_description}</p>
                    )}
                </div>
            )}
        </ReactModal>
    );
}

export default ImageModal;