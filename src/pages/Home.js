import {useEffect, useState} from "react";
import SearchBox from "../components/SearchBox";
import BookSearchResults from "../components/BookSearchResults";
import styles from '../styles/Home.module.css';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        console.log('calling with', searchQuery);
        const id = setTimeout(() => {
            if (searchQuery.trim().length !== 0) {
                fetchResults();
            }
        }, 900)
        return () => {
            clearTimeout(id);
        }
    }, [searchQuery]);

    /*
     very bad as it calls api on every keyboard press -> debounce function needed
    useEffect(() => {
        console.log('calling with', searchQuery)
         if(searchQuery.trim().length !== 0) {
             fetchResults();
         }

         return () => {
         }
     }, [searchQuery]);*/


    const fetchResults = async () => {
        console.log('what i will be searching with',  searchQuery)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
        } else {
            console.warn(`http error: ${response.status} with message: ${response.text}`)
        }
    }

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
