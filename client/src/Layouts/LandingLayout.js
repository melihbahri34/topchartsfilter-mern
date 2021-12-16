import React from 'react';

import { Route } from 'react-router-dom';

// components
import NavbarApp from '../Components/NavbarApp';
import FooterApp from '../Components/FooterApp';

const LandingLayout = ({component: Component, ...rest}) => {  
  return (  
    <div>
        <NavbarApp/>
        <Route 
          {...rest} 
          render={props => (  
            <div>
              <Component {...props} />  
            </div>
          )} 
        />
        <FooterApp/>
    </div>
  );
};  
  
export default LandingLayout;