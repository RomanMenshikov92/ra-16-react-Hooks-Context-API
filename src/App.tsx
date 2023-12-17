import "./App.css";
import { ListAndDetails } from "./components/ListAndDetails/";
import { GeneralComponent } from "./components/UseJsonFetch/";
import { AuthenticationPage } from "./components/Authentication";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Список и детали (use-effect)</h2>
        <ListAndDetails></ListAndDetails>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - UseJsonFetch</h2>
        <GeneralComponent></GeneralComponent>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Authentication</h2>
        <AuthenticationPage></AuthenticationPage>
      </div>
    </>
  );
}

export default App;
