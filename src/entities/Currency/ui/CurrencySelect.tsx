import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared";
import { classNames } from "shared/lib/classNames/classNames";
import { Currency } from "../model/types/currency";

interface Props {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: Props) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [])

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Select currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
});

