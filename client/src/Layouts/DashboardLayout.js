import React from 'react';  
import { Route } from 'react-router-dom';

import SidebarApp from '../Components/SidebarApp';

const Dashboard = ({ children, noNavbar, noFooter }) => (
    <div className="flex overflow-hidden">
        {/* Sidebar */}
        <SidebarApp/>

        {/* Content area */}
        {children}
    </div>
);

const DashboardLayout = ({component: Component, ...rest}) => {  
  return (  
    <Route 
      {...rest} 
      render={props => (  
        <Dashboard>
          <Component {...props} />  
        </Dashboard>
      )} 
    />  
  );
};  
  
export default DashboardLayout;