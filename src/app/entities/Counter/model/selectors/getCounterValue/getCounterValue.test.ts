import {DeepPartial} from "app/entities/Counter/model/types/DeepPartial";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

import {getCounterValue} from "./getCounterValue";

describe('get value', () => {
    test('should return the exact value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
