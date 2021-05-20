import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './views/HomePage'
import AboutPage from './views/AboutPage'
import UsersPage from './views/UsersPage'
import Container from './components/Container'
import NavBar from './components/NavBar'
import LogIn from './views/LogIn';
import CreateLogIn from './views/CreateLogIn'
import MyCart from './views/MyCart'



function App() {
  return (
    <>
      <NavBar />
      <Container>
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
        </Switch>
      </Container>
    </>
  );
}

export default App;