import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import Home from '/imports/ui/Pages/Home'
import LoginForm from '/imports/ui/Pages/Login'
import RegisterForm from '/imports/ui/Pages/Register'
import SingleTweet from '/imports/ui/Pages/SingleTweet'
import { MustSignIn, MustSignOut } from '/lib/client/must'
FlowRouter.route('/', {
  name: 'Home',
  triggersEnter: [MustSignIn],
  action(){
    mount( App, {
      content: <Home />
    })
  }
})

FlowRouter.route('/tweet/:id', {
  name: 'SingleTweet',
  triggersEnter: [MustSignIn],
  action(params, queryParams){
    mount( App, {
      content: <SingleTweet props={params.id} />
    })
  }
})

FlowRouter.route('/login', {
  name: 'Login',
  triggersEnter: [MustSignOut],
  action(){
    mount( App, {
      content: <LoginForm />
    })
  }
})

FlowRouter.route('/register', {
    name: 'Register',
    triggersEnter: [MustSignOut],
    action(){
      mount( App, {
        content: <RegisterForm />
      })
    }
  })