import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <>
           <Route {...rest} render={
             (props) => {
              if(auth.authenticaded) {
                  return <Component {...props}/> 
              } else {
                return  <Redirect to='/login'/>
              }
             }
           }/> 
        </>
    );
};
