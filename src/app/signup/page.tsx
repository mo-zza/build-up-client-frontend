import BasePage from "@src/components/layout/page/BasePage";
import H1 from "@src/components/font/h1/H1";
import DefaultSignUp from "@src/app/signup/DefaultSignUp";

export default function SignUp() {
    return (
        <BasePage>
            <div className="mt-[100px] flex flex-col items-center">
                <H1>계정 만들기</H1>
                <DefaultSignUp />
            </div>
        </BasePage>
)
}