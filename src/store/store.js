import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/icecream/iceCreamSlice"
import userReducer from "../features/users/userSlice"
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer
    },
    // middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(logger)
})

export default store;