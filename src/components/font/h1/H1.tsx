import {ReactNode} from "react";

const H1 = (props: {children: ReactNode}) => {
    const {children} = props;
    return (
        <p className="lg:text-[50px] md:text-[30px] p-[20px]">{children}</p>
    )
}

export default H1;