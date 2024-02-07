import {LoginForm} from "feauters/AuthByUserName/ui/LoginForm/LoginForm";
import {classNames} from "helpers/classNames/classNames";
import {Modal} from "shared/ui/Modal/Modal";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onCLose: () => void;

}
export const LoginModal = ({isOpen, onCLose}: LoginModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [])}
            isOpen={isOpen}
            onClose={onCLose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
