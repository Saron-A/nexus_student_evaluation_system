# Student Performance Evaluation System


## Project Description

The **Student Performance Evaluation System** is a simple JavaScript program developed as part of the Nexus Academy JavaScript Sessions 1 & 2 assignment.

The program evaluates the academic performance of one student based on their personal information, score, and attendance. It calculates the student's grade, determines their performance status, checks their eligibility for an exam, processes their name and course information, and generates a final performance report.

The project demonstrates fundamental JavaScript concepts including variables, functions, conditional statements, logical operators, loops, scope, string methods, arrow functions, and template literals.

---

## Features

The Student Performance Evaluation System can:

- Store student information such as:
  - Full name
  - Age
  - Course
  - Score
  - Attendance percentage
- Clean and format the student's name.
- Check whether the student is taking JavaScript.
- Calculate the student's letter grade.
- Determine the student's performance status.
- Check exam eligibility based on score and attendance.
- Determine whether the student passed or failed.
- Demonstrate global, function, and block scope.
- Use a loop to simulate evaluation steps.
- Generate a final student performance report.
- Display the report in the browser.
- Log the evaluation results to the browser console.

---

## Grade System

The program calculates grades according to the following scale:

| Score | Grade |
|-------|-------|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| Below 60 | F |

### Performance Status

| Score | Performance Status |
|-------|---------------------|
| 90 or above | Excellent Performance |
| 60–89 | Passed |
| Below 60 | Failed |

### Exam Eligibility

A student is eligible for the exam when:

- Score is **50 or above**
- Attendance is **75% or above**

Both conditions must be satisfied.

---

## JavaScript Concepts Used

This project demonstrates the following JavaScript concepts:

### Variables and Data Types

The project uses `const` variables to store student information such as:

- Name
- Age
- Course
- Score
- Attendance

### Functions

The project uses functions with parameters and return values to organize the program's logic.

Examples include:

- `displayStudentInfo()`
- `calculateGrade()`
- `getStudentStatus()`
- `checkEligibility()`

### Arrow Functions

Arrow functions are used for several operations, including grade calculation, performance status, and exam eligibility.

### Conditional Statements

`if`, `else if`, and `else` statements are used to determine:

- The student's grade
- Performance status
- Pass/fail status

### Comparison and Logical Operators

Comparison operators such as `>=` are used to compare scores and attendance.

The logical AND operator (`&&`) is used when checking exam eligibility.

### Ternary Operator

A ternary operator is used to determine whether the student has passed or failed and to determine exam eligibility.

### String Methods

The project demonstrates:

- `trim()`
- `toUpperCase()`
- `includes()`

These methods are used to clean and process student information.

### Loops

A `for` loop is used to simulate three evaluation steps.

### Scope

The project demonstrates:

- Global scope
- Function scope
- Block scope

### Template Literals

Template literals are used to create the student's formatted performance report.

---

## Project Structure

```text
student-performance-system/
│
├── index.html
├── script.js
└── README.md
