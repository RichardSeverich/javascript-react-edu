// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/login/Login';
import NavigationBar from './components/nav-bar/NavigationBar';
import UsersMostrar from './components/users/Mostrar';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/users-mostrar" component={UsersMostrar} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
