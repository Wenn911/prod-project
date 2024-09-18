import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../model/types/country";

interface Props {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: Props) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [])

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Select country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
});

