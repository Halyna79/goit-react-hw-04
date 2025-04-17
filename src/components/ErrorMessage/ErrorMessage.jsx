import s from './ErrorMessage.module.css';

function ErrorMessage() {
    return (
        <p className={s.error}>Failed to load images. Please try again later.</p>
    )
}

export default ErrorMessage;