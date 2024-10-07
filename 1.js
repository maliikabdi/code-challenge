// Grading system
//A >79,
//B = 60 TO 79,
//C = 49 TO 59,
//D = 40 TO 49,
//E = LESS 40.

let mark = 35; // Initialize the 'mark' variable with a value of 35

// Check if the mark is greater than 79 and less than or equal to 100, assign grade 'A'
if (mark > 79 && mark <= 100) {
    console.log("A");
}
// Check if the mark is between 60 and 79, inclusive, assign grade 'B'
else if (mark >= 60 && mark <= 79) {
    console.log("B");
}
// Check if the mark is between 50 and 59, inclusive, assign grade 'C'
else if (mark >= 50 && mark <= 59) {
    console.log("C");
}
// Check if the mark is between 40 and 49, inclusive, assign grade 'D'
else if (mark >= 40 && mark <= 49) {
    console.log("D");
}
// Check if the mark is below 40 but not negative, assign grade 'E'
else if (mark < 40 && mark >= 0) {
    console.log("E");
}