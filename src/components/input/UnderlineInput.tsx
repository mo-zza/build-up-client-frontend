"use client";

import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

const UnderlineInput = (props: { type: HTMLInputTypeAttribute, value: string, onChange: ChangeEventHandler, title: string}) => {
    const {type, value, onChange, title} = props;

    return (
        <div className="w-full py-[20px]">
            <p>{title}</p>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="border-b-2 border-black w-full bg-[#F9F9F9] h-[50px]"
            />
        </div>
    )

}

export default UnderlineInput;