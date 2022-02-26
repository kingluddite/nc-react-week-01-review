// class syntax creates a constructor function for Student that assigns a name, mathGrade, scienceGrade, englishGrade, and studentId to each student

class Student {
    constructor(name, id, scienceGrade, englishGrade, mathGrade) {
      this.name = name
      this.id = id
      this.scienceGrade = scienceGrade
      this.mathGrade = mathGrade
      this.englishGrade = englishGrade
    }
    getGPA() {
        return Math.ceil((this.scienceGrade + this.mathGrade + this.englishGrade) / 3)
    }
}

const john = new Student('John', 1200, 99, 80, 93);
console.log(john.getGPA())