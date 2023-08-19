# 리액트 숙제
---
## 완성본
![ReactHomework](https://github.com/jjang-aaa/React-Homework/assets/131199065/8de00f90-f800-4a8d-90af-ff4c6968b010)

---
## 체크박스 만들기
- 체크박스 이미지를 누르면 토글할 수 있도록 만들었습니다.
- 체크박스 이미지은 마켓칼리의 체크박스를 사용하였습니다.
  - 피그마 링크 https://www.figma.com/file/hBaBulfEX6K9M2T8QqciWw/%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4?type=design&node-id=0-1&mode=design&t=unmWIRQ08vjXs6Th-0

### 체크박스 코드설명
```jsx
function CheckBox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkBoxContainer">
      <img
        src={isChecked ? checked : unChecked}
        alt={isChecked ? '선택 된 상태' : '선택 안된 상태'}
        onClick={toggleCheck}
        className="checkBoxImage"
      />
      <p className="checkBoxText">{props.label}</p>
    </div>
  );
}
```
- ```useState``` 로 상태값을 초기화합니다.
- ```toggleCheck``` 함수로 ```isChecked```의 상태를 바꿉니다.
- ```img``` 안의 값을 식을 통해 변경합니다.

```jsx
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
```
- ```props.label```을 통해서 문단의 내용을 변경합니다.
---
## 어려웠던 점과 느낀 점
- 리액트 환경설정을 하는데 오히려 시간이 더 오래 걸렸습니다.
  - 결국 수업때 설정된 것을 클론해서 사용하게 되었습니다.
- 한 파일에서 html과 자바스크립트를 한번에 써서 편해보였고, 바로 눈에 보이게 구현되는 것이 재밌었습니다.
