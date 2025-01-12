"use client";

import UnderlineInput from "@src/components/input/UnderlineInput";
import {ChangeEvent, useEffect, useState} from "react";
import {MemberService} from "@src/service/member/member.service";
import {AuthService} from "@src/service/auth/auth.service";

const DefaultSignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [sendCode, setSendCode] = useState<boolean>(false);
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [codeCheck, setCodeCheck] = useState<boolean>(false);
    const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
    const [signUpCheck, setSignUpCheck] = useState<boolean>(false);

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSendCode = async () => {
        if (email.length === 0 || email === "") {
            alert("이메일을 입력해주세요.");
            return;
        }

        if (!isEmail(email)) {
            alert("이메일 형식이 아닙니다.");
            return;
        }

        const authService = new AuthService();
        const res = await authService.sendSignUpCode(email);
        switch (res.status) {
            case 200:
                setSendCode(true);
                alert("인증번호가 전송되었습니다.");
                break;
            default:
                alert("인증번호 전송에 실패했습니다.");
                break;
        }
    }

    const verifyCode = async () => {
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
                setCodeCheck(true);
                setSendCode(false);
                alert("인증번호가 확인되었습니다.");
                break;
            default:
                alert("인증번호가 일치하지 않습니다.");
                break;
        }
    }

    const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    }

    const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    const handleAgreeTerms = () => {
        setAgreeTerms(!agreeTerms);
    }

    const handleEmailCheck = async () => {
        if (email.length === 0 || email === "") {
            alert("이메일을 입력해주세요.");
            return;
        }

        if (!isEmail(email))  {
            alert("이메일 형식이 아닙니다.");
            return;
        }

        const memberService = new MemberService();
        const res = await memberService.existsEmail(email);
        switch (res.status) {
            case 200:
                if (!res.data.data) {
                    setEmailCheck(true);
                } else {
                    alert("이미 가입된 이메일입니다.");
                }
                break;
            default:
                alert("이미 가입된 이메일입니다.");
                break;
        }
    }

    const handleNicknameCheck = async () => {
        if (nickname.length === 0 || nickname === "") {
            alert("닉네임을 입력해주세요.");
            return;
        }

        const memberService = new MemberService();
        const res = await memberService.existsNickname(nickname);
        switch (res.status) {
            case 200:
                if (!res.data.data) {
                    setNicknameCheck(true);
                } else {
                    alert("이미 사용중인 닉네임입니다.");
                }
                break;
            default:
                alert("이미 사용중인 닉네임입니다.");
                break;
        }
    }

    const isEmail = (email: string) => {
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailReg.test(email);
    }

    const validationButtonCss = (validation: boolean) => `${validation ? "bg-green" : "bg-blue"} rounded-xl p-[10px] text-white`;
    const signUpButtonCss = `${signUpCheck ? "bg-blue" : "bg-gray-300"} rounded-xl p-[10px] text-white w-full`;

    const handleSignUp = async () => {
        const data = {
            email,
            password,
            nickname,
            agreeTerms
        }

        const memberService = new MemberService();
        const res = await memberService.signUp(data);
        switch (res.status) {
            case 201:
                alert("회원가입이 완료되었습니다.");
                break;
            default:
                alert("회원가입에 실패했습니다.");
                break;
        }
    }

    useEffect(() => {
        setEmailCheck(false);
        setCodeCheck(false);
    }, [email]);

    useEffect(() => {
        setNicknameCheck(false);
    }, [nickname]);

    useEffect(() => {
        if (password.length > 0 && rePassword.length > 0 && password === rePassword
            && emailCheck && codeCheck && nicknameCheck && agreeTerms) {
            setSignUpCheck(true);
        }
    }, [emailCheck, codeCheck, nicknameCheck, password, rePassword, agreeTerms]);

    return (
        <>
            <div className="w-full flex-col items-center justify-center">
            <UnderlineInput
                required={true}
                type={"text"}
                value={email}
                onChange={handleEmail}
                title={"이메일 입력 [ID]"}
            />
            <button className={validationButtonCss(emailCheck)}
                    onClick={handleEmailCheck}
            >{emailCheck ? "사용 가능" : "이메일 중복 확인"}</button>
            </div>
            {emailCheck &&
                <>
                    <UnderlineInput
                        required={true}
                        type={"text"}
                        value={code}
                        onChange={handleCode}
                        title={"이메일 인증 번호"}
                    />
                    <div className="flex gap-[20px]">
                        <button className={validationButtonCss(codeCheck)}
                                onClick={handleSendCode}
                        >{codeCheck ? "이메일 인증 완료" : "이메일 인증 전송"}</button>
                        {sendCode &&
                            <button className={validationButtonCss(sendCode)}
                                    onClick={verifyCode}
                            >인증코드 확인</button>
                        }
                    </div>
                </>
            }
            <UnderlineInput
                required={true}
                type={"password"}
                value={password}
                onChange={handlePassword}
                title={"비밀번호 입력"}
            />
            <UnderlineInput
                required={true}
                type={"password"}
                value={rePassword}
                onChange={handleRePassword}
                title={"비밀번호 재입력"}
            />
            <div className="w-full">
                <UnderlineInput
                    required={true}
                    type={"text"}
                    value={nickname}
                    onChange={handleNickname}
                    title={"유저 닉네임"}
                />
                <button className={validationButtonCss(nicknameCheck)}
                        onClick={handleNicknameCheck}
                >{nicknameCheck ? "사용 가능" : "닉네임 중복 확인"}</button>
            </div>
            <div className="border-2 p-[20px] w-full m-[20px] flex gap-[10px]">
                <input
                    className="w-[20px] h-[20px] rounded-2xl"
                    type="checkbox"
                    onClick={handleAgreeTerms}
                />
                <p>약관에 모두 동의</p>
            </div>
            <button
                className={signUpButtonCss}
                disabled={!signUpCheck}
                onClick={handleSignUp}
            >
                <p>회원가입</p>
            </button>
        </>
    )
}

export default DefaultSignUp;