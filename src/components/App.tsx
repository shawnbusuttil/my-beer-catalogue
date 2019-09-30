import React, { FC, Fragment } from 'react'
import { Route, Switch } from "react-router-dom";

import BeerCatalogue from "./beer-catalogue/BeerCatalogue";

const App: FC = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={BeerCatalogue} />
      <Route path="/:id" component={BeerCatalogue} />
    </Switch>
  </Fragment>
);

export default App;
