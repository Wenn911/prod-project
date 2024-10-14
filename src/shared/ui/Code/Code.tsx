import { memo, ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from "../../assets/icons/copy.svg";
import cls from "./Code.module.scss";

interface Props {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: Props) => {
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button 
                className={cls.copyBtn} 
                theme={ButtonTheme.CLEAR} 
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
});

