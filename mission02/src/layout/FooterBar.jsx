import { useState } from "react";
import { container } from "../styles/FooterBar.module.css";

function FooterBar() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className={container}>
      <small>
        Copyright <b>{currentYear}</b> &copy; 모든 저작권은{" "}
        <strong>정아</strong>
        에게 있습니다.
      </small>
    </footer>
  );
}

export default FooterBar;
