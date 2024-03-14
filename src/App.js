import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNavComponent";
import Myfooter from "./component/MyFooterComponent";
import AlertComponent from "./component/AlertComponent.jsx";
import AllTheBooksComponent from "./component/AllTheBooksComponent.jsx";
import BookList from "./component/BookList";
import items from "./data/fantasy.json";
import CommentArea from "./component/CommentArea";

function App() {
  return (
    <div>
      <div>
        <AlertComponent />
      </div>
      <div>
        <MyNav />
      </div>
      <h1 className="text-white">BookList</h1>
      <div>
        <BookList books={items} />
      </div>

      <div>
        <Myfooter />
      </div>
    </div>
  );
}

export default App;
