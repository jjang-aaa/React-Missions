/* eslint-disable react/prop-types */
import { useState } from "react";
import checked from "../../assets/isChecked=true.png";
import unChecked from "../../assets/isChecked=false.png";

function CheckBox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkBoxContainer">
      <img
        className="checkBoxImage"
        src={isChecked ? checked : unChecked}
        alt={isChecked ? "선택 된 상태" : "선택 안된 상태"}
        onClick={toggleCheck}
      />
      <p className="checkBoxText">{label}</p>
    </div>
  );
}

export default CheckBox;
