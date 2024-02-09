import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({

})

export const makeStore = () => {
    return configureStore({
        reducer: reducers,
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']