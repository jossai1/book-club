import React, {createContext, useState} from 'react';
import BookSearchResults from "../components/BookSearchResults";
import {useGoogleBooksDebounceFetch} from "../hooks/useGoogleBooksDebounceFetch";
import styles from '../styles/Home.module.css';
import SearchBox from "../components/SearchBox";
import {useLocalStorage} from "../hooks/useLocalStorage";

const DEBOUNCE_RATE = 500;
const LIKED_QUOTES_KEY = 'likedBooks';

export const LikedQuotesContext= createContext();

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, dataLoaded] = useGoogleBooksDebounceFetch(searchQuery, DEBOUNCE_RATE);
    const [addToLikedList, remmoveFromLikedList, likedList] = useLocalStorage(LIKED_QUOTES_KEY);

    const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
        <LikedQuotesContext.Provider value={{addToLikedList, remmoveFromLikedList, likedList}}>
            <header className={styles.header}>
                <h1>📕 Book Club for Baddies 💁🏾‍♀️</h1>
            </header>
            <main className={styles.container}>
                <SearchBox searchQuery={searchQuery} handleOnChange={handleOnChange} />
                {/*<input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>*/}
                {
                    dataLoaded === true ? <BookSearchResults books={searchResults}/> : <h2 className={'header'}>Searching...🤞🏾 Hold Tight</h2>
                }

                <h1>🔖Saved List</h1>
                {/*{JSON.stringify(likedList)}*/}
                <BookSearchResults books={likedList}/>
            </main>
        </LikedQuotesContext.Provider>
    )
}

export default Home;
