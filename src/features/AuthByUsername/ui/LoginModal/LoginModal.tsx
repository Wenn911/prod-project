import { FC, Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

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
            <Suspense fallback={null}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
};

