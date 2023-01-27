import React from 'react';
import BookSearchResult from "./BookSearchResult";
import PropTypes from "prop-types";

function BookSearchResults({books}) {
    return (
       <div>
           {
              books !== undefined && books.length === 0 ? <h1 className={'header'}>No Results</h1> : books.map((book, index) => <BookSearchResult key={book.volumeInfo.title + index} {...book}/>)
           }
       </div>
    )
}

BookSearchResults.propTypes = {
    books: PropTypes.array
}

export default BookSearchResults;
