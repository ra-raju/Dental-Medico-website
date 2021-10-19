import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Feedback from './Pages/Feedback/Feedback';
import Home from './Pages/Homepage/Home/Home';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Registration-page/Login/Login';
import Registration from './Pages/Registration-page/Registration/Registration';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared-page/Footer/Footer';
import Header from './Pages/Shared-page/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/services/details/:id">
              <ServiceDetails />
            </PrivateRoute>

            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/appointment/feedback">
              <Feedback />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
