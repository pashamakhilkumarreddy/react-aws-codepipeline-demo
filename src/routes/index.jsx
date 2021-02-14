import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';

export default () => (
  <ErrorBoundary>
    <Switch>
      <Route path={['/', '/home', '/index']} component={ Home } exact />
      <Route path='*' component={ PageNotFound } />
    </Switch>
  </ErrorBoundary>
);
