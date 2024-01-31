import {getCounter} from "./getCounter";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {DeepPartial} from "app/entities/Counter/model/types/DeepPartial";
describe('get value', () => {
    test('should return a counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    })
})
