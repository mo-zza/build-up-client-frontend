import { Logo } from "@src/components/assets/svg/Logo";

export const Header = () => {
    const headerTextClass = "w-[74px] h-[23px] font-header text-base";
    return (
        <header className="flex justify-center gap-70px w-full my-header">
            <Logo />
            <div className="flex gap-60px">
            <p className={headerTextClass}>홈으로</p>
            <p className={headerTextClass}>마이페이지</p>
                <p className={headerTextClass}>캘린더</p>
            <p className={headerTextClass}>트레저리</p>
            </div>
        </header>
    )
}