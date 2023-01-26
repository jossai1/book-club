import { useState } from "react";
import BookSearchResults from "../components/BookSearchResults";
import {useGoogleBooksDebounceFetch} from "../hooks/useGoogleBooksDebounceFetch";
import styles from '../styles/Home.module.css';
import SearchBox from "../components/SearchBox";

const DEBOUNCE_RATE = 900;

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchResults = useGoogleBooksDebounceFetch(searchQuery, DEBOUNCE_RATE);

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div>
            <header className={styles.header}>
                <h1> 📕 Book Club for Baddies 💁🏾‍♀️</h1>
            </header>
            <main className={styles.container}>
                {/*<SearchBox searchQuery={searchQuery} handleOnChange={handleOnChange} />*/}
                <input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>
                <BookSearchResults books={searchResults}/>
            </main>
        </div>
    )
}

export default Home;
