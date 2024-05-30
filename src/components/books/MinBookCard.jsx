import { Link } from "react-router-dom";

const MinBookCard = ({ book, groups }) => {
  return (
    <section className="col-lg-6 col-sm-12 p-5 ">
      <Link to={`/books/${book.id}`}>
        <div className="row">
          <div className="col">
            <i className="fa fa-book" />
            <h3
              className="d-inline-block me-2"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {book.name}
            </h3>
          </div>
        </div>
        <div className="row">
          <p
            className="col me-2"
            style={{ fontWeight: "100", letterSpacing: "-0.9px" }}
          >
            {book.writer}
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <i className="fa fa-star" />
            <p
              className="me-2 d-inline-block"
              style={{ fontFamily: "B NAZANIN" }}
            >
              {parseInt(book.score)} امتیاز
            </p>
          </div>
          <div className="col-8">
            <i className="fa fa-comments ms-2" />
            {book.group.map((g) => (
              <p
                className="me-1 d-inline-block"
                style={{ fontFamily: "B NAZANIN" }}
              >
                #{groups.find((gr) => gr.id === g).name}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
};

export default MinBookCard;
