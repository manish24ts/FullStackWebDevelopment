class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);	console.log(`Country: ${this.country}`); 
   }
  }
  let person1 = new Person("John Doe", 30, "USA");
  let person2 = new Person("Jane Smith", 25, "Canada");
  person1.displayDetails();
  person2.displayDetails();
  