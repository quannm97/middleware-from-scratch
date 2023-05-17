const func = store => next => action => {
    // check type of action fist
    if (typeof action === "function") action();
    else next(action);
};

export default func;