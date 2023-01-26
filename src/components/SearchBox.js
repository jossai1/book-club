import React from 'react';
import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";

function SearchBox({searchQuery, handleOnChange}) {
    return (
         <input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>
    )
}

SearchBox.propTypes = {
    searchQuery: PropTypes.string,
    handleOnChange: PropTypes.func,
}

export default SearchBox;
