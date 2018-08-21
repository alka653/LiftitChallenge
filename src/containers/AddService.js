import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import firebase from '../utils/data/firebase'
import BasicLayout from '../components/BasicLayout'

export default class AddService extends Component {
	state = {
		addressO: '',
		addressD: '',
		description: ''
	}
	handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
	handleSubmit = (event) => {
		const _this_ = this
		const services = firebase.database().ref('services')
		if(_this_.state.addressO != '' && _this_.state.addressD != '' && _this_.state.description != ''){
			const service = {
				addressO: _this_.state.addressO,
				addressD: _this_.state.addressD,
				description: _this_.state.description
			}
			services.push(service)
			_this_.setState({
				addressO: '',
				addressD: '',
				description: ''
			})
		}else{
			alert('Some data is missing')
		}
	}
	render() {
		return (
			<BasicLayout>
				<Link to={"/"} className="btn btn-success">
					Home
				</Link>
				<Form>
					<FormGroup>
						<Label for="addressO">Address origin:</Label>
						<Input required={true} type="text" name="addressO" id="addressO" onChange={this.handleChange} placeholder="Write the address origin" />
					</FormGroup>
					<FormGroup>
						<Label for="addressD">Address destination:</Label>
						<Input required={true} type="text" name="addressD" id="addressD" onChange={this.handleChange} placeholder="Write the address destionation" />
					</FormGroup>
					<FormGroup>
						<Label for="description">Description:</Label>
						<Input required={true} name="description" id="description" onChange={this.handleChange} placeholder="Write a description" />
					</FormGroup>
					<Button className="btn btn-success btn-block" onClick={this.handleSubmit}>Send</Button>
				</Form>
			</BasicLayout>
		)
	}
}