import styles from "../styles/Home.module.css";

export default function SearchBox({searchQuery, handleOnChange}) {

    return (
        // <input type='text'/>
         <input className={styles.searchBox} type='text' value={searchQuery} onChange={handleOnChange}/>

)
}
