import React from 'react';
import { Route } from 'react-router-dom';
import { DefaultRouteProps } from './interface';

const PublicPrimaryRoute:React.FC<DefaultRouteProps> = (props:DefaultRouteProps) => {
  const { exact, path, children } = props;
  return <Route exact={exact} path={path}>{ children }</Route>;
};

export default PublicPrimaryRoute;
