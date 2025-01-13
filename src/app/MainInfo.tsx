"use client";

import {useEffect, useState} from "react";

const MainInfo = () => {
    const [data, setData] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setData(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const date = data.toISOString().split("T")[0];
    const hour = data.toISOString().split("T")[1].split(":")[0];
    const minute = data.toISOString().split("T")[1].split(":")[1];
    const second = data.toISOString().split("T")[1].split(":")[2].split(".")[0];

    return <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-center gap-[2px]">
            <div className="border-2 w-fit p-[10px] rounded-[4px] border-black bg-white">
                <p>{date} 일</p>
            </div>
            <p>:</p>
            <div className="border-2 w-fit p-[10px] rounded-[4px] border-black bg-white">
                <p>{hour} 시</p>
            </div>
            <p>:</p>
            <div className="border-2 w-fit p-[10px] rounded-[4px] border-black bg-white">
                <p>{minute} 분</p>
            </div>
            <p>:</p>
            <div className="border-2 w-fit p-[10px] rounded-[4px] border-black bg-white">
                <p>{second} 초</p>
            </div>
        </div>
        <div className="flex gap-[10px]">
            <div
                className="flex flex-col items-center justify-center border-2 border-blue p-[20px] h-[200px] w-[200px] gap-y-[10px] bg-white">
                <p>유통 중인 포인트</p>
                <p className="underline decoration-4 w-fit text-blue text-[50px] h-fit mt-[15px]">0</p>
                <p>bup</p>
            </div>
            <div
                className="flex flex-col items-center justify-center border-2 border-green p-[20px] h-[200px] w-[200px] gap-y-[10px] bg-white">
                <p>전체 리워드</p>
                <p className="underline decoration-4 w-fit text-green text-[50px] h-fit mt-[15px]">0</p>
                <p>Tether/USDT</p>
            </div>
        </div>
    </div>
}

export default MainInfo;