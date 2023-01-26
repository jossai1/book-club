import BookSearchResult from "./BookSearchResult";

export default function BookSearchResults({books}) {
    return (
       <div>
           {
               books.length === 0 ? <h1>No Results</h1> : books.map((book, index) => <BookSearchResult key={book.volumeInfo.title + index} {...book}/>)
           }
       </div>
    )
}
