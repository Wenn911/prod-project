import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import './Loader.scss'

interface Props {
    className?: string;
}

export const Loader = memo(({ className }: Props) => {
    return <div className={classNames('loader', {}, [className])} />
    
});

