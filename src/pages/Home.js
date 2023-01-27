import React, {useState} from 'react';
import BookList from "../components/BookList";
import {useGoogleBooksDebounceFetch} from "../hooks/useGoogleBooksDebounceFetch";
import styles from '../styles/Home.module.css';
import SearchBox from "../components/SearchBox";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {LikedQuotesWrapper} from "../hooks/LikedQuotesContext";

const DEBOUNCE_RATE = 500;
const LIKED_QUOTES_KEY = 'likedBooks';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, dataLoaded] = useGoogleBooksDebounceFetch(searchQuery, DEBOUNCE_RATE);
    const [addToLikedList, remmoveFromLikedList, likedList] = useLocalStorage(LIKED_QUOTES_KEY);

    const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
        <LikedQuotesWrapper likeUtils={{addToLikedList, remmoveFromLikedList, likedList}}>
            <header className={styles.header}>
                <h1>📕 Book Club for Baddies 💁🏾‍♀️</h1>
            </header>
            <main className={styles.container}>
                <SearchBox searchQuery={searchQuery} handleOnChange={handleOnChange}/>
                {/*<input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>*/}
                {
                    dataLoaded === true ? <BookList books={searchResults}/> :
                        <h2 className={'header'}>Searching...🤞🏾 Hold Tight</h2>
                }
                <div>
                    <hr/>
                    <h1 className={styles.header}>🔖Bookmarks</h1>
                    <div className={styles.bookShelfContainer}>
                        <BookList books={likedList} savedBookView={true}/>
                    </div>
                </div>
            </main>
        </LikedQuotesWrapper>
    )
}

export default Home;
