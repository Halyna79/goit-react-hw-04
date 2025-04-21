import s from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
    return (
        <div
            className={s.card}
            onClick={() => onClick(image)}
        >
            <img
                className={s.image}
                src={image.urls.small}
                alt={image.alt_description}
            />
        </div>
    );
}

export default ImageCard;