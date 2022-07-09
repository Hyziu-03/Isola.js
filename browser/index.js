export const setLocation = (location) => {
    try {
        window.location.href = location;
    } catch (error) {
        console.error(error);
    }
};

export const refresh = () => {
    try {
        window.location.reload(true);
    } catch (error) {
        console.error(error);
    }
}

export const scrollTop = () => {
    try {
        window.scrollTo(0, 0);
    } catch (error) {
        console.error(error);
    }
};

export const goBack = () => {
    try {
        history.back();
    } catch (error) {
        console.error(error);
    }
}

export const getSelection = () => {
    try {
        return window.getSelection().toString();
    } catch (error) {
        console.error(error);
    }
}

export const getCurrentPath = () => {
    try {
        return window.location.pathname;
    } catch (error) {
        console.error(error);
    }
}

export const useTabIndex = () => {
    try {
        document.addEventListener("keydown", (event) => {
            if (event.key === 13) document.activeElement.click();
        });
    } catch (error) {
        console.error(error);
    }
}

export const getPrefferedTheme = () => {
    try {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch (error) {
        console.error(error);
    }
}
