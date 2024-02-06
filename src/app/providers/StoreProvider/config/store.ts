import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {counterSlice} from "app/entities/Counter/model/slice/CounterSlice";
import {userReducer} from "app/entities/User/model/slice/userSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

export function createReduxStore(initialState: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterSlice.reducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}
