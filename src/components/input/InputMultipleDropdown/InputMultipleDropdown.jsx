import "./InputMultipleDropdown.css";
import { useContext, useEffect } from "react";
import { BookContext } from "../../../context/BookContext";
import { BLACK_50 } from "../../../helpers/Colors";

const InputScalableLabel = ({
  label,
  bgColor = BLACK_50,
  groupId,
  onInputChange,
}) => {
  const { groups, singleBook, setSingleBook } = useContext(BookContext);

  const addGroup = () => {
    let select = document.getElementById("GroupSelection");
    let selectedValues = [];
    for (let i = 0; i < select.selectedOptions.length; i++) {
      if (!selectedValues.find((s) => s === select.selectedOptions[i].value))
        selectedValues[i] = select.selectedOptions[i].value;
    }
    setSingleBook({ ...singleBook, group: selectedValues });
  };

  return (
    <div className="w-100 h-100">
      <div className="px-2"></div>
      <label for="GroupSelection">{label}</label>
      <select
        id="GroupSelection"
        name="group"
        style={{
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.5)",
          color: bgColor,
          borderRadius: "10px",
        }}
        multiple
        onChange={addGroup}
      >
        {groups.map((group) => (
          <option
            value={group.id}
            selected={groupId && groupId.find((g) => g === group.id)}
          >
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputScalableLabel;
