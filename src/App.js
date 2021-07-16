import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu'
import Checkout from './Components/Checkout'
import Popup from './Components/Popup'
import {BrowserRouter, Switch, Route} from 'react-router-dom'  


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Menu" component={Menu}/>
        <Route exact path="/Checkout" component={Checkout}/>
        <Route exact path="/Popup" component={Popup}/>
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
