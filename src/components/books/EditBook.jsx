import { AddBook } from "../index";
import { useContext, useEffect } from "react";
import { BookContext } from "../../context/BookContext";
import { useParams } from "react-router-dom";
import InputInfoUI from "./InputInfoUI";
import { YELLOW } from "../../helpers/Colors";

const EditBook = () => {
  const { setSingleBook, books, singleBook, editBookForm } =
    useContext(BookContext);

  const { bookId } = useParams();

  useEffect(() => {
    const editedBook = books.find((book) => book.id === parseInt(bookId));
    setSingleBook(editedBook);
  }, []);

  return (
    <>
      <form onSubmit={editBookForm}>
        <InputInfoUI singleBook={singleBook} path={"add"} />
        <div className="row my-5 mx-lg-5">
          <input
            type="submit"
            className="btn"
            value="اصلاح کتاب"
            style={{
              backgroundColor: YELLOW,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default EditBook;
