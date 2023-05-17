const logger = param = store => next => action => {
    console.log("Logging", param);
    next(action); // we need to call next() to process futher
}


export default logger
// currying