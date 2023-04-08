/**
 * Change the current page's URL
 * @param {string} location New URL
 */
export const setLocation = (location) => {
  try {
    const invalidValues = ["", null, undefined];
    if (location in invalidValues || typeof location !== "string") return;
    window.location.href = location;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Change title of the page visible on tab
 * @param {string} title
 */
export const setPageTitle = (title) => {
  try {
    const invalidValues = ["", null, undefined];
    if (title in invalidValues || typeof title !== "string") return;
    document.title = title;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Reload the page
 */
export const refresh = () => {
  try {
    window.location.reload(true);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Scroll to the top of the page
 */
export const scrollTop = () => {
  try {
    window.scrollTo(0, 0);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Go to the previous page in the browser's history
 */
export const goBack = () => {
  try {
    history.back();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get cntent of the clipboard
 * @returns {string} Currently selected content
 */
export const getSelection = () => {
  try {
    const selection = window.getSelection().toString();
    if(selection) return selection;
    return "";
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get the page's path
 * @returns {string} Current URL path
 */
export const getCurrentPath = () => {
  try {
    const path = window.location.pathname;
    if (path === "") return "/";
    return path;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Make tabindex work on enter click
 */
export const useTabIndex = () => {
  try {
    document.addEventListener("keydown", (event) => {
      if (event.key === 13) document.activeElement.click();
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get the theme preffered by the user
 * @returns {string} User chosen theme name
 */
export const getPrefferedTheme = () => {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get HTML element's position on X and Y axes
 * @param {*} element HTML element
 * @returns {object} Element's position on a page
 */
export const getOffset = (element) => {
  try {
    if(element instanceof HTMLElement === false) return;
    const box = element.getBoundingClientRect();
    const client = {
      top: document.documentElement.clientTop,
      left: document.documentElement.clientLeft,
    };
    return {
      top: box.top + window.pageYOffset - client.top,
      left: box.left + window.pageXOffset - client.left,
    };
  } catch (error) {
    console.error(error);
  }
};

/**
 * Check if an element is present in an HTML document
 * @param {*} element HTML element
 * @returns {boolean} If the element is present on the page or not
 */
export const doesExist = (element) => {
  try {
    if (typeof element !== "undefined" && element != null ) return true;
    else if (element instanceof HTMLElement === false) return false;
    else return false;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Animate an HTML element in
 * @param {*} element An HTML element
 * @param {string} ms Time of the animation
 */
export const fadeOut = (element, ms) => {
  try {
    if (!ms) return;
    element.style.transition = `opacity ${ms} ms`;
    element.addEventListener(
      "transitionend",
      () => (element.style.display = "none"),
      false
    );
    element.style.opacity = "0";
  } catch (error) {
    console.error(error);
  }
};

/**
 * Animate an HTML element out
 * @param {*} element An HTML element
 * @param {string} ms Time of the animation
 */
export const fadeIn = (element, ms) => {
  try {
    if (element instanceof HTMLElement === false) return;
    element.style.opacity = 0;
    if (!ms) {
      element.style.opacity = 1;
      return;
    }
    let opacity = 0;
    const timer = setInterval(() => {
      opacity += 50 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      element.style.opacity = opacity;
    }, 50);
  } catch (error) {
    console.error(error);
  }
};
