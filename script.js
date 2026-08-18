const studentInfo = document.querySelector(".studentInfo");

const name = "John Doe";
const course = "Javascript";
const age = 21;
const score = 78;
const attendance = 85;

const displayStudentInfo = (name, course, score, age, attendance) => {
  const cleanedName = name.trim().toUpperCase();
  const isJavascriptStudent = course
    .trim()
    .toUpperCase()
    .includes("JAVASCRIPT");

  return `
Name: ${cleanedName}
Age: ${age}
Course: ${course}
Score: ${score}
Attendance: ${attendance}%
`;
};

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const getStudentStatus = (score) => {
  if (score >= 90) {
    return "Excellent Performance";
  } else if (score >= 60 && score <= 89) {
    return "Passed";
  } else {
    return "Failed";
  }
};

const checkEligibility = (score, attendance) => {
  // use ternary operator

  return score >= 50 && attendance >= 75
    ? "Eligible for Exam"
    : "Not Eligible for Exam";
};

calculateGrade(score);
getStudentStatus(score);
checkEligibility(score, attendance);
displayStudentInfo(name, course, score, age, attendance);

const academyName = "Nexus Academy";

function demonstrateScope() {
  // Function scope
  const studentMessage = "Student evaluation is in progress.";

  console.log(`${academyName}: ${studentMessage}`);

  // Block scope
  for (let i = 1; i <= 3; i++) {
    const stepMessage = `Processing evaluation step ${i}...`;

    console.log(stepMessage);
  }
}

demonstrateScope();
