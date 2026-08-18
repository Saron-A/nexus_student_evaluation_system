const name = "John Doe";
const course = "Javascript";
const age = 21;
const score = 78;
const attendance = 85;

const cleanedName = name.trim().toUpperCase();
const isJavaScriptStudent = course.trim().toUpperCase().includes("JAVASCRIPT");
const resultMessage = score >= 60 ? "Pass" : "Fail";

const displayStudentInfo = (cleanedName, course, score, age, attendance) => {
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
  } else if (score >= 60) {
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

const grade = calculateGrade(score);
const status = getStudentStatus(score);
const eligibility = checkEligibility(score, attendance);

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

const finalReport = `${displayStudentInfo(name, course, score, age, attendance)}Grade: ${grade}
Performance Status: ${status}
Exam Eligibility: ${eligibility}
JavaScript Student: ${isJavaScriptStudent}
Pass/Fail: ${resultMessage} `;

console.log(finalReport);

const studentInfo = document.querySelector(".studentInfo");
studentInfo.textContent = finalReport;
