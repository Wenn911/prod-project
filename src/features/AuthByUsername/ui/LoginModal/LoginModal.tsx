import { FC } from "react"
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<Props> = ({ isOpen, onClose }) => {
    return (
        <Modal 
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    )
};

