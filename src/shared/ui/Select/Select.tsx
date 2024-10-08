import { ChangeEvent, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface Props {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: Props) => {
    const { className, label, options, value, onChange, readonly } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options])
    const mods: Mods = {};

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <div className={classNames(cls.Wrapper, mods)}>
            {label && (
                <span className={cls.label}>
                    {`${label}`}
                </span>
            )}
            <select 
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
});
