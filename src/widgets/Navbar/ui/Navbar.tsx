import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)}>
                {t("Sign in")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>123</Modal>
        </div>
    );
};
