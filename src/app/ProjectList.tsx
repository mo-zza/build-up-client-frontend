"use client";

import DefaultCard from "@src/components/card/DefaultCard";

const ProjectList = () => {
    const defaultCardInfo = [
        {
            title: "빌드업 튜토리얼",
            company: "BUILD-UP",
            bup: "1000.00000",
            thumbnail: "/assets/images/Step-1.svg",
        },
        {
            title: "빌드업 2단계",
            company: "BUILD-UP",
            bup: "1000.00000",
            thumbnail: "/assets/images/Step-2.svg",
        },
        {
            title: "빌드업 2단계",
            company: "BUILD-UP",
            bup: "1000.00000",
            thumbnail: "/assets/images/Step-2.svg",
        },
        {
            title: "빌드업 2단계",
            company: "BUILD-UP",
            bup: "1000.00000",
            thumbnail: "/assets/images/Step-2.svg",
        },
        {
            title: "빌드업 2단계",
            company: "BUILD-UP",
            bup: "1000.00000",
            thumbnail: "/assets/images/Step-2.svg",
        },
    ]

    return <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {defaultCardInfo.map((info, index) =>
        <DefaultCard
            key={index}
            title={info.title}
            company={info.company}
            bup={info.bup}
            thumbnail={info.thumbnail}
        />
    )}</div>
}

export default ProjectList;