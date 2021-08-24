import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";
import Payment from "./Checkout/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Checkout/Orders";

const promise = loadStripe(
  "pk_test_51JRpfqBfUrKX3MEkNz6x2O50uFFF4pUby0ota4tFUUo9O6WkbJ7NWLVSlqDOhDGuwnlnwgVJXtdrNzHREZaj5wnv00cDI3lLB8"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
