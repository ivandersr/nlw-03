import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/app" component={OrphanagesMap}/>
      <Route path="/orphanages/create" component={CreateOrphanage}/>
      <Route path="/orphanages/:id" component={Orphanage}/>
    </BrowserRouter>
  );
}

export default Routes;