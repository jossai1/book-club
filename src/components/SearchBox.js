import React from 'react';
import styles from "../styles/Home.module.css";

export default function SearchBox({searchQuery, handleOnChange}) {
    return (
         <input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>
    )
}
