import Image from 'next/image'


const DefaultCard = (props: {
    key: number
    thumbnail: string,
    title: string,
    company: string,
    bup: string,
}) => {
    const {thumbnail, title, company, bup} = props;

    const parseDecimalToInteger = (decimal: string) => {
        return parseInt(decimal).toLocaleString();
    }

    return (
        <div className="border-black border-2 shadow-lg lg:w-[254px] lg:h-[380px] md:w-[240px] md:h-[350px] sm:w-[200px] sm:h-[300px] rounded-2xl">
            <div className="p-[20px]">
                <p className="text-[14px] text-gray-400">{company}</p>
                <div className="w-full h-[200px] bg-[#F9F9F9] rounded-t-2xl">
                    <Image src={thumbnail} alt="thumbnail"
                           width="254"
                           height="254"
                    />
                </div>
                <p className="text-[24px] sm:text-[20px] font-bold">{title}</p>
                <p className="text-[14px] mt-[10px] text-blue border-2 border-gray-400 p-[2px] rounded-[6px] w-fit">+ {parseDecimalToInteger(bup)} BUP 포인트</p>
            </div>
        </div>
    )
}

export default DefaultCard;