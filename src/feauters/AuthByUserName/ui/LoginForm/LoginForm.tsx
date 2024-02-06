import {classNames} from "helpers/classNames/classNames";
import {translator} from "helpers/translator/translator";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/ui/Input";

import styles from './LoginForm.module.scss';
export const LoginForm = () => {
    const {}  = useTranslation();

    return (
        <div className={classNames(styles.LoginForm, {}, [])}>
            <Input
                placeHolder={translator('Имя')}
                autoFocus={true}
            />
            <Input
                placeHolder={translator('Пароль')}
                autoFocus={false}
            />
            <Button className={styles.loginBtn}>
                {translator('Войти')}
            </Button>
        </div>
    );
};
