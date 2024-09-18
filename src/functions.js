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
