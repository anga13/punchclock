const db = require('../../db')


describe('Employee DAO', () => {
        db.getEmployees=jest.fn(()=>
                [{id:0, name:"Fred Flintstone"},
                 {id:1, name:"Barney Rubble"},
                 {id:2, name:"Mister Kill"},
                 {id:3, name:"Muscles McBoulder"}])

        test('Returns all instances of employee', ()=>{
                const emps=db.getEmployees()
                expect(emps).toBeDefined()
                expect(emps).toBeInstanceOf(Array)
        })

        test.each([0,1,2,3])('Returns the instance of employee with the given id', (a)=>{
                const emp=db.getEmployeeById(a)
                expect(emp).toBeDefined()
                expect(emp.id).toBeDefined()
                expect(emp.name).toBeDefined()
        })
})

describe('Timestamp DAO', () => {
        db.getStamps=jest.fn(()=>[{id:0, in:true, time:9},
                                  {id:0, in:false, time:11},
                                  {id:0, in:true, time:13},
                                  {id:1, in:true, time:8},
                                  {id:1, in:false, time:11},
                                  {id:1, in:true, time:13},
                                  {id:2, in:true, time:9},
                                  {id:2, in:false, time:12},
                                  {id:3, in:true, time:8}])

        test.each([[0,23],[8,11],[4,9]])('Returns all timestamps in the given interval', (a,b)=>{
                const stamps=db.getStampsInInterval(a,b);
                expect(stamps).toBeDefined()
                expect(stamps).toBeInstanceOf(Array)
        })
        test.each([0,1,2,3])('Returns all timestamps with the given id', (a)=>{
                const stamps=db.getStampsById(a)
                expect(stamps).toBeDefined()
                expect(stamps).toBeInstanceOf(Array)
        })
})

