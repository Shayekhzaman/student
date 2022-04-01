import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import Capital from "./components/Capital";
import HomePage from "./components/HomePage";
import Task from "./components/Task/Task";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* <Route path="/home">
            <Home></Home>
          </Route> */}

          <Route path="/homePage">
            <HomePage></HomePage>
          </Route>

          <Route path="/task">
            <Task></Task>
          </Route>

          <Route path="/calculator">
            <Calculator></Calculator>
          </Route>

          <Route path="/capital">
            <Capital></Capital>
          </Route>
          <Route exactPath="/">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
