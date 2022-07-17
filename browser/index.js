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
 * Reload the page
 */
export const refresh = () => {
    try {
        window.location.reload(true);
    } catch (error) {
        console.error(error);
    }
}

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
}

/**
 * Get cntent of the clipboard
 * @returns {string} Currently selected content
 */
export const getSelection = () => {
    try {
        return window.getSelection().toString();
    } catch (error) {
        console.error(error);
    }
}

/**
 * Get the page's path
 * @returns {string} Current URL path
 */
export const getCurrentPath = () => {
    try {
        return window.location.pathname;
    } catch (error) {
        console.error(error);
    }
}

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
}

/**
 * Get the theme preffered by the user
 * @returns {string} User chosen theme name
 */
export const getPrefferedTheme = () => {
    try {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch (error) {
        console.error(error);
    }
}

/**
 * Get HTML element's position on X and Y axes
 * @param {*} element HTML element 
 * @returns {object} Element's position on a page
 */
export const getOffset = (element) => {
    try {
        const box = element.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset - document.documentElement.clientTop,
            left: box.left + window.pageXOffset - document.documentElement.clientLeft
        };
    } catch (error) {
        console.error(error);
    }
}

/**
 * Check if an element is present in an HTML document
 * @param {*} element HTML element
 * @returns {boolean} If the element is present on the page or not
 */
export const doesExist = (element) => {
    try {
        if (typeof (element) !== 'undefined' && element != null) return true;
        else return false;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Animate an HTML element in
 * @param {*} element An HTML element
 * @param {string} ms Time of the animation
 */
export const fadeOut = (element, ms) => {
    try {
        if (!ms) return;
        element.style.transition = `opacity ${ms} ms`;
        element.addEventListener('transitionend', () => element.style.display = 'none', false);
        element.style.opacity = '0';
    } catch (error) {
        console.error(error);
    }
}

/**
 * Animate an HTML element out
 * @param {*} element An HTML element
 * @param {string} ms Time of the animation
 */
export const fadeIn = (element, ms) => {
    try {
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
}
