import React from 'react';
import BookSearchResult from "./Book";
import PropTypes from "prop-types";

function BookList({books, savedBookView}) {
    return (
       <>
           {
              books !== undefined && books.length === 0 ? <h1 className={'header'}>No Results</h1> : books.map((book, index) => <BookSearchResult key={book.volumeInfo.title + index} {...book} savedBookView={savedBookView}/>)
           }
       </>
    )
}

BookList.propTypes = {
    books: PropTypes.array,
    savedBookView: PropTypes.bool,

}

export default BookList;
