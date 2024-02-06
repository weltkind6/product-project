import {createSelector} from "@reduxjs/toolkit";
import {CounterSchema} from "app/entities/Counter/model/types/CounterSchema";

import {getCounter} from "../getCounter/getCounter";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
