import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    return (
<header className={s.header}>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

    )
}

export default SearchBar;