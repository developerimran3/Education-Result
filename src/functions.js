/**
 * Create Validation Alert.....
 * @param {*} msg
 * @param {*} type
 */
const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>
    `;
};

/**
 * one number
 */
const getRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};

/**
 *Check a Email Is Email
 * @param {*} email
 * @returns
 */
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
  return pattern.test(email);
};

/**
 *Check a Mobile Is Mobile
 * @param {*} mobile
 * @returns
 */
const isMobile = (mobile) => {
  const pattern = /^(\.+8801||8801||01)[0-9]{9}$/;
  return pattern.test(mobile);
};

/**
 *generate Unique Id....
 * @returns
 */
const createID = () => {
  // 4-byte timestamp
  const timestamp = Math.floor(Date.now() / 1000).toString(16);

  // 5-byte random value
  const randomValue = Math.floor(Math.random() * 0xffffffffffff)
    .toString(16)
    .padStart(12, "0")
    .substring(0, 10);

  // 3-byte counter
  let counter = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

  // Combine all parts into a 24-character hexadecimal string
  return timestamp + randomValue + counter;
};

/**
 * Time Ago System
 * @param {*} date
 * @returns
 */
const timeAgo = (date) => {
  const now = new Date();
  const secondsPast = Math.floor((now - date) / 1000);

  if (secondsPast < 30) {
    return "just now";
  }
  if (secondsPast < 60) {
    return `${secondsPast} sec ago`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} min${minutes !== 1 ? " " : ""} ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast < 2592000) {
    // Less than 30 days
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
  if (secondsPast < 31536000) {
    // Less than 1 year
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

//result functions.................
/**
 * Mark to Grade
 * @param {*} mark
 */
const getGrade = (mark) => {
  let grade;

  if (mark >= 0 && mark < 33) {
    grade = "F";
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
  }
  return grade;
};

/**
 * Mark to GPA
 * @param {*} mark
 */
const getGpa = (mark) => {
  let gpa;
  if (mark >= 0 && mark < 33) {
    gpa = 0.0;
  } else if (mark >= 33 && mark < 40) {
    gpa = 1.0;
  } else if (mark >= 40 && mark < 50) {
    gpa = 2.0;
  } else if (mark >= 50 && mark < 60) {
    gpa = 3.0;
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    gpa = 4.0;
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5.0;
  }

  return gpa;
};

/**
 * To check result
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 */
const isPassed = (s1, s2, s3, s4, s5, s6, s7) => {
  if (
    s1 >= 33 &&
    s2 >= 33 &&
    s3 >= 33 &&
    s4 >= 33 &&
    s5 >= 33 &&
    s6 >= 33 &&
    s7 >= 33
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Get Final GPA
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 * @returns
 */
let getFinalGPA = (s1, s2, s3, s4, s5, s6) => {
  if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33 && s6 >= 33) {
    let totalGpa =
      getGpa(s1) +
      getGpa(s2) +
      getGpa(s3) +
      getGpa(s4) +
      getGpa(s5) +
      getGpa(s6);

    return totalGpa / 6;
  } else {
    return 0;
  }
};

let getFinalGrade = (s1, s2, s3, s4, s5, s6, s7) => {
  let finalGpa = getFinalGPA(s1, s2, s3, s4, s5, s6, s7);

  if (finalGpa >= 0 && finalGpa < 1) {
    return "F";
  } else if (finalGpa >= 1 && finalGpa < 2) {
    return "D";
  } else if (finalGpa >= 2 && finalGpa < 3) {
    return "C";
  } else if (finalGpa >= 3 && finalGpa < 3.5) {
    return "B";
  } else if (finalGpa >= 3.5 && finalGpa < 4) {
    return "A-";
  } else if (finalGpa >= 4 && finalGpa < 5) {
    return "A";
  } else if (finalGpa >= 5) {
    return "A+";
  }
};
