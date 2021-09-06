import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DefaultRouteProps } from './interface';
import { ClientStateContext } from '../../../../store';
import { DEFAULT_PRIMARY_AUTH_ROUTE } from '../../../../config/ClientConfig';

const PrivatePrimaryRoute:React.FC<DefaultRouteProps> = (props:DefaultRouteProps) => {
  const { clientState } = useContext(ClientStateContext);
  const { exact, path, children } = props;

  if (!clientState.isAuth) {
    return (
      <Redirect
        to={{
          pathname: DEFAULT_PRIMARY_AUTH_ROUTE,
        }}
      />
    );
  }
  return <Route exact={exact} path={path}>{ children }</Route>;
};

export default PrivatePrimaryRoute;
