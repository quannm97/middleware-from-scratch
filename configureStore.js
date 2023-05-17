import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducer";
import logger from "logger.js"
import func from "./func";
/**
 * 
 * @returns function
 * reducer logic depend on yourself, it can be console.log(1) or something
 */

export default function () {
    return configureStore({
        reducer,
        middleware: [
            logger({destination:"console"}), // result at addParam to logger
            func // order is matter, care
        ] 
    });
}