import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-3">
      <div className="row" style={{ marginTop: "8rem" }}>
        <div className="col">
          <div className="row">
            <h2 className="text-center" style={{ marginTop: "10rem" }}>
              صفحه مورد نظر شما یافت نشد ...
            </h2>
          </div>
          <div className="row my-5 py-5">
            <Link to={"/books"} className="btn btn-lg btn-outline-warning">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
        <div className="col">
          <img
            src={require("../assets/notFound.gif")}
            className="col"
            alt="پیدا نشد"
            style={{ width: "20rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
