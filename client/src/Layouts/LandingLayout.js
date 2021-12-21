import React from 'react';

import { Route } from 'react-router-dom';

// components
import NavbarApp from '../Components/Base/NavbarApp';
import FooterApp from '../Components/Base/FooterApp';

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