import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {counterSlice} from "app/entities/Counter/model/slice/CounterSlice";

export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterSlice.reducer
        },
        preloadedState: initialState,
    })
}
