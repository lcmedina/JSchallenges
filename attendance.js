//  For this challenge, you'll use array and object de-structuring to return a list of students. Create a function called get students, which takes one argument, Classroom classroom will contain a bullion value called has teaching assistant and class list, which is an array of people in the classroom. The first value in class lists will be the teacher. If has teaching assistant is true, The second value in the class list is the teaching assistant and the remaining values in the class list are the students. If has teaching assistant is false, The second value through the end of the class list are the students. Your job is to return a list of students. You must use object and array de-structuring. 

// function getStudents(Classroom) {
//     const[teacher, TA, ...students] = Classroom.classList
//     if (Classroom.hasTeachingAssistant === true){
//         return console.log(students)
//     } else {
//         return console.log(TA + "," + students)
//     }
// }

// class Classroom {
//     constructor(hasTeachingAssistant, classList){
//         this.hasTeachingAssistant = hasTeachingAssistant;
//         this.classList = classList;
//     }   
// }

// let msMedina = new Classroom(false, ["Laura", "Alex", "Amanda", "Ginny", "Demi", "Dorna", "Dani", "Ron"]);
// getStudents(msMedina)

//CLEANER SOLUTION  
 function getStudents(classroom){
     let {hasTeachingAssistant, classList} = classroom;
     let teacher, teachingAssistant, students;

     if(hasTeachingAssistant) {
         [teacher, teachingAssistant, ...students] = classList
     } else {
         [teacher, ...students] = classList;
     }
     return students;
 }

console.log(
    getStudents({
        hasTeachingAssistant: true,
        classList: ["Laura", "Alex", "Amanda", "Ginny", "Demi", "Dorna", "Dani", "Ron"]
    })
)
