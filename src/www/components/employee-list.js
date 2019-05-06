import React from 'react'
import Employee from './employee'

export default class EmployeeList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			employees: [
				{id: '1', name: 'Barney'},
				{id: '2', name: 'Fred'},
				{id: '3', name: 'Slate'},
				{id: '4', name: 'Rocky'}
			]
		}
	}

	render() {
		return (
			<div className="employee-list">
			{this.state.employees.map(employee =>
				<Employee key={employee.id} name={employee.name} />
			)}
			</div>
		)
	}
}


