"use client";

import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

const UnderlineInput = (props: {
    type: HTMLInputTypeAttribute,
    value: string,
    onChange: ChangeEventHandler,
    title: string,
    required?: boolean
}) => {
    const {type, value, onChange, title, required = false} = props;

    return (
        <div className="w-full py-[20px]">
            <div className="flex">
                {required && <p className="text-blue">*</p>}
                <p>{title}</p>
            </div>
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