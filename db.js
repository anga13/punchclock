const db={
        getEmployeeTotalsInInterval: (from, to) => {},

        getEmployees: () => { return undefined },

        getEmployeeById: (id) => {
                const all=db.getEmployees()
                var returned=all.filter(function(employee) {
                        return employee.id===id })
                return returned[0]
        },

        getStamps: () => { return undefined; },

        getStampsInInterval: (from, to) => {
                const all=db.getStamps()
                var returned=all.filter(function(stamp) {
                        return (stamp.time>=from) || (stamp.time<=to) })
                return returned
        },

        getStampsById: (id) => {
                const all=db.getStamps()
                var returned=all.filter(function(stamp) {
                        return id===stamp.id })
                return returned
        },
}

module.exports=db
