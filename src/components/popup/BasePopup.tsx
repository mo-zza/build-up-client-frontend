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
            <div className="bg-white w-[500px] h-[500px] rounded-[20px] flex flex-col items-center justify-center m-[20px]">
                {children}
            </div>
        </div>
    )

}

export default BasePopup;