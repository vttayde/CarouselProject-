import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SiteRoutes from './routes/Route';
import Protected from './routes/Protected';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'
global.ftk =  localStorage.getItem('appToken') ? localStorage.getItem('appToken') :undefined

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<h3>Loading....</h3>}>
          <Routes>
            {SiteRoutes &&
              SiteRoutes.map((route, i) => {
                return (
                  <Route
                    key={route.title + i}
                    exact={route.path === '/' ? true : false}
                    path={route.path}
                    element={<Protected Componant={route.component} />}
                  ></Route>
                );
              })}
          </Routes>
        </Suspense>
        </ErrorBoundary>
    </div>
  );
}
export default App;
