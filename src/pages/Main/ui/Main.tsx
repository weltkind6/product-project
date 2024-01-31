import {Counter} from "app/entities/Counter";
import {translator} from "helpers/translator/translator";

const Main = () => {
    return (
        <div>
            <h2>{translator('Главная')}</h2>
            <Counter />
        </div>
    )
}

export default Main
