import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "app/entities/Counter/model/slice/CounterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: StateSchema) => state.counter.value)

    const incrementHandler  = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1>value {value}</h1>
            <Button onClick={incrementHandler}>+</Button>
            <Button onClick={decrementHandler}>-</Button>
        </div>
    );
};
