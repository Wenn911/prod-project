import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import './Loader.scss'

interface Props {
className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
    return <div className={classNames('loader', {}, [className])} />
    
};

