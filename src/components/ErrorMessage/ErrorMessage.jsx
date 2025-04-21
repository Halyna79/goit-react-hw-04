import s from './ErrorMessage.module.css';

function ErrorMessage() {
    return (
        <p className={s.error}>Oops... Something went wrong. Try again later.</p>
    )
}

export default ErrorMessage;