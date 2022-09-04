/**
 * Create a random hexadecimal value representing a colour
 * @returns {string} Random hexadecimal colour value
 */
export const generateRandomColor = () => {
    try {
        return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    } catch (error) {
        console.error(error);
    }
}

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
        return new Promise((resolve) => setTimeout(resolve, ms))
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
        if (rule.test(firstName) === false || rule.test(lastName) === false) return false;
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
        const randomNumberInRange = Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
        return randomNumberInRange;
    } catch (error) {
        console.error(error);
    }
}

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
}

/**
 * Choose a random item from an array
 * @param {array} An array 
 * @returns A random item from the array
 */
export const getRandomElement = (array) => {
    try {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    } catch (error) {
        console.error(error);
    }
}

/**
 * Inspect the current time
 * @returns {string} Current time
 */
export const getTime = () => {
    try {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        if (seconds) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;

        const time = hours + " : " + minutes + ":" + seconds;
        return time;
    } catch (error) {
        console.error(error);
    }
}
