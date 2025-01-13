"use client";

import {ChangeEvent, useEffect, useState} from "react";
import UnderlineInput from "@src/components/input/UnderlineInput";
import BaseButton from "@src/components/button/BaseButton";
import {AuthService} from "@src/service/auth/auth.service";
import BasePopup from "@src/components/popup/BasePopup";
import {PAGE_PATH} from "@src/enum/Path";
import {useRouter} from "next/navigation";

const VerifyCode = () => {
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [sendCodeEnabled, setSendCodeEnabled] = useState<boolean>(false);
    const [sendCode, setSendCode] = useState<boolean>(false);
    const [codeVerified, setCodeVerified] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const router = useRouter();

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    const handleSendVerifyCode = async () => {
        if (!isEmail(email)) {
            alert("이메일 형식이 아닙니다.");
            return;
        }
        const authService = new AuthService();
        const res = await authService.resetPassword(email);
        switch (res.status) {
            case 200:
                setSendCode(true);
                alert("인증번호가 전송되었습니다.");
                break;
            case 404:
                alert("가입하지 않은 이메일입니다.");
                break;
            default:
                alert("인증번호 전송에 실패했습니다.");
                break;
        }
    }

    const handleVerifyCode = async () => {
        if (code.length === 0 || code === "") {
            alert("인증번호를 입력해주세요.");
            return;
        }

        if (!sendCode) {
            alert("인증번호를 전송해주세요.");
            return;
        }

        const authService = new AuthService();
        const res = await authService.verifyCode(email, code);
        switch (res.status) {
            case 200:
                setCodeVerified(true);
                setVerified(true);
                break;
            case 404:
                alert("인증번호가 일치하지 않습니다.");
                break;
            default:
                alert("인증번호 확인에 실패했습니다.");
                break;
        }
    }

    const isEmail = (email: string) => {
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailReg.test(email);
    }

    const handleLogin = () => {
        router.push(PAGE_PATH.LOGIN);
    }

    useEffect(() => {
        if (email.length > 0 || email !== "") {
            setSendCodeEnabled(true);
        }
    }, [email, code]);

    return <>
            <BasePopup
                on={verified}
                handleOn={() => setVerified(false)}
            >
                <p className="pt-[0px] p-[20px] lg:text-[40px] md:text-[30px] sm:text-[20px]">임시 비밀번호 전송 완료</p>
                <p align="center" className="p-[20px] lg:text-[20px] md:text-[20px] text-[15px]">이메일로 발송된 임시 비밀번호를 확인한 후, 빌드업에 로그인해주세요.</p>
                <p align="center" className="p-[20px] lg:text-[20px] md:text-[20px] text-[15px]">보안을 위해 로그인 후 마이페이지에서 비밀번호를 변경하기시 바랍니다.</p>
                <div className="p-[20px] w-full">
                    <BaseButton onClick={handleLogin} text="BUILD-UP 로그인" disabled={false} />
                </div>
            </BasePopup>
            <UnderlineInput type="text" value={email} onChange={handleEmail} title="가입한 이메일 입력[ID]" />
            <UnderlineInput type="password" value={code} onChange={handleCode} title="인증번호 입력" />
        { !sendCode ?
            <BaseButton onClick={handleSendVerifyCode} text="인증번호 받기" disabled={!sendCodeEnabled} />
            : <BaseButton onClick={handleVerifyCode} text="임시 비밀번호 받기" disabled={code === ""} />
        }
        </>
}

export default VerifyCode;