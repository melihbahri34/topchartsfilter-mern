import React from 'react';

// navigation
import { BrowserRouter as Router, Route, Switch, useLocation, HashRouter, Redirect } from 'react-router-dom';

// layouts
import DashboardLayout from './Layouts/DashboardLayout';
import LandingLayout from './Layouts/LandingLayout';

// routes
import * as ROUTES from './Constants/routes';

// pages
import LandingPage from './Pages/Landing/LandingPage';
import PricingPage from './Pages/Landing/PricingPage';

// auth
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

// dashboard
import Account from './Dashboard/Account';
import Blogs from './Dashboard/Blogs';
import TopCharts from './Dashboard/TopCharts';
import NewReleases from './Dashboard/NewReleases';
import TopPublishers from './Dashboard/TopPublishers';
import AppDetail from './Dashboard/AppDetail';

import Admin from './Dashboard/Admin';

// legal
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import TermsOfService from './Pages/Legal/TermsOfService';
import Imprint from './Pages/Legal/Imprint';

function App() {
  return (
    <React.Fragment>
      <Router>

        <Switch>

          <LandingLayout exact path={ROUTES.LANDING} component={LandingPage}/>
          <LandingLayout exact path={ROUTES.PRICING} component={PricingPage}/>

          <LandingLayout exact path={ROUTES.REGISTER} component={Register}/>
          <LandingLayout exact path={ROUTES.LOGIN} component={Login}/>

          <LandingLayout exact path={ROUTES.PRIVACY} component={PrivacyPolicy}/>
          <LandingLayout exact path={ROUTES.TERMS} component={TermsOfService}/>
          <LandingLayout exact path={ROUTES.IMPRINT} component={Imprint}/>

          <DashboardLayout exact path={ROUTES.ACCOUNT} component={Account}/>
          <DashboardLayout exact path={ROUTES.BLOGS} component={Blogs}/>
          <DashboardLayout exact path={ROUTES.TOP_CHARTS} component={TopCharts}/>
          <DashboardLayout exact path={ROUTES.NEW_RELEASES} component={NewReleases}/>
          <DashboardLayout exact path={ROUTES.TOP_PUBLISHERS} component={TopPublishers}/>

          <DashboardLayout exact path={ROUTES.ADMIN} component={Admin}/>

          <DashboardLayout exact path={'/top-charts/detail/:id?'} component={AppDetail}/>

        </Switch>

      </Router>
    </React.Fragment>
  )
}

export default App;
