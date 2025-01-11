import BasePage from "@src/components/layout/page/BasePage";
import H1 from "@src/components/font/h1/H1";
import DefaultLogin from "@src/app/login/DefaultLogin";

export default function Login() {
    return (
        <BasePage>
            <div className="mt-[100px] flex flex-col items-center">
                <H1>로그인하여 계속하기</H1>
                <p className="p-[20px]">BUILD-UP 계정으로 로그인해야 쿼스트 참여 및 쿼스트 등록 기능에 접근할 수 있습니다.</p>
                <DefaultLogin />
            </div>
        </BasePage>
    )
}