import {useEffect, useState} from "react";

export const useGoogleBooksDebounceFetch = (searchQuery, debounceRate=900) => {

    const [searchResults, setSearchResults] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        // console.log('calling with', searchQuery);
        setDataLoaded(false);
        const id = setTimeout(() => {
            if (searchQuery.trim().length !== 0) {
                fetchGoogleBooksResults();
            } else {
                setSearchResults([]);
                setDataLoaded(true);
            }
        }, debounceRate);
        return () => {
            clearTimeout(id);
        }
    }, [searchQuery]);

    const fetchGoogleBooksResults = async () => {
        // console.log('what i will be searching with', searchQuery)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
            setDataLoaded(true);
        } else {
            console.error(`http error: ${response.status} with message: ${response.text}`);
        }
    }

    return [searchResults, dataLoaded];
}
