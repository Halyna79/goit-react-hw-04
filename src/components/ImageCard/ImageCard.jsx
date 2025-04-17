import s from './ImageCard.module.css';

function ImageCard({ image, setModalImage }) {
    return (
        <div
            className={s.container}
            onClick={() => setModalImage(image)}
        >
            <img
                className={s.image}
                src={image.urls.small}
                alt={image.description}
            />
        </div>
    );
}

export default ImageCard;