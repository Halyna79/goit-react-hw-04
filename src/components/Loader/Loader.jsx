import s from './Loader.module.css';
import { BarLoader } from 'react-spinners';

function Loader({ isLoading }) {
    return (
        <div className={s.container}>
            {isLoading && <BarLoader cssOverride={s.loader} />}
        </div>
    );
}

export default Loader;