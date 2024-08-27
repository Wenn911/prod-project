import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)}>
                {t("Sign in")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}>123</LoginModal>
        </div>
    );
};
