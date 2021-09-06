import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DEFAULT_PRIMARY_PRIVATE_ROUTE } from '../../../../config/ClientConfig';
import { DefaultRouteProps } from './interface';
import { ClientStateContext } from '../../../../store';

const AuthPrimaryRoute:React.FC<DefaultRouteProps> = (props:DefaultRouteProps) => {
  const {
    clientState,
  } = useContext(ClientStateContext);
  const { exact, path, children } = props;

  if (clientState.isAuth) {
    return (
      <Redirect
        to={{
          pathname: DEFAULT_PRIMARY_PRIVATE_ROUTE,
        }}
      />
    );
  }
  return <Route exact={exact} path={path}>{ children }</Route>;
};

export default AuthPrimaryRoute;
