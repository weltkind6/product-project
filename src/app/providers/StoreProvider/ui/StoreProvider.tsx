import {Provider} from "react-redux";
import {ReactNode} from "react";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import {StatementState} from "aws-sdk/clients/glue";
interface StoreProviderProps {
    children: ReactNode;
    initialState?: StatementState;
}
export const StoreProvider = ({children, initialState} : StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
