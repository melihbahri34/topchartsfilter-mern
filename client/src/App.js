import React from 'react';

// navigation
import { BrowserRouter as Router, Route, Switch, useLocation, HashRouter, Redirect } from 'react-router-dom';

// layouts
import DashboardLayout from './Layouts/DashboardLayout';
import LandingLayout from './Layouts/LandingLayout';

// routes
import * as ROUTES from './Constants/routes';

// pages
import LandingPage from './Pages/LandingPage';
import PricingPage from './Pages/PricingPage';

// auth
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

// dashboard
import Account from './Dashboard/Account';

function App() {
  return (
    <React.Fragment>
      <Router>

        <Switch>

          <LandingLayout exact path={ROUTES.LANDING} component={LandingPage}/>
          <LandingLayout exact path={ROUTES.PRICING} component={PricingPage}/>

          <LandingLayout exact path={ROUTES.REGISTER} component={Register}/>
          <LandingLayout exact path={ROUTES.LOGIN} component={Login}/>

          <DashboardLayout exact path={ROUTES.ACCOUNT} component={Account}/>

        </Switch>

      </Router>
    </React.Fragment>
  )
}

export default App;
