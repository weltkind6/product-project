import {CounterSchema} from "app/entities/Counter/model/types/CounterSchema";
import {UserSchema} from "app/entities/User";
import {LoginSchema} from "feauters/AuthByUserName";

export interface StateSchema {
   counter: CounterSchema;
   user: UserSchema;
   loginForm?: LoginSchema;
}
