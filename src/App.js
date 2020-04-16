import React, { useState, useContext } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Modal from "./components/Modal";
import LogIn from "./components/Login";
import NoMatch from "./components/NoMatch";
import Content3 from "./components/Content3";
import Scrape from "./components/Scrape";
import Jokes from "./components/Jokes";
import Home from "./components/Home";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header";

function App() {
  const {
    auth: { isAdmin, isLoggedIn }
  } = useContext(AuthContext);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const toggleModalLogin = () => setShowModalLogin(!showModalLogin);
  let history = useHistory();

  return (
    <div>
      <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        toggleModal={toggleModalLogin}
      />
      <hr />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jokes">
            {isLoggedIn ? <Jokes /> : <Redirect to="/login-out" />}
          </Route>
          <Route path="/scrape">
            {isLoggedIn && isAdmin ? <Scrape /> : <Redirect to="/login-out" />}
          </Route>
          <Route path="/content3">
            <Content3 />
          </Route>
          <Route path="/login-out">
            {showModalLogin ? (
              <Modal toggleModalLogin={toggleModalLogin}>
                <LogIn
                  loginMsg={isLoggedIn ? "Logout" : "Login"}
                  toggleModalLogin={toggleModalLogin}
                  history={history}
                />
              </Modal>
            ) : null}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
