import { useState } from "react";
import Button from "../../components/Button";
import { container,buttonContainer } from "../../styles/MakePizza.module.css";
import success from "/src/assets/Pizza.png";
import fail from "/src/assets/PizzaMan.png";

function MakePizza() {
  const [pizzaList, setPizzaList] = useState([]);

  function resetButton() {
    pizzaList.length = 0;
    setPizzaList([]);
    console.log(pizzaList);
    document.querySelectorAll('button').forEach((button)=>{
      button.classList.remove('isActive');
    })
  }

  function buttonClick(label) {
    if (pizzaList.length === 4) {
      return;
    }
    
    setPizzaList((prev) => {
      let arr = [...prev];
      arr.push(label);
      return arr;
    });
  }
  console.log(pizzaList);

  return (
    <div className={container}>
      <p>순서대로 피자를 만들어보세요!</p>
      <div className={buttonContainer}>
        <Button label="도우" onClick={buttonClick} />
        <Button label="소스" onClick={buttonClick} />
        <Button label="치즈" onClick={buttonClick} />
        <Button label="토핑" onClick={buttonClick} />
        <Button label="리셋" onClick={resetButton} />
      </div>
      {pizzaList.toString() === "도우,소스,치즈,토핑" ? (
        <img src={success} width="300px" />
      ) : (
        <img src={fail} width="300px" />
      )}
    </div>
  );
}

export default MakePizza;
