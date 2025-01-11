import {ReactNode} from "react";

const BasePage = (props: {children: ReactNode}) => {
    const {children} = props;
    return (
        <div className="flex items-center justify-center">
            <div className="lg:w-[1024px] md:w-[728px] sm:w-[640px]">
                {children}
            </div>
        </div>
    )
}

export default BasePage;