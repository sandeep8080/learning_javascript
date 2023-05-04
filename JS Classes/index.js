/**
 * JS CLASSES
 * constructors()
 * class field and methods 
 * static methods
 * methods Vs static methods
 * private features
 * extends in classes
 * super()
 */

class Employee {
  //Private features in class
  #empid;
  constructor(id, name, age) {
    this.name = name;
    this.age = age;
    this.#empid = id;
  }
  // Class Field 
  organization = 'Publicis Sapient';
  // Class Methods
  getOrganization() {
    return this.organization;
  }
  // Static Field and method [not availabe to the instances of the class]
  static companyLocation = "Noida";
  static getCompanyLocation() {
    return this.companyLocation;
  }
};

const p = new Employee('1A22', 'Sandeep', 28);
console.log(p.getOrganization());
console.log(Employee.getCompanyLocation());
console.log(p.name);
console.log(p.empid);
console.log(Employee.empid);


// Super() in Class

class Animal {
  constructor(type) {
    this.type = type
  }
};

class Dog extends Animal {
  constructor(type) {
    super(type)
  }
  getType() {
    return this.type;
  }
};

const abc = new Dog('German');
console.log(abc.getType());