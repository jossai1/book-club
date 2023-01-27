import {useEffect, useState} from "react";
export function useLocalStorage(collectionKey) {
    const [likedList, setLikedList] = useState(() => JSON.parse(window.localStorage.getItem(collectionKey)) || []);

    //write/commit any changes to likedList to localtorage every time it changes
    useEffect(() => {
        window.localStorage.setItem(collectionKey, JSON.stringify(likedList));
        console.log(likedList)
    }, [likedList]);

    const addToLikedList = (book) => {
        setLikedList((currenLikedList) => [book, ...currenLikedList]);
        // window.localStorage.setItem(LIKED_QUOTES_KEY, JSON.stringify(likedList));
    }

    const remmoveFromLikedList = (book) => {
        const filteredBookList = likedList.filter((savedBook) => savedBook.id !== book.id);

        setLikedList(filteredBookList);
        // window.localStorage.setItem(LIKED_QUOTES_KEY, JSON.stringify(likedList) )
    }

    return [addToLikedList, remmoveFromLikedList, likedList];

}
