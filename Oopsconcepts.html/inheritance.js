
class Person {
  constructor(name) {
      this.name = name;
  }

  greet() {
      console.log("Hello, my name is " + this.name);
  }
}

class Student extends Person {
  constructor(name, course) {
      super(name);
      this.course = course;
  }

  study() {
      console.log(this.name + " is studying " + this.course);
  }
}

const student1 = new Student("John", "JavaScript");
student1.greet();
student1.study();
