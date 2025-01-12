import {ReactNode} from "react";

const BasePopup = (props: {
    children: ReactNode,
    on: boolean,
    handleOn: () => void
}) => {
    const {children, on, handleOn} = props;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{display: on ? "flex" : "none"}}
                onClick={handleOn}
        >
            <div className="bg-white w-[500px] h-[500px] rounded-[20px]">
                <div className="w-full flex flex-col items-end pt-[10px] pr-[10px]">
                    <button className=" bg-blue w-fit rounded-[6px] py-[5px] px-[10px] text-white">X</button>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                {children}
                </div>
            </div>
        </div>
    )

}

export default BasePopup;