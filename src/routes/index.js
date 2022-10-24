import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from 'pages/Home'
import { history } from 'store'
import Profile from 'pages/Profile'
import Catalogue from 'pages/Catalogue'

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
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ProfilePath = '/profile'
export const CataloguePath = '/catalogue'
export const ErrorPath = '/error'
