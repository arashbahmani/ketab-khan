import { BLACK_50, YELLOW } from "../../helpers/Colors";
import { Link, useLocation } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

const MobileNavbar = () => {
  const { pathname } = useLocation();

  const activatedLink = [
    pathname === "/books/add" ? " activeLink" : "",
    pathname === "/books" ? " activeLink" : "",
    pathname === "/books/groups" ? " activeLink" : "",
    pathname === "/books/about" ? " activeLink" : "",
  ];

  return (
    <Menu
      right
      customBurgerIcon={
        <img src={require("../../assets/hamburger-menu-icon.png")} alt="منو" />
      }
      burgerButtonClassName={"bm-burger-button"}
      width="75%"
    >
      <div
        className="sticky-top container py-4 text-center"
        style={{
          backgroundColor: YELLOW,
          height: "87.5vh",
          borderTopLeftRadius: "5vw",
          borderBottomLeftRadius: "5vw",
          marginTop: "7vh",
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
        <ul className="list-group list-unstyled">
          <li
            className={
              "rounded-5 list-group-flush  list-group-item-action" +
              activatedLink[0]
            }
            style={{ width: "50vw" }}
          >
            <Link
              to={"/books/add"}
              style={
                pathname.includes("edit")
                  ? { pointerEvents: "none", color: BLACK_50 }
                  : null
              }
            >
              <i
                className="fa fa-plus-square float-end"
                style={{ fontSize: "5vw", marginTop: "1vh" }}
              />{" "}
              <p
                className="d-inline-block me-2"
                style={{ fontFamily: "B NAZANIN", fontSize: "6vw" }}
              >
                افزودن جدید
              </p>
            </Link>
          </li>

          <li
            className={
              "rounded-5 list-group-flush list-group-item-action" +
              activatedLink[1]
            }
            aria-current="true"
            style={{ width: "50vw" }}
          >
            <Link to={"/books"}>
              <i
                className="fa fa-th-list float-end"
                style={{ fontSize: "5vw", marginTop: "1vh" }}
              />{" "}
              <p
                className="d-inline-block me-2"
                style={{ fontFamily: "B NAZANIN", fontSize: "6vw" }}
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
            style={{ width: "50vw" }}
          >
            <Link to={"/books/groups"}>
              <i
                className="fa fa-object-ungroup float-end"
                style={{ fontSize: "5vw", marginTop: "1vh" }}
              />{" "}
              <p
                className="d-inline-block me-2"
                style={{ fontFamily: "B NAZANIN", fontSize: "6vw" }}
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
            style={{ width: "50vw" }}
          >
            <Link to={"/books/about"}>
              <i
                className="fa fa-info-circle float-end"
                style={{ fontSize: "5vw", marginTop: "1vh" }}
              />{" "}
              <p
                className="d-inline-block me-2"
                style={{ fontFamily: "B NAZANIN", fontSize: "6vw" }}
              >
                درباره خوان
              </p>
            </Link>
          </li>
        </ul>
        <p
          className="position-absolute"
          style={{
            fontFamily: "Vazir",
            fontWeight: "100",
            fontSize: "3vw",
            letterSpacing: "-1px",
            top: "80vh",
            right: "40vw",
          }}
        >
          توسعه توسط آرش بهمنی
        </p>
      </div>
    </Menu>
  );
};

export default MobileNavbar;
