import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'
import UsersPage from '../views/UsersPage'
import NavBar from '../components/NavBar'
import LogIn from '../views/LogIn';
import CreateLogIn from '../views/CreateLogIn'
import MyCart from '../views/MyCart'
import ForgotPassword from '../views/ForgotPassword'


const Routing = () => {
    return (
    <>
    <NavBar />
        <Switch>
          <Route exact path="/">
                <HomePage />
          </Route>
          <Route path="/about">
                <AboutPage />
          </Route>
          <Route path="/users">
                <UsersPage />
          </Route>
          <Route path="/LogIn">
                <LogIn />
          </Route>
          <Route path="/CreateLogIn">
                <CreateLogIn />
          </Route>
            <Route path="/MyCart">
                <MyCart />
            </Route>
            <Route path="/ForgotPassword">
                <ForgotPassword />
          </Route>
        </Switch>
    </>
    )
}

export default Routing
