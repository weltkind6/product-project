import {CounterSchema} from "app/entities/Counter/model/types/CounterSchema";
import {UserSchema} from "app/entities/User";

export interface StateSchema {
   counter: CounterSchema;
   user: UserSchema;
}
