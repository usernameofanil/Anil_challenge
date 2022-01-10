import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import Register from "./Components/Register";
import Login from "./Components/Login";
import List from "./Components/List/TicketList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/list" component={List} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
