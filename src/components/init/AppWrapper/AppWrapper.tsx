import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLoader from '../AppLoader';
import AppPreloader from '../AppPreloader';
import AppContent from '../AppContent';
import AppModal from '../AppModal';
import AppHeader from '../AppHeader';

const AppWrapper: React.FC = (): React.ReactElement => {
  const { isPreloaded, externalLoader } = AppPreloader();

  useEffect(() => {
    if (externalLoader?.parentNode && isPreloaded) {
      externalLoader.parentNode.removeChild(externalLoader);
    }
  }, [isPreloaded, externalLoader]);

  return (
    <div className="app-wrapper">
      <AppLoader />
      <Router>
        <AppModal />
        <AppHeader />
        <AppContent />
      </Router>
    </div>
  );
};

export default AppWrapper;
