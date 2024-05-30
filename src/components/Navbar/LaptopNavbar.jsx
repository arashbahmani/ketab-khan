import { BLACK_50, YELLOW } from "../../helpers/Colors";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";

const LaptopNavbar = () => {
  const { pathname } = useLocation();

  const activatedLink = [
    pathname === "/books/add" ? " activeLink" : "",
    pathname === "/books" ? " activeLink" : "",
    pathname === "/books/groups" ? " activeLink" : "",
    pathname === "/books/about" ? " activeLink" : "",
  ];

  return (
    <nav className="sticky-top" style={{ marginTop: "7vh" }}>
      <div
        className="container py-4 text-center"
        style={{
          backgroundColor: YELLOW,
          height: "87.5vh",
          borderTopLeftRadius: "5vw",
          borderBottomLeftRadius: "5vw",
        }}
      >
        <a href="/">
          <img
            src={require("../../assets/logo.png")}
            width="25%"
            className="img-fluid m-5"
            alt="لوگو"
          />
        </a>
        <ul className="list-group list-unstyled me-lg-4">
          <li
            className={
              "rounded-5 list-group-flush  list-group-item-action" +
              activatedLink[0]
            }
            style={{ width: "14vw" }}
          >
            {pathname.includes("edit") ? (
              <a href="/books/add">
                <i
                  className="fa fa-plus-square float-end"
                  style={{ fontSize: "1.5vw", marginTop: "0.6vh" }}
                />{" "}
                <p
                  className=""
                  style={{ fontFamily: "B NAZANIN", fontSize: "1.5vw" }}
                >
                  افزودن جدید
                </p>
              </a>
            ) : (
              <Link to={"/books/add"}>
                <i
                  className="fa fa-plus-square float-end"
                  style={{ fontSize: "1.5vw", marginTop: "0.6vh" }}
                />{" "}
                <p style={{ fontFamily: "B NAZANIN", fontSize: "1.5vw" }}>
                  افزودن جدید
                </p>
              </Link>
            )}
          </li>

          <li
            className={
              "rounded-5 list-group-flush list-group-item-action" +
              activatedLink[1]
            }
            aria-current="true"
            style={{ width: "14vw" }}
          >
            <Link to={"/books"}>
              <i
                className="fa fa-th-list float-end"
                style={{ fontSize: "1.5vw", marginTop: "0.6vh" }}
              />{" "}
              <p
                className=""
                style={{ fontFamily: "B NAZANIN", fontSize: "1.5vw" }}
              >
                لیست معرفی
              </p>
            </Link>
          </li>

          <li
            className={
              "rounded-5 list-group-flush list-group-item-action" +
              activatedLink[2]
            }
            style={{ width: "14vw" }}
          >
            <Link to={"/books/groups"}>
              <i
                className="fa fa-object-ungroup float-end"
                style={{ fontSize: "1.5vw", marginTop: "0.6vh" }}
              />{" "}
              <p
                className=""
                style={{ fontFamily: "B NAZANIN", fontSize: "1.5vw" }}
              >
                دسته بندی
              </p>
            </Link>
          </li>

          <li
            className={
              "rounded-5 list-group-flush list-group-item-action" +
              activatedLink[3]
            }
            style={{ width: "14vw" }}
          >
            <Link to={"/books/about"}>
              <i
                className="fa fa-info-circle float-end"
                style={{ fontSize: "1.5vw", marginTop: "0.6vh" }}
              />{" "}
              <p
                className=""
                style={{ fontFamily: "B NAZANIN", fontSize: "1.5vw" }}
              >
                درباره خوان
              </p>
            </Link>
          </li>
        </ul>
        {pathname === "/books" || pathname === "/books/groups" ? (
          <SearchBox />
        ) : (
          <p
            className="position-absolute"
            style={{
              fontFamily: "Vazir",
              fontWeight: "100",
              fontSize: "0.8vw",
              letterSpacing: "-1px",
              top: "78vh",
              right: "13vw",
            }}
          >
            توسعه توسط آرش بهمنی
          </p>
        )}
      </div>
    </nav>
  );
};

export default LaptopNavbar;
