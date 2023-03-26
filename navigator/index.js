/**
 * Change the current page's URL
 * @param {string} location New URL
 */
export const setLocation = (location) => {
  try {
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
