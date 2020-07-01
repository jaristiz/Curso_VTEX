import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Error404 from "./pages/Error404";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route path="/:link/p" component={ProductPage} />
        <Route path="/*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
