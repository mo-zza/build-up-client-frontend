import BasePage from "@src/components/layout/page/BasePage";
import H1 from "@src/components/font/h1/H1";
import VerifyCode from "@src/app/change-password/VerifyCode";

export default function ChangePassword() {
    return (
        <BasePage>
            <div className="mt-[100px] flex flex-col items-center">
                <H1>비밀번호 찾기</H1>
                <p className="p-[20px]">기존 비밀번호를 초기화 하고 임시 비밀번호를 받습니다.</p>
                <VerifyCode />
            </div>
        </BasePage>
    )
}