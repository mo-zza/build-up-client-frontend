"use client";

import { Logo } from "@src/components/assets/svg/Logo";
import { Ring } from "@src/components/assets/svg/Ring";
import {flexCenter} from "@src/components/css/flex";
import {Profile} from "@src/components/assets/svg/Profile";
import {PAGE_PATH} from "@src/enum/Path";
import useLocalStorage from "@src/hooks/useLocalStorage";
import {TOKEN} from "@src/enum/Auth";
import {useRecoilState} from "recoil";
import {userState} from "@src/atom/UserAtom";
import {useEffect} from "react";

export const Header = () => {
    const {getLocalStorage, removeLocalStorage} = useLocalStorage();
    const nickname = getLocalStorage(TOKEN.NICKNAME);
    const accessToken = getLocalStorage(TOKEN.ACCESS_TOKEN);
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        if (nickname !== undefined && nickname !== null && accessToken !== undefined && accessToken !== null) {
            setUser({
                nickname,
                accessToken
            });
        }
    }, []);

    const handleLogout = () => {
        removeLocalStorage(TOKEN.NICKNAME);
        removeLocalStorage(TOKEN.ACCESS_TOKEN);
        setUser({
            nickname: "",
            accessToken: ""
        });

        alert("로그아웃 되었습니다.");
    }


    const headerTextClass = "w-[74px] h-[23px] font-header lg:text-base md:text-[0.8rem] sm:text-[0.8rem] cursor-pointer";
    return (
        <header className={`${flexCenter} lg:gap-70px md:gap-20px w-full py-header border-b-2 border-header bg-white`}>
            <Logo />
            <div className="flex lg:gap-60px md:gap-20px">
                <p className={headerTextClass}>홈으로</p>
                <p className={headerTextClass}>마이페이지</p>
                <p className={headerTextClass}>캘린더</p>
                <p className={headerTextClass}>트레저리</p>
            </div>
            <div className={`${flexCenter} ml-[139px] gap-5`}>
                <input className="border-2 border-header rounded font-giants text-xs w-56 h-8" placeholder="프로젝트 또는 토큰 검색해보세요"/>
                <Ring/>
                {
                    user.nickname === undefined || user.nickname === null || user.nickname === "" ?
                        <Profile
                            routerPath={PAGE_PATH.LOGIN}
                        /> : <p className="text-blue" onClick={handleLogout}>{user.nickname}</p>
                }
            </div>
        </header>
    )
}