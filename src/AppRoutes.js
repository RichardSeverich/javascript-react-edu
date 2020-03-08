// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/login/Login';
import NavigationBar from './components/nav-bar/NavigationBar';
import UsersMostrar from './components/users/Mostrar';
import UsersCrear from './components/users/Crear';
import CoursesMostrar from './components/courses/Mostrar';
import CoursesCrear from './components/courses/Crear';
import ModulesMostrar from './components/modules/Mostrar';
import ModulesCrear from './components/modules/Crear';
import ScoresMostrar from './components/scores/Mostrar';
import ScoresCrear from './components/scores/Crear';
import CoursesUsersMostrarDetails from './components/courses-users/Mostrar';
import InscriptionsMostrar from './components/inscriptions/Mostrar';
import InscriptionsCrearCourses from './components/inscriptions/CrearInsCourses';
import InscriptionsCrearUsers from './components/inscriptions/CrearInsUsers'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/inscriptions-mostrar-detalle" component={CoursesUsersMostrarDetails}/>
      <Route exact path="/inscriptions-mostrar" component={InscriptionsMostrar}/>
      <Route exact path="/inscriptions-crear-courses" component={InscriptionsCrearCourses}/>
      <Route exact path="/inscriptions-crear-users" component={InscriptionsCrearUsers}/>
      <Route exact path="/scores-crear" component={ScoresCrear}/>
      <Route exact path="/scores-mostrar" component={ScoresMostrar}/>
      <Route exact path="/modules-crear" component={ModulesCrear}/>
      <Route exact path="/modules-mostrar" component={ModulesMostrar}/>
      <Route exact path="/courses-crear" component={CoursesCrear}/>
      <Route exact path="/courses-mostrar" component={CoursesMostrar}/>
      <Route exact path="/users-crear" component={UsersCrear}/>
      <Route exact path="/users-mostrar" component={UsersMostrar}/>
      <Route exact path="/nav-bar" component={NavigationBar}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Login}/>
      <Route component={Login}/>
    </Switch>
  </App>;

export default AppRoutes;
