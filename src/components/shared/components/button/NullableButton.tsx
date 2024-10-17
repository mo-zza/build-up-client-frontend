import {MouseEventHandler} from "react";

export const NullableButton = (props: {onClick?: MouseEventHandler<HTMLButtonElement>, children: React.ReactNode}) => {
    const {onClick, children} = props;
    return <button className={`${onClick === undefined && 'cursor-default'}`} onClick={onClick}>{children}</button>
}