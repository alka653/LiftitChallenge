import { Button } from 'reactstrap'
import React, { Component } from 'react'
import BasicLayout from '../components/BasicLayout'
import { isLoggedIn, logout } from '../utils/login/loginData'

export default class ButtonLogout extends Component {
	handleLogout = (event) => {
		event.preventDefault()
		logout()
		window.location.reload()
	}
	render() {
		return isLoggedIn() ? (
			<div className="text-right">
				<Button onClick={this.handleLogout} color="danger">
					Logout
				</Button>
				<hr />
			</div>
		): []
	}
}

