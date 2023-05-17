
/**
 * How to dispatch a function
 * 
 * 
 */
const store = configureStore()

// store.dispatch(() => {})   error if call like this
/**
 * Here is the idea, when work with API we want to Call API
 * API usually return a Promise
 * When the Promise is resolve => dispatch()
 * if the Promise is reject, we dispatch another function
 */