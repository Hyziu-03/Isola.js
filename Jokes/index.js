// Current test coverage for navigator is 1/43

/**
 * Get the word "banana"
 * @returns {string} "banana"
 */
const getBanana = () => {
  try {
    return ("b" + "a" + +"a" + "a").toLowerCase();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get the string "fail"
 * @returns {string} "fail"
 */
const fail = () => {
  try {
    return (
      (![] + [])[+[]] +
      (![] + [])[+!+[]] +
      ([![]] + [][[]])[+!+[] + [+[]]] +
      (![] + [])[!+[] + !+[]]
    );
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get the number 0.30000000000000004
 * @returns {number} 0.30000000000000004
 */
const getFloatingPointNumber = () => {
  try {
    return 0.1 + 0.2;
  } catch (error) {
    console.error(error);
  }
};

// Source: https://github.com/denysdovhan/wtfjs
