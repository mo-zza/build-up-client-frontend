"use client";

import {ChangeEvent, useEffect, useState} from "react";
import UnderlineInput from "@src/components/input/UnderlineInput";
import BaseButton from "@src/components/button/BaseButton";
import LinkText from "@src/components/font/LinkText/LinkText";
import {PAGE_PATH} from "@src/enum/Path";
import {AuthService} from "@src/service/auth/auth.service";
import {useRouter} from "next/navigation";

const DefaultLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
    const router = useRouter();

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        if (!isEmail(email)) {
            alert("이메일 형식이 아닙니다.");
            return;
        }
        const authService = new AuthService();
        const res = await authService.login(email, password);
        console.log(res);
        switch (res.status) {
            case 200:
                router.push(PAGE_PATH.HOME);
                break;
            case 404:
                alert("아이디가 존재하지 않습니다.");
                break;
            case 400 | 403:
                alert("비밀번호가 일치하지 않습니다.");
                break;
        }
    }

    const isEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        if (email === "" || password === "") {
            setButtonEnabled(false);
            return;
        }
        if (email.length > 0 || password.length > 0) {
            setButtonEnabled(true);
            return;
        }
    }, [email, password]);


    return <>
        <UnderlineInput type="text" value={email} onChange={handleEmail} title="이메일 입력[ID]" />
        <UnderlineInput type="password" value={password} onChange={handlePassword} title="비밀번호 임력" />
        <div className="w-full mb-[20px]">
            <LinkText text="비밀번호 찾기" path={PAGE_PATH.CHANGE_PASSWORD} />
        </div>
        <BaseButton onClick={handleLogin} text="BUILD-UP 로그인" disabled={!buttonEnabled} />
        <div className="flex w-full items-center">
            <p className="p-[20px] text-[15px]">계정이 없으신가요?</p>
            <LinkText text="계정 만들기" path={PAGE_PATH.SIGN_UP} />
        </div>
    </>

}

export default DefaultLogin;