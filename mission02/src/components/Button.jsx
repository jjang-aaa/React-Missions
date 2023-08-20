/* eslint-disable react/prop-types */
import { container } from "../styles/Button.module.css";

function Button({ label, onClick }) {
  return (
    <button className={container} onClick={(e) => {
      onClick(label)

      document.querySelectorAll('button').forEach((button)=>{
        // button.classList.remove('isActive');
      })

      e.target.classList.add('isActive');

    }}>
      {label}
    </button>
  );
}

export default Button;
