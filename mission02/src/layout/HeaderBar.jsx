import Heading from "../components/Heading";
import { container } from "../styles/HeaderBar.module.css";

function HeaderBar() {
  return (
    <header className={container}>
      <Heading />
    </header>
  );
}

export default HeaderBar;
