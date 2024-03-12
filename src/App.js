import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNavComponent";
import Myfooter from "./component/MyFooterComponent";
import AlertComponent from "./component/AlertComponent.jsx";
import AllTheBooksComponent from "./component/AllTheBooksComponent.jsx";

function App() {
  return (
    <div>
      <div>
        <AlertComponent />
      </div>
      <div>
        <MyNav />
      </div>
      <div>
        <AllTheBooksComponent />
      </div>
      <div>
        <Myfooter />
      </div>
    </div>
  );
}

export default App;
