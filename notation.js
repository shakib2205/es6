const students = {
    name: 'kolim',
    age: 15,
    class:'ten',
    marks:{
        math: 78,
        english: 65,
        bangla: 88
    }
}

const marks = students.marks;
const math = students.marks.math;


const english = students ['marks']['english'];

const subject = 'math';
const subjectMarks = students.marks[subject];
console.log(subjectMarks);