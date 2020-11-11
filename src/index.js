import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Physics from "./Views/Physics";
import Biology from "./Views/Biology";
import Chemistry from "./Views/Chemistry";
import Maths from "./Views/Maths";
import Computer from "./Views/Computer";
import Yoga from "./Views/Yoga";
import SubjectView from "./Views/SubjectView";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div className="background ">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/physics" exact component={Physics} />
          <Route path="/chemistry" component={Chemistry} />
          <Route path="/biology" component={Biology} />
          <Route path="/maths" component={Maths} />
          <Route path="/computer" component={Computer} />
          <Route path="/yoga" component={Yoga} />
          <Route path={"/physics/view"} component={SubjectView} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
