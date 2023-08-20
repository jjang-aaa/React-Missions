# 리액트 두번째 과제

---

## 완성본

<img width="772" alt="스크린샷 2023-08-20 오후 8 08 14" src="https://github.com/jjang-aaa/React-missions/assets/131199065/f0d90eef-d158-4696-99d8-d150ae5efc65">
<img width="769" alt="스크린샷 2023-08-20 오후 8 08 35" src="https://github.com/jjang-aaa/React-missions/assets/131199065/b2fbef14-6d91-4071-8725-2881fd827f47">

## 과제설명

### 주요코드

```jsx
function MakePizza() {
  const [pizzaList, setPizzaList] = useState([]);

  function resetButton() {
    pizzaList.length = 0;
    setPizzaList([]);
    console.log(pizzaList);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("isActive");
    });
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
```

- 버튼 컴포넌트를 만들고, 버튼이 클릭되면 값을 배열에 저장한 후 배열의 내용을 비교해서 이미지를 가지고옵니다.
- 페이지를 컴포넌트로 조립하기 위해 파일 분리를하고, 버튼을 컴포넌트로 만들어 재사용하려고 만들어보았습니다.

## 느낀점

- 리액트로 만드는데에 집중하다보니 html, css가 기억이 안나고, 너무 헷갈렸습니다.
