import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import AccountInfo from '../pages/AccountInfo'
import AllPets from '../pages/AllPets'

export default (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/profile' component={Profile} />
    <Route path='/accountinfo' component={AccountInfo} />
    <Route path='/allpets' component={AllPets} />
    <Route path='/login' render={(routeComponentProps) => {
      return <Login
        {...routeComponentProps}
        //more props to come here
        currentUser={props.currentUser}
        storeUser={props.storeUser}
      />
    }} />
  </Switch>
)