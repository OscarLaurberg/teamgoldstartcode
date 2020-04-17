import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Content3 from '../components/Content3';
import Scrape from '../components/Scrape';
import Jokes from '../components/Jokes';
import Home from '../components/Home';
import ProtectedRoute from '../components/routes/ProtectedRoute.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <ProtectedRoute authenticatedRoles={['admin']} path='/jokes'>
        <Jokes />
      </ProtectedRoute>

      <ProtectedRoute authenticatedRoles={['admin']} path='/scrape'>
        <Scrape />
      </ProtectedRoute>

      <Route path='/content3'>
        <Content3 />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
