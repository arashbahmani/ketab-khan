import { BLACK_59 } from "../../helpers/Colors";

const BookCard = ({ book }) => {
  return (
    <div
      className="bg-white my-5 py-4 px-5"
      style={{
        borderRadius: "3vw 1px 3vw 3vw",
        boxShadow:
          "2px 4px 4px 0px rgba(0, 0, 0, 0.25), 3px 6px 5px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="row">
        <div className="col-lg d-inline-block">
          <i className="fa fa-book" style={{ fontSize: "1.3rem" }} />
          <h3 className="h4 d-inline-block pe-3" style={{ fontSize: "1.2rem" }}>
            {" "}
            {book.name}
          </h3>
        </div>
        <div className="col-lg col-md-6" style={{ color: BLACK_59 }}>
          <i className="fa fa-barcode" />
          <p
            className="d-inline-block pe-2"
            style={{
              fontFamily: "B NAZANIN",
              fontSize: "1rem",
            }}
          >
            {book.isbn}
          </p>
        </div>
        <div className="col-lg col-md-6" style={{ color: BLACK_59 }}>
          <i
            className="fa fa-building
          "
          />
          <p
            className="d-inline-block pe-2"
            style={{
              fontSize: "1rem",
              fontWeight: "300",
            }}
          >
            انتشارات {book.publisher}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <p
            className="d-inline-block me-4"
            style={{
              fontSize: "1rem",
              fontWeight: "300",
            }}
          >
            از {book.writer}
          </p>
        </div>
        <div className="col-lg col-md-6" style={{ color: BLACK_59 }}>
          <i
            className="fa fa-language
          "
          />
          {book.translator === "" ? (
            <p
              className="d-inline-block pe-2"
              style={{
                fontSize: "1rem",
                fontWeight: "300",
              }}
            >
              زبان اصلی{" "}
            </p>
          ) : (
            <p
              className="d-inline-block pe-2"
              style={{
                fontSize: "1rem",
                fontWeight: "300",
              }}
            >
              ترجمه از {book.translator}
            </p>
          )}
        </div>
        <div className="col-lg col-md-6 " style={{ color: BLACK_59 }}>
          <i
            className="fa fa-hashtag
          "
          />
          <p
            className="d-inline-block pe-2"
            style={{
              fontSize: "1rem",
              fontWeight: "300",
            }}
          >
            <span style={{ fontFamily: "B NAZANIN" }}> {book.pageNumbers}</span>{" "}
            صفحه{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
