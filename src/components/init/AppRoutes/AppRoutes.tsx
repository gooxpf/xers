import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import AuthPrimaryRoute from './components/AuthPrimaryRoute';
import PrivatePrimaryRoute from './components/PrivatePrimaryRoute';
import PublicPrimaryRoute from './components/PublicPrimaryRoute';

const AppRoutes: React.FC = (): React.ReactElement => (
  <Switch>
    <PrivatePrimaryRoute path="/dashboard" exact>
      <>DASHBOARD</>
    </PrivatePrimaryRoute>
    <AuthPrimaryRoute path="/accounts/login" exact>
      <>LOGIN PAGE</>
    </AuthPrimaryRoute>
    <PublicPrimaryRoute path="/" exact>
      <Redirect to="/accounts/login" />
    </PublicPrimaryRoute>
    <PublicPrimaryRoute path="*" exact>
      <>404</>
    </PublicPrimaryRoute>
  </Switch>
);

export default AppRoutes;
