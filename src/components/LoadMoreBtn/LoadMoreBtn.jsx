import s from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onLoadMore }) {
    return (
        <button
            className={s.button}
            onClick={onLoadMore}
            type='button'

        >
            Load More
        </button>
    );
}

export default LoadMoreBtn;