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

/**result functions........
 * Mark to GPA & Grade
 * @param {*} mark
 */
const gpaAndGrade = (mark) => {
  let grade;
  let gpa;

  if (mark >= 0 && mark < 33) {
    grade = "F";
    gpa = 0.0;
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
    gpa = 1.0;
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
    gpa = 2.0;
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
    gpa = 3.0;
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
    gpa = 4.0;
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
    gpa = 5.0;
  } else {
    grade = "Invalid";
    gpa = "Invalid";
  }

  return {
    grade: grade,
    gpa: gpa,
  };
};

/**
 * get final Result
 */

const resultSystemPro = (marks) => {
  const { bangla, english, mathematics, sosal_Science, science, religion } =
    marks;

  const totalgpaAvg =
    (gpaAndGrade(bangla).gpa +
      gpaAndGrade(english).gpa +
      gpaAndGrade(mathematics).gpa +
      gpaAndGrade(sosal_Science).gpa +
      gpaAndGrade(science).gpa +
      gpaAndGrade(religion).gpa) /
    6;

  if (
    bangla >= 33 &&
    english >= 33 &&
    mathematics >= 33 &&
    sosal_Science >= 33 &&
    science >= 33 &&
    religion >= 33
  ) {
    if (totalgpaAvg >= 0 && totalgpaAvg < 1) {
      return {
        gpa: 0.0,
        grade: "F",
      };
    } else if (totalgpaAvg >= 1 && totalgpaAvg < 2) {
      return {
        gpa: 1.0,
        grade: "D",
      };
    } else if (totalgpaAvg >= 2 && totalgpaAvg < 3) {
      return {
        gpa: 2.0,
        grade: "C",
      };
    } else if (totalgpaAvg >= 3 && totalgpaAvg < 3.5) {
      return {
        gpa: 3.0,
        grade: "B",
      };
    } else if (totalgpaAvg >= 3.5 && totalgpaAvg < 4) {
      return {
        gpa: 3.5,
        grade: "C",
      };
    } else if (totalgpaAvg >= 4 && totalgpaAvg < 5) {
      return {
        gpa: 4.0,
        grade: "A",
      };
    } else if (totalgpaAvg >= 5) {
      return {
        gpa: 5,
        grade: "A+",
      };
    }
  } else {
    return {
      gpa: 0,
      grade: "F",
    };
  }
};
