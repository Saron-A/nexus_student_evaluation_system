const name = "John Doe";
const courseName = "Javascript";
const score = 78;
const attendance = 85;
let eligibility = "";

const displayStudentInfo = (name, courseName, score, attendance, eligibility) => {
    // final formal output of the student's information
    return (name, courseName, score, attendance, eligibility);
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
      return "Excellent Performance"
  }

    else if (score >= 60 && score <= 89) {
        return "Passed"
    }

    else (score < 60) {
        return "Failed"
    }
};

const checkEligibility = (score, attendance) => {
    // use ternary operator
    const eligibility = (score >=50 && attendance >=75) ? "Eligible for Exam" : "Not Eligible for Exam"
};
