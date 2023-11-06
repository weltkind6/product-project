import {useState} from "react";
import './Counter.scss';


export const Counter = () => {
    const [state, setState] = useState(0)

    return (
        <div>
            <button onClick={() => setState(state + 1)}>Add +</button>
            <br />
            <strong>{state}</strong>
        </div>
    );
};
