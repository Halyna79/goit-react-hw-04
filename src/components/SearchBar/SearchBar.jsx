import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

function SearchBar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.elements.search.value;
    if (search) return onSubmit(search);
    toast.error('This didnt work.');
  }
    return (
<header className={s.header}>
  <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name='search'
          />
    <button className={s.button} type="submit">Search</button>
  </form>
</header>

    )
}

export default SearchBar;