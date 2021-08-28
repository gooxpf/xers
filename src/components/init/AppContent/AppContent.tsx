import React from 'react';
import ContentModal from '../ContentModal';
import ContentLoader from '../ContentLoader';
import AppRoutes from '../AppRoutes';

const AppContent: React.FC = (): React.ReactElement => (
  <div className="app-content-wrapper">
    <ContentLoader />
    <ContentModal />
    <AppRoutes />
  </div>
);

export default AppContent;
