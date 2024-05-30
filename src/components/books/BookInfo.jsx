import { BLACK_50, BLACK_59 } from "../../helpers/Colors";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Link, useParams } from "react-router-dom";
import { NotFound } from "../index";

const BookInfo = () => {
  const { bookId } = useParams();
  const { books, groups, removeBook } = useContext(BookContext);
  const book = books.find((singleBook) => singleBook.id.toString() === bookId);

  return (
    <>
      {book ? (
        <div
          className="bg-white py-5 px-5"
          style={{
            borderRadius: "3vw 1px 3vw 3vw",
            marginTop: "8vh",
            boxShadow:
              "2px 4px 4px 0px rgba(0, 0, 0, 0.25), 3px 6px 5px 0px rgba(0, 0, 0, 0.25)",
            height: "auto",
          }}
        >
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-lg col-12">
                  <div className="d-inline-block">
                    <i className="fa fa-book" style={{ fontSize: "1.3rem" }} />
                    <h3
                      className="d-inline-block pe-3"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {" "}
                      {book.name}
                    </h3>
                  </div>
                </div>

                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59 }}>
                    <i className="fa fa-barcode" />
                    <p
                      className="d-inline-block pe-2"
                      style={{
                        fontFamily: "B NAZANIN",
                        fontSize: "1.2rem",
                      }}
                    >
                      {book.isbn}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg col-12">
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
                <div className="col-lg col-12">
                  {" "}
                  <div style={{ color: BLACK_59 }}>
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
                </div>
              </div>

              <div className="row">
                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59, paddingRight: "1.5rem" }}>
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
                      <span style={{ fontFamily: "B NAZANIN" }}>
                        {" "}
                        {book.pageNumbers}
                      </span>{" "}
                      صفحه{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59 }}>
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
              </div>

              <div className="row">
                <div className="col-lg col-12">
                  {" "}
                  <div style={{ color: BLACK_59, paddingRight: "1.5rem" }}>
                    <i
                      className="fas fa-pencil-ruler
          "
                    />
                    <p
                      className="d-inline-block pe-2"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "300",
                      }}
                    >
                      ویراستار: {book.editor}
                    </p>
                  </div>
                </div>
                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59 }}>
                    <i
                      className="fa fa-calendar
          "
                    />
                    <p
                      className="d-inline-block pe-2"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "300",
                      }}
                    >
                      <span
                        style={{ fontFamily: "B NAZANIN", fontSize: "1.2rem" }}
                      >
                        {" "}
                        {book.year}
                      </span>{" "}
                      میلادی{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59, paddingRight: "1.5rem" }}>
                    <i
                      className="fas fa-comments
          "
                    />
                    {book.group.map((gId) => {
                      const groupName = groups.find((g) => g.id === gId);

                      return (
                        <p
                          className="d-inline-block pe-2"
                          style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                          }}
                        >
                          #{groupName.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg col-12">
                  <div style={{ color: BLACK_59, paddingRight: "1.5rem" }}>
                    <i
                      className="fas fa-star
          "
                    />
                    <p
                      className="d-inline-block pe-2"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "300",
                      }}
                    >
                      <span
                        style={{ fontFamily: "B NAZANIN", fontSize: "1.2rem" }}
                      >
                        {book.score}
                      </span>{" "}
                      امتیاز
                    </p>
                  </div>
                </div>
              </div>

              <div className="row my-4 pb-4">
                <div className="col-lg col-12">
                  <h5 className="h6">داستان</h5>
                  <p
                    className="m-3"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "300",
                      textAlign: "justify",
                    }}
                  >
                    {book.story}
                  </p>
                </div>
              </div>

              <div
                className="row m-4"
                style={{ position: "absolute", bottom: "1vh", width: "60%" }}
              >
                <div className="col-lg-10 row p-1 ps-3">
                  <Link to="/" className="btn btn-block btn-outline-warning">
                    بازگشت
                  </Link>
                </div>
                <div className="col-lg-1 col-5 p-1">
                  <Link
                    to={`/books/edit/${book.id}`}
                    className="btn btn-block btn-outline-success"
                  >
                    <i className="fa fa-edit" />
                  </Link>
                </div>
                <div className="col-lg-1 col-5 p-1">
                  <button
                    className="btn btn-block btn-outline-danger"
                    onClick={() => removeBook(book.id, book.name)}
                  >
                    <i className="fa fa-trash " />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <img
                src={book.photo}
                className="img-fluid"
                style={{
                  border: `solid 2px ${BLACK_50}`,
                  borderRadius: "1rem",
                  boxShadow: "6px 6px 10px 1px rgba(0, 0, 0, 0.25)",
                  width: "45rem",
                  height: "35rem",
                  marginBottom: "4rem",
                }}
                alt="تصویر کتاب"
              />
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default BookInfo;
