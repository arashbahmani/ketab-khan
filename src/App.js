import { useEffect, useState } from "react";

import "./App.css";

import { LaptopNavbar, MobileNavbar, Spinner } from "./components";
import { BookContext } from "./context/BookContext";
import Browse from "./Browse";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getAllGroups,
  updateBook,
} from "./services/bookService";
import { confirmAlert } from "react-confirm-alert";
import { BLACK_50, YELLOW } from "./helpers/Colors";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const App = () => {
  //  --- States  ---
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [singleBook, setSingleBook] = useState({
    name: "",
    writer: "",
    translator: "",
    year: "",
    publisher: "",
    pageNumbers: "",
    editor: "",
    isbn: "",
    photo: "",
    group: [],
    score: "",
    story: "",
  });
  const [bookQuery, setBookQuery] = useState({ text: "" });
  const [isUpdate, setUpdate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: booksData } = await getAllBooks();
        const { data: groupsData } = await getAllGroups();

        setBooks(booksData);
        setFilteredBooks(booksData);
        setGroups(groupsData);
        setSingleBook("");

        setLoading(false);
      } catch (err) {
        console.log(err.onmessage);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const successNotify = () =>
    toast.success("عملیات موفقیت آمیز بود😎", {
      position: toast.POSITION.TOP_LEFT,
    });
  const failNotify = () =>
    toast.error("عملیات با موفقیت شکست خورد😗", {
      position: toast.POSITION.TOP_LEFT,
    });
  const createBookForm = async (event) => {
    event.preventDefault();
    try {
      setLoading((prevLoading) => !prevLoading);

      const { status, data } = await createBook(singleBook);

      if (status === 201) {
        const allBooks = [...books, data];
        setBooks(allBooks);
        setFilteredBooks(allBooks);
        setSingleBook({});
        successNotify();
        navigate("/books");
      } else {
        failNotify();
      }

      setLoading(false);
    } catch (err) {
      console.log(err.message);
      failNotify();
      setLoading(false);
    }
  };

  const editBookForm = async (event) => {
    event.preventDefault();
    try {
      setLoading((prevLoading) => !prevLoading);
      const { status, data } = await updateBook(singleBook, singleBook.id);

      if (status === 200) {
        const allBooks = [...books.filter((b) => b.id != singleBook.id), data];
        setBooks(allBooks);
        setFilteredBooks(allBooks);
        setSingleBook({});
        successNotify();
        navigate("/books");
      } else {
        failNotify();
      }

      setLoading(false);
    } catch (err) {
      console.log(err.message);
      failNotify();
      setLoading(false);
    }
  };

  const onInputChange = (event) => {
    if (event.target.name != "group") {
      setSingleBook({
        ...singleBook,
        [event.target.name]: event.target.value,
      });
    }
  };

  const findGroupId = (groupName) => {
    const group = groups.find((g) => g.name.includes(groupName));
    return group ? group.id : false;
  };

  const bookSearch = (event) => {
    setBookQuery({ ...bookQuery, text: event.target.value });

    const allBooks = books.filter((book) => {
      return (
        book.name.includes(event.target.value.toLowerCase()) ||
        book.writer.includes(event.target.value.toLowerCase()) ||
        book.isbn.includes(event.target.value.toLowerCase()) ||
        book.translator.includes(event.target.value.toLowerCase()) ||
        book.publisher.includes(event.target.value.toLowerCase()) ||
        book.group.includes(findGroupId(event.target.value.toLowerCase()))
      );
    });

    setFilteredBooks(allBooks);
  };

  const removeBook = (bookId, bookName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="h-100 w-100 position-absolute top-50 translate-middle-y blur-bg"
            onClick={onClose}
          >
            <div
              dir="rtl"
              style={{
                backgroundColor: BLACK_50,
                border: `1px solid ${YELLOW}`,
                borderRadius: "1rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,0)",
              }}
              className="p-4"
            >
              <h2 style={{ color: "white" }} className="h3">
                پاک کردن کتاب
              </h2>
              <p style={{ color: "white" }}>
                از پاک کردن کتاب {bookName} مطمئنی؟!
              </p>
              <button
                onClick={() => {
                  deleteBookCommand(bookId);
                  onClose();
                }}
                className="btn mx-2"
                style={{ border: `2px solid ${YELLOW}`, color: "white" }}
              >
                بله مطمئنم
              </button>
              <button
                onClick={onClose}
                className="btn"
                style={{
                  backgroundColor: YELLOW,
                  border: `2px solid ${YELLOW}`,
                }}
              >
                انصراف
              </button>
            </div>
          </div>
        );
      },
    });

    const successDeleteNotify = () =>
      toast.success("با موفقیت پاک شد😎", {
        position: toast.POSITION.TOP_LEFT,
      });
    const FailDeleteNotify = () =>
      toast.error("در پاک کردن به مشکل خوردیم😶‍🌫️", {
        position: toast.POSITION.TOP_LEFT,
      });
    const deleteBookCommand = async (bookId) => {
      try {
        setLoading(true);
        const response = await deleteBook(bookId);
        if (response) {
          const { data: booksData } = await getAllBooks();
          setFilteredBooks(booksData);
          setBooks(booksData);
          navigate("/books");
          successDeleteNotify();
          setLoading(false);
        } else {
          FailDeleteNotify();
        }
      } catch (err) {
        console.log(err.message);
        FailDeleteNotify();
        setLoading(false);
      }
    };
  };

  return (
    <BookContext.Provider
      value={{
        loading,
        setLoading,
        books,
        setBooks,
        singleBook,
        setSingleBook,
        filteredBooks,
        setFilteredBooks,
        groups,
        setGroups,
        bookQuery,
        setBookQuery,
        bookSearch,
        removeBook,
        editBookForm,
        forceRender,
        setForceRender,
        onInputChange,
        createBookForm,
        isUpdate,
        setUpdate,
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className="blur-bg">
          <div className="m-0  p-0 h-100">
            <div className="row h-100 w-100">
              <div className="col-3">
                {window.innerWidth > 450 ? <LaptopNavbar /> : <MobileNavbar />}
              </div>
              <div className="col-lg-9 col-sm-12">
                <Browse setSingleBook={setSingleBook} />
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </BookContext.Provider>
  );
};

export default App;
