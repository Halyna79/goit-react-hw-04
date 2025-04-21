import s from './Loader.module.css';
import { BarLoader } from 'react-spinners';

function Loader({ isLoading }) {
    return (
        isLoading && (
            <div className={s.container}>
                <BarLoader cssOverride={s.loader} />
            </div>
        )
    );
}

export default Loader;