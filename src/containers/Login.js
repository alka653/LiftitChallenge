import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../utils/data/firebase'
import BasicLayout from '../components/BasicLayout'
import { setIdToken } from '../utils/login/loginData'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'

export default class Login extends Component {
	state = {
		user: '',
		password: '',
		message: [],
		redirect: false
	}
	handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
	handleSubmit = (event) => {
		const _this_ = this
		_this_.setState({
			message: [
				<Alert color="info" key="0">
					Loading ...
				</Alert>
			]
		})
		const usersList = firebase.database().ref('users')
		usersList.on('value', (snapshot) => {
			if(snapshot.val().hasOwnProperty(_this_.state.user)){
				const user = snapshot.val()[_this_.state.user]
				if(user['password'] == _this_.state.password){
					setIdToken({
						username: _this_.state.user,
						key: user['key'],
						expired: new Date().getTime() + (1 * 60 * 60 * 1000)
					})
					_this_.setState({
						message: [
							<Alert color="success" key="0">
								Login success
							</Alert>
						],
						redirect: true
					})
				}else{
					_this_.setState({
						message: [
							<Alert color="danger" key="0">
								Password incorrect
							</Alert>
						]
					})
				}
			}else{
				_this_.setState({
					message: [
						<Alert color="danger" key="0">
							User not found
						</Alert>
					]
				})
			}
		})
		event.preventDefault()
	}
	render() {
		return !this.state.redirect ? (
			<BasicLayout>
				<Form>
					{this.state.message}
					<FormGroup>
						<Label for="user">User:</Label>
						<Input type="text" name="user" id="user" onChange={this.handleChange} placeholder="Write your username" />
					</FormGroup>
					<FormGroup>
						<Label for="password">Password:</Label>
						<Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Write your password" />
					</FormGroup>
					<Button className="btn btn-success btn-block" onClick={this.handleSubmit}>Login</Button>
				</Form>
			</BasicLayout>
		): <Redirect to="/" />
	}
}