import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import firebase from '../utils/data/firebase'
import BasicLayout from '../components/BasicLayout'

export default class Home extends Component {
	state = {
		data: []
	}
	componentDidMount(){
		const _this_ = this
		const servicesList = firebase.database().ref('services')
		servicesList.on('value', (snapshot) => {
			let data = []
			for(let item in snapshot.val()){
				const element = snapshot.val()[item]
				data.push(
					<tr key={item}>
						<td>{element['description']}</td>
						<td>{element['addressO']}</td>
						<td>{element['addressD']}</td>
					</tr>
				)
			}
			_this_.setState({
				data: data
			})
		})
	}
	render() {
		return (
			<BasicLayout>
				<div className="row">
					<div className="col-6">
						<h3>List of services</h3>
					</div>
					<div className="col-6 text-right">
						<Link to={"add-service"} className="btn btn-success">
							Add service
						</Link>
					</div>
				</div>
				<Table>
					<thead>
						<tr>
							<th>Description</th>
							<th>Address origin</th>
							<th>Address destination</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data}
					</tbody>
				</Table>
			</BasicLayout>
		)
	}
}