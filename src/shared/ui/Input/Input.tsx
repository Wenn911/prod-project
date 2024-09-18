import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface Props extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props: Props) => {
    const { 
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null)

    const [isFocused, setFocused] = useState(false)
    const [carriagePos, setCarriagePos] = useState(0)

    useEffect(() => {
        if (autoFocus) {
            setFocused(true)
            ref.current?.focus();
        }
    }, [autoFocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCarriagePos(e.target.value.length)
    }

    const onBlur = () => {
        setFocused(false)
    }

    const onFocus = () => {
        setFocused(true)
    }

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCarriagePos(e.target?.selectionStart || 0)
    }

    const mods: Mods = {
        [cls.readonly]: readOnly
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={classNames(cls.placeholder)}>{`${placeholder}>`}</div>}
            <div className={classNames(cls.carriageWrapper)}>
                <input 
                    ref={ref}
                    className={classNames(cls.input, {}, [])}
                    type={type} 
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {
                    !readOnly && 
                    isFocused && 
                    <span 
                        style={{ left: `${carriagePos * 9}px` }} 
                        className={classNames(cls.carriage)} 
                    />
                }
            </div>
        </div>
    )
});

