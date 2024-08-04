//Activity 1: Class Definition
//Task 1:
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    
  }
  
  const person = new Person('Malavika Gupta', 20);
  console.log(person.greeting());
  // Output: Hello, my name is Malavika Gupta and I am 20 years old.
  
//Task 2:
    person.updateAge(19);
// Output: Updated age: 19

//Activity 2: Class Inheritance
//Task 3:
class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
      }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student = new Student('Shradha', 20, '123101');
  console.log(student.getStudentId());
  // Output: 123101

//Task 4:
console.log(student.greeting());

//Activity 3: Static Methods and Properties
//Task 5:
class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static genericGreeting() {
      return 'Hello, welcome!';
    }
  }
  
  console.log(Person2.genericGreeting());
  // Output: Hello, welcome!

//Task 6:
class Student2 extends Person2 {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student2.studentCount++;
    }
  
    greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student1 = new Student2('RAJ', 20, '2345');
  const student2 = new Student2('RIYA', 22, '890');
  console.log(Student2.studentCount);
  // Output: 2
  
//Activity 4: Getters and Setters
//Task 7:
class Person4 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
      }
  }
  
  const pers = new Person4('Shradha', 'Sharma');
  console.log(pers.fullName);
  // Output: Shradha Sharma

//Task 8:

pers.fullName = 'Raj Sharma';
console.log(pers.fullName);
// Output: Raj Sharma

//Activity 5: Private Fields (Optional)
//Task 9 and 10:
class Account {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        this.logBalance();
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        this.logBalance();
      }
    }
  
    logBalance() {
      console.log(`Current balance: ${this.#balance}`);
    }
  }
  
  const account = new Account();
  account.deposit(100);
  // Output: Current balance: 100
  
  account.withdraw(50);
  // Output: Current balance: 50
  
  account.withdraw(100);
  // No output because the withdrawal amount is greater than the balance
  

  
  
  