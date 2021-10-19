import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import Doctors from "./Pages/Doctors/Doctors/Doctors";
import AuthProvider from "./Contexts/AuthProvider";
import Register from "./Pages/Register/Register";
import Blog from "./Pages/Blog/Blog";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute path="/details/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
