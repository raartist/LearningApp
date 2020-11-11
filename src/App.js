import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Searchbar from "./Components/Searchbar/Searchbar";

import { Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Sidebar />
      <Searchbar />
    </div>
  );
}

export default App;
