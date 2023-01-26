import {useState} from "@types/react";

export const useFetch = (searchQuery) => {
    const [searchResults, setSearchResults] = useState([]);

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
    return searchResults;

}
