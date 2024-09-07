import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: Props) => {
    const { className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps } = props;
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={classNames(cls.placeholder)}>{`${placeholder}>`}</div>}
            <div className={classNames(cls.carriageWrapper)}>
                <input 
                    ref={ref}
                    className={classNames(cls.input, {}, [className])}
                    type={type} 
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span style={{ left: `${carriagePos * 9}px` }} className={classNames(cls.carriage)} />}
            </div>
        </div>
    )
});

