import validator from "validator";

/**
 * Create a random hexadecimal value representing a colour
 * @returns {string} Random hexadecimal colour value
 */
export const generateRandomColor = () => {
  try {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")
    );
  } catch (error) {
    console.error(error);
  }
};

/**
 * Change the order of elements of any type in an array
 * @param {array} An array
 */
export const shuffleArray = (array) => {
  try {
    array.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Not doing anything for the time given
 * @param {number} Time in milliseconds
 * @returns {Promise} A promise resolving in the given millisecond time
 */
export const sleep = (ms) => {
  try {
    if(typeof ms !== "number") return;
    return new Promise((resolve) => setTimeout(resolve, ms));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Making sure that the given name is a correct one
 * @param {string} First name
 * @param {string} Last name
 * @returns {boolean} If the name is correct or not
 */
export const validateName = (firstName, lastName) => {
  try {
    const rule = /[a-zA-Z]/g;
    if (rule.test(firstName) === false || rule.test(lastName) === false)
      return false;
    else return !!firstName && !!lastName;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Create a number in the given range
 * @param {number} The smallest value of the range
 * @param {number} The biggest value of the range
 * @returns {number} A number within the given range
 */
export const generateRandomNumberInRange = (minimum, maximum) => {
  try {
    if(typeof minimum !== "number" || typeof maximum !== "number") return;
    if(minimum > maximum) return;
    const randomNumberInRange =
      Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
    return randomNumberInRange;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Invert the string
 * @param {string} A string
 * @returns An inverted string
 */
export const reverseString = (string) => {
  try {
    return string.split("").reverse().join("");
  } catch (error) {
    console.error(error);
  }
};

/**
 * Choose a random item from an array
 * @param {array} An array
 * @returns A random item from the array
 */
export const getRandomElement = (array) => {
  try {
    if(array instanceof Array === false || array.length === 0) return;
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Inspect the current time
 * @returns {string} Current time
 */
export const getTime = () => {
  try {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (seconds) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    const time = hours + ":" + minutes + ":" + seconds;
    return time;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Making sure the password is strong enough
 * @param {string} password
 * @returns {boolean}
 */
export const validatePassword = (password) => {
  try {
    const isStrong = validator.isStrongPassword(password, {
      minLength: 9,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    return isStrong;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Making sure the email is correct
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  try {
    return validator.isEmail(email);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Extracting email domain from an email adress
 * @param {*} email email adress
 * @returns {boolean} if the email is valid or not
 */
export const getEmailDomain = (email) => {
  try {
    const isValid = validateEmail(email);
    if (!isValid) {
      throw new Error("This email adress is invalid");
      return null;
    } else {
      return email.split("@")[1];
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * Removing duplicates from an array
 * @param {*} array array possibly with duplicate values
 * @returns {array} array without duplicate values
 */
export const removeDuplicates = (array) => {
  try {
    return [...new Set(array)];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Generating a one-time-password
 * @param {*} length One-time-password length
 * @returns One-time-password
 */
export const generateOTP = (length) => {
  try {
    let otp = "";
    const digits = "0123456789";
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  } catch (error) {
    console.error(error);
  }
};
