import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/details/:serviceId">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
