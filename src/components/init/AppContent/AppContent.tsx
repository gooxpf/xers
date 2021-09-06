import React from 'react';
import ContentModal from '../ContentModal';
import ContentLoader from '../ContentLoader';
import AppRoutes from '../AppRoutes';
import AppFooter from '../AppFooter';

const AppContent: React.FC = (): React.ReactElement => (
  <div className="app-content-wrapper">
    <ContentLoader />
    <ContentModal />
    <AppRoutes />
    <AppFooter />
  </div>
);

export default AppContent;
