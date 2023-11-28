class User {
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
      return `This is ${this.firstName} ${this.lastName}.`;
    }
  }

  class Employee extends User {
    //..
  }
  
  let newEmployee = new Employee("Le", "Hoang");
  
  console.log(newEmployee.getFullName()); // Quynh Nhu