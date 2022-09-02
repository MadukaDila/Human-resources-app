import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes,Route,Link } from "react-router-dom";
import Home from "./pages/home";
import Table from "./pages/table";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">Add Sheet</Link>
          </li>
          <li className="nav-item">
            <Link to={"/table"} className="nav-link">Attendance</Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/table" element={<Table />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
