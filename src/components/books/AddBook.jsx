import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import InputScalableLabel from "../input/InputScalableLabel/InputScalableLabel";
import InputMultipleDropdown from "../input/InputMultipleDropdown/InputMultipleDropdown";
import { YELLOW } from "../../helpers/Colors";
import Scores from "../Scores";
import InputInfoUI from "./InputInfoUI";

const AddBook = ({ path }) => {
  const { singleBook, setSingleBook, createBookForm } = useContext(BookContext);

  useEffect(() => {
    setSingleBook({});
  }, []);

  return (
    <>
      <form onSubmit={createBookForm}>
        <InputInfoUI singleBook={singleBook} path={"add"} />
        <div className="row my-5 mx-lg-5">
          <input
            type="submit"
            className="btn"
            value="ثبت کتاب جدیدتون"
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

export default AddBook;
