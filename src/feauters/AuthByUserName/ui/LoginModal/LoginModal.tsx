import {classNames} from "helpers/classNames/classNames";
import styles from './LoginModal.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "feauters/AuthByUserName/ui/LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onCLose: () => void;

}
export const LoginModal = ({isOpen, onCLose}: LoginModalProps) => {
    return (
        <Modal
            className={classNames(styles.LoginModal, {}, [])}
            isOpen={isOpen}
            onClose={onCLose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
