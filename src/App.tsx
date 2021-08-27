import React, { Suspense } from 'react';
const AppWrapper = React.lazy(() => import('./components/init/AppWrapper'));

function App() {
    return (
        <Suspense fallback={<React.Fragment />}>
            <AppWrapper />
        </Suspense>
    );
}

export default App;
