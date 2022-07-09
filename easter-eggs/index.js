const getBanana = () => {
    try {
        return "b" + "a" + +"a" + "a";
    } catch (error) {
        console.error(error);
    }
}

const fail = () => {
    try {
        return (![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]];
    } catch (error) {
        console.error(error);
    }
}

const getFloatingPointNumber = () => {
    try {
        return 0.1 + 0.2;
    } catch (error) {
        console.error(error);
    }
}

// Source: https://github.com/denysdovhan/wtfjs
