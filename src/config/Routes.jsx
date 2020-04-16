import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from '../components/Modal';
import LogIn from '../components/Login';
import NoMatch from '../components/NoMatch';
import Content3 from '../components/Content3';
import Scrape from '../components/Scrape';
import Jokes from '../components/Jokes';
import Home from '../components/Home';
import { useAuth } from '../hooks/useAuth';
import ProtectedRoute from '../components/routes/ProtectedRoute';

const Routes = () => {
  // const [showModalLogin, setShowModalLogin] = useState(false);
  // const toggleModalLogin = () => setShowModalLogin(!showModalLogin);

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <ProtectedRoute exact path='/jokes'>
        <Jokes />
      </ProtectedRoute>
      <ProtectedRoute exact path='/scrape'>
        <Scrape />
      </ProtectedRoute>
      <Route exact path='/content3'>
        <Content3 />
      </Route>
      {/* <Route path='/login-out'>
        {showModalLogin ? (
          <Modal toggleModalLogin={toggleModalLogin}>
            <LogIn
              loginMsg={isLoggedIn ? 'Logout' : 'Login'}
              toggleModalLogin={toggleModalLogin}
              history={history}
            />
          </Modal>
        ) : null}
      </Route> */}
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
