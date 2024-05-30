import "./InputScalableLabel.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const InputScalableLabel = ({
  inputName,
  type,
  iconClass,
  label,
  iconColor = "rgba(0, 0, 0, 0.5)" /*BLACK_50*/,
  bgColor = "rgba(255,255,255,0.5)",
  onInputChange,
  singleBook,
}) => {
  const { pathname } = useLocation();
  const [isActive, setActive] = useState(
    pathname.includes("edit") ? true : false
  );
  const changeLabelPosition = (event) => {
    if (event.target.value.length === 0) {
      setActive((preActive) => !preActive);
    }
  };

  return (
    <div className="w-100 h-100">
      <div className="inputPosition px-2">
        <i
          className={iconClass}
          style={{ color: iconColor, transform: "translate(0,10%)" }}
        />{" "}
        <p
          className={
            isActive
              ? "d-inline-block px-2 animateToUpRight"
              : "d-inline-block px-2 animateFromUpRight"
          }
        >
          {label}
        </p>
      </div>
      <input
        type={type}
        name={inputName}
        value={singleBook}
        className="h-100 form-control mainLoginInput p-2 pt-4 m-2 rounded-5 pe-5"
        onChange={onInputChange}
        onFocus={changeLabelPosition}
        onBlur={changeLabelPosition}
        style={{ backgroundColor: bgColor }}
        cols="3"
        required
      />
    </div>
  );
};

export default InputScalableLabel;
