module.exports = {
    async initDB() {},
    async getEmployees() {
        return employees
    },
    async getEmployeebyId(id) {
        const found = employees.find(employee => {
            return employee.id === id
        })
        return found
    },
    async getEmployeeTotalsInInterval(from, to) {}
}

const employees = [
    {
        id: 33,
        firstName: 'Barney',
        lastName: 'Rubble'
    }, {
        id: 235231,
        firstName: 'Fred',
        lastName: 'Flintstone'
    }, {
        id: 7643,
        firstName: 'Mr',
        lastName: 'Slate'
    }
]
