import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import HandleError from './utils/error/containers/handleError'
import { isLoggedIn } from './utils/login/loginData'
import AddService from './containers/AddService'
import Login from './containers/Login'
import Home from './containers/Home'
import { render } from 'react-dom'
import React from 'react'

const container = document.getElementById('app')

render(
	<HandleError>
		<Router>
			<div>
				<Route exact path='/' render={() => (
					isLoggedIn() ? (
						<Home />
					): (
						<Redirect to="/ingresar" />
					)
				)} />
				<Route exact path='/add-service' render={() => (
					isLoggedIn() ? (
						<AddService />
					): (
						<Redirect to="/ingresar" />
					)
				)} />
				<Route exact path='/ingresar' render={() => (
					!isLoggedIn() ? (
						<Login />
					): (
						<Redirect to="/" />
					)
				)} />
			</div>
		</Router>
	</HandleError>
, container)
