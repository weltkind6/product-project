import {classNames} from "helpers/classNames/classNames";
import {useTranslation} from "react-i18next";
import styles from './LoginForm.module.scss';
import {Button} from "shared/ui/Button/Button";
import {translator} from "helpers/translator/translator";
import {Input} from "shared/ui/Input/ui/Input";

interface LoginFormProps {
    className?: string;

}
export const LoginForm = ({className}: LoginFormProps) => {
    const {}  = useTranslation();

    return (
        <div className={classNames(styles.LoginForm, {}, [])}>
            <Input
                placeHolder="Имя"
                autoFocus
            />
            <Input
                placeHolder="Пароль"
            />
            <Button className={styles.loginBtn}>
                {translator('Войти')}
            </Button>
        </div>
    );
};
