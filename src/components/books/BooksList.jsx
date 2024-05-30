import BookCard from "./BookCard";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Link } from "react-router-dom";

const BooksList = () => {
  const { filteredBooks } = useContext(BookContext);

  return (
    <div className="me-2 ms-3" style={{ marginTop: "12vh" }}>
      {filteredBooks && filteredBooks.length > 0 ?
        filteredBooks.map((book) => (
        <Link to={`/books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      )) : (<p>مخزن کتاب ها خالی است</p>)
      
      }
    </div>
  );
};
export default BooksList;
