const func = ({dispatch, getState}) => next => action => {
    // check type of action fist
    if (typeof action === "function") action(dispatch, getState);
    else next(action);
};

export default func;