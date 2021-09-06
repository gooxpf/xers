import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLoader from '../AppLoader';
import AppPreloader from '../AppPreloader';
import AppContent from '../AppContent';
import AppModal from '../AppModal';
import AppHeader from '../AppHeader';
import ClientDevice from '../ClientDevice';

import '../../../assets/scss/index.scss';
import { ClientStateProvider, ConfigStateProvider } from '../../../store';

const AppWrapper: React.FC = (): React.ReactElement => {
  const { isPreloaded, externalLoader } = AppPreloader();

  useEffect(() => {
    if (externalLoader?.parentNode && isPreloaded) {
      externalLoader.parentNode.removeChild(externalLoader);
    }
  }, [isPreloaded, externalLoader]);

  return (
    <div className="app-wrapper">
      <ClientStateProvider>
        <ConfigStateProvider>
          <>
            <ClientDevice />
            <AppLoader />
            <Router>
              <AppModal />
              <AppHeader />
              <AppContent />
            </Router>
          </>
        </ConfigStateProvider>
      </ClientStateProvider>
    </div>
  );
};

export default AppWrapper;
