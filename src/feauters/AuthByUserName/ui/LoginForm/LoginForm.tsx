import {classNames} from "helpers/classNames/classNames";
import {useTranslation} from "react-i18next";
import styles from './LoginForm.module.scss';
import {Button} from "shared/ui/Button/Button";
import {translator} from "helpers/translator/translator";
import {Input} from "shared/ui/Input/ui/Input";
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
