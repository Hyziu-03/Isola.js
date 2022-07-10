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

const doesExist = (element) => {
    try {
        if (typeof (element) !== 'undefined' && element != null) return true;
        else return false;
    } catch (error) {
        console.error(error);
    }
}

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

export const fadeIn = (element, ms) => {
    try {
        element.style.opacity = 0;
        if (ms) {
            let opacity = 0;
            const timer = setInterval(() => {
                opacity += 50 / ms;
                if (opacity >= 1) {
                    clearInterval(timer);
                    opacity = 1;
                }
                element.style.opacity = opacity;
            }, 50);
        } else {
            elem.style.opacity = 1;
        }
    } catch (error) {
        console.error(error);
    }
}
