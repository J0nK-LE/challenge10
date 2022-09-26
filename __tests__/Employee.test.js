const Employee = require("../lib/Employee")

describe('Employee', () => {
    
    describe('initialization', () => {
        // need an init function in the employee.js
        it('should get initialized correctly', () => {
            let newEmployee = new Employee("Sid", 1, "sid@sidmail.com")

            // Arrange
            // Act
            // Assert
            expect(newEmployee.name).toEqual("Sid")
            expect(newEmployee.id).toEqual(1)
            expect(newEmployee.email).toEqual("sid@sidmail.com")

        })
    });

    describe('getName', () => {
        it('should return the name given', () => {
            let newEmployee = new Employee("Sid", 1, "sid@sidmail.com")

            // Arrange
            // Act
            // Assert
            expect(newEmployee.getName()).toEqual("Sid")
            
        })

    });
    describe('getId', () => {
        it('should return id given', () => {
            let newEmployee = new Employee("Sid", 1, "sid@sidmail.com")

            // Arrange
            // Act
            // Assert
            
            expect(newEmployee.getId()).toEqual(1)
            

        })
    });
    

    describe('getRole', () => {
        it('should return employee when asked what role', () => {
            let newEmployee = new Employee("Sid", 1, "sid@sidmail.com")

           expect(newEmployee.getRole()).toEqual("Employee")

        })
    
    });
});
