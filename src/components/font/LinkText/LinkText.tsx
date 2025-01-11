"use client";

import {useRouter} from "next/navigation";

const LinkText = (props: {text: string, path: string}) => {
    const {text, path} = props;
    const router = useRouter();

    const handleLink = () => {
        router.push(path);
    }

    return (
        <p onClick={handleLink} className="text-[15px] text-blue cursor-pointer">{text}</p>
    )
}

export default LinkText;