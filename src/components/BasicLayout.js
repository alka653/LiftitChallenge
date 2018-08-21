import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonLogout from './ButtonLogout'
import '../styles/basic.min.css'
import React from 'react'

export default function BasicLayout(props) {
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-6">
					<div className="box">
						<ButtonLogout />
						{ props.children }
					</div>
				</div>
			</div>
		</div>
	)
}