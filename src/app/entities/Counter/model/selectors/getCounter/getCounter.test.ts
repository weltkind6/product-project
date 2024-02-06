import {DeepPartial} from "app/entities/Counter/model/types/DeepPartial";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

import {getCounter} from "./getCounter";
describe('get value', () => {
    test('should return a counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    })
})
