class Student {
  constructor(name, skillLevel){
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments=[];
  }
  study(){
    if (this.skillLevel < 100){
      this.skillLevel++;
      return this;
    } else {
      return this;
    }
  }
  doHomework(homework){
    if (homework === undefined){
      for (let i=0;i<this.assignments.length;i++){
        if (this.assignments[i].completed === false && this.assignments[i].skillLevel <= this.skillLevel){
          this.assignments[i].completed = true;
        }
      }
    } else if (homework.skillLevel >= 1 && homework.skillLevel <=100 && homework.skillLevel <= this.skillLevel){
      homework.completed = true;
      this.assignments.push(homework);
    } else if (homework.skillLevel >= 1 && homework.skillLevel <=100 && homework.skillLevel > this.skillLevel) {
      homework.completed = false;
      this.assignments.push(homework);
    }
  }
}

module.exports = Student

// function doHomework(homework) {
//   if (homework === undefined){
//     for (let i=0;i<this.assignments.length;i++){
//       if (this.assignments[i].completed === false && this.assignments[i].skillLevel <= this.skillLevel){
//         this.assignments[i].completed = true;
//       }
//     }
//   } else if (homework.skillLevel <= this.skillLevel){
//     homework.completed = true;
//   } else {
//     homework.completed = false;
//   }
//   if (homework.skillLevel >= 1 && homework.skillLevel <=100){
//     this.assignments.push(homework);
//   }
// }

// let math = doHomework();
// console.log(math);