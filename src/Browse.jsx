import { Navigate, Route, Routes } from "react-router-dom";
import {
  About,
  AddBook,
  BooksList,
  GroupsList,
  NotFound,
  BookInfo,
} from "./components";
import EditBook from "./components/books/EditBook";

const Browse = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to={"/books"} />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/add" element={<AddBook path="add" />} />
      <Route path="/books/groups" element={<GroupsList />} />
      <Route path="/books/about" element={<About />} />
      <Route path="/books/:bookId" element={<BookInfo />} />
      <Route path="/books/edit/:bookId" element={<EditBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Browse;
