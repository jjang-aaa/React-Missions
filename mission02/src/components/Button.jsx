/* eslint-disable react/prop-types */
import { container } from "../styles/Button.module.css";

function Button({ label, onClick }) {
  return (
    <button
      className={container}
      onClick={(e) => {
        onClick(label);

        e.target.classList.add("isActive");
      }}
    >
      {label}
    </button>
  );
}

export default Button;
