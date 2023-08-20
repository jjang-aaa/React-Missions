import RootLayout from "./layout/RootLayout";
import MakePizza from "./page/PizzaMaker/MakePizza";
import './styles/global.css'

function App() {
  return (
    <>
      <RootLayout>
        <MakePizza />
      </RootLayout>
    </>
  );
}

export default App;
