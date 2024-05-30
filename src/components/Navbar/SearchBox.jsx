import { BLACK_50 } from "../../helpers/Colors";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const SearchBox = () => {
  const { bookSearch } = useContext(BookContext);

  return (
    <div
      className="position-absolute"
      style={{
        fontFamily: "Vazir",
        fontSize: "0.7rem",
        letterSpacing: "-1px",
        top: "78vh",
        right: "20%",
        width: "15rem",
        color: BLACK_50,
      }}
    >
      <div className="bg-white px-4" style={{ borderRadius: "10vw" }}>
        <input
          type="search"
          onChange={bookSearch}
          placeholder="جـــــــــــــســتـــــجــو"
          className=""
          style={{
            border: "0",
            marginLeft: "2vw",
            padding: "10px",
          }}
        />
        <i className="fa fa-search" />
      </div>
    </div>
  );
};

export default SearchBox;
