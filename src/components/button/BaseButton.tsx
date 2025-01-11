import {MouseEventHandler} from "react";

const BaseButton  = (props: {
    onClick: MouseEventHandler,
    text: string,
    disabled: boolean,
}) => {
    const {onClick, text, disabled} = props;

    const buttonStyle = `w-full text-white h-[50px] ${disabled ? "bg-gray-300" : "bg-blue"} rounded-[10px]`;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={buttonStyle}
        ><p>{text}</p>
        </button>
    )

}

export default BaseButton;