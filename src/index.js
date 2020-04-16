import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import "./style.css";
import { AuthProvider } from "./contexts/AuthContext";
import { StateProvider } from "./contexts/StateContext";
import ProvideAuth from "./hooks/useAuth";

const AppWithRouter = () => {
  return (
    <Router>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Router>
  );
};
ReactDOM.render(
  <StateProvider>
    <AuthProvider>
      <AppWithRouter />{" "}
    </AuthProvider>
  </StateProvider>,
  document.getElementById("root")
);
