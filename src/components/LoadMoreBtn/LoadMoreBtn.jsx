import s from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onLoadMore }) {
    return (
        <div className={s.wrapper}>
            <button
                className={s.button}
                onClick={onLoadMore}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadMoreBtn;