import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from 'pages/Home'
import { history } from 'store'
import Profile from 'pages/Profile'
import Catalogue from 'pages/Catalogue'
import Pricing from 'pages/Pricing'

export default _ =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HomePath}>
        <Home />
      </Route>
      <Route exact path={CataloguePath}>
        <Catalogue />
      </Route>
      <Route exact path={ProfilePath}>
        <Profile />
      </Route>
      <Route exact path={PricingPath}>
        <Pricing />
      </Route>
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ProfilePath = '/profile'
export const PricingPath = '/pricing'
export const CataloguePath = '/catalogue'
export const ErrorPath = '/error'
