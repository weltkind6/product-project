import {getLoginState} from "feauters/AuthByUserName/model/selectors/getLoginState/getLoginState";
import {loginActions} from "feauters/AuthByUserName/model/slice/loginSlice";
import {classNames} from "helpers/classNames/classNames";
import {translator} from "helpers/translator/translator";
import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/ui/Input";

import styles from './LoginForm.module.scss';
export const LoginForm = memo (() => {
    const {}  = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={classNames(styles.LoginForm, {}, [])}>
            <Input
                placeHolder={translator('Имя')}
                autoFocus={true}
                onChange={onChangeUserName}
                value={loginForm.username}
            />
            <Input
                placeHolder={translator('Пароль')}
                autoFocus={false}
                onChange={onChangePassword}
                value={loginForm.password}
            />
            <Button className={styles.loginBtn}>
                {translator('Войти')}
            </Button>
        </div>
    );
});
