import React, { ReactElement, Suspense } from 'react';

const AppWrapper = React.lazy(() => import('./components/init/AppWrapper'));

const App:React.FC = ():ReactElement => (
  <Suspense fallback={<></>}>
    <AppWrapper />
  </Suspense>
);

export default App;
