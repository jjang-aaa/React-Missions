import CheckBox from "./components/TodoList/CheckBox";

function App() {
  return (
    <div className="App">
      <h1>오늘의 할 일</h1>
      <CheckBox label="리액트 숙제 체크박스 만들기" />
      <CheckBox label="맛있는 저녁먹기" />
      <CheckBox label="끝내주게 잠자기" />
    </div>
  );
}

export default App;
