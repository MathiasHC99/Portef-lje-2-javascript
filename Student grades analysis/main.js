/* Student Grades Analysis */

/* Total numbers of grades */
let grades = [67,74,87,45,88,91,78,100]
console.log("total numbers of grades", grades.length);

console.log('____________________')
/* classify grades in categories lvl 2 */
grades.forEach((grade) => {
    let gradeCategory;
    if (grade >=90) {
        gradeCategory = 'A';
    } else if (grade >=80 <=89) {
        gradeCategory = 'B';
    } else if (grade >=70 <=79) {
        gradeCategory = 'C';
    } else if (grade >=60 <=69) {
        gradeCategory = 'D';
    } else {
        gradeCategory = 'F';
    }
    console.log(`Grade: ${grade}, category: ${gradeCategory}`)
})


console.log('____________________')
/* Evaluate overall class performance */
let total = grades.reduce((sum, grade) => sum + grade, 0);
let grade;


if (grade >= 90) {
    performance = "Excellent";
} else if (grade >=80 <=89) {
    performance = "Good";
} else if (grade >=80 <=89) {
    performance = "Satisfactory";
} else if (grade >=80 <=89) {
    performance = "Needs improvement";
}
console.log(`Overall class performance: ${performance}`)




console.log('____________________')
/* Determine lvl 3 */
let highestGrade = Math.max(...grades);
let lowestGrade = Math.min(...grades);

function gradeCategory(grade) {
    if (grade >=90) return 'A';
    else if (grade >=80 <=89) return 'B';
    else if (grade >=70 <=79) return 'C';
    else if (grade >=60 <=69) return 'D';
    else return 'F';}

console.log(`Highest grade: ${highestGrade} (${gradeCategory(highestGrade)})`)
console.log(`Lowest grade: ${lowestGrade} (${gradeCategory(lowestGrade)})`)


let totalSumOfGrades = grades.reduce((sum, grade) => sum + grade, 0);
let averageGrade = total /grades.length;
console.log(`Average grade: ${averageGrade}`);


console.log('____________________')


