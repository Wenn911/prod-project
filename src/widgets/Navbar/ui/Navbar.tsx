import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)}>
                    {t("Logout")}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)}>
                {t("Sign in")}
            </Button>
            {isAuthModal && 
            <LoginModal 
                isOpen={isAuthModal} 
                onClose={onCloseModal}
            >
                123
            </LoginModal>
            }
        </div>
    );
};
