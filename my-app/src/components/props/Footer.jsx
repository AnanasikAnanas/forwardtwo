import Logo from "/icons.svg"

function Footer() {
    return(
        <div className="p-6 color-1 rounded-[24px] container flex justify-between items-center">
            <img src={Logo} alt="" className="hover:opacity-70 duration-500"/>
            <div className="flex gap-6">
                <div className="text-[24px] flex flex-col">
                    <a href="" className="underline hover:opacity-70 duration-500">Поддержка</a>
                    <a href="" className="underline hover:opacity-70 duration-500">Доставка и оплата</a>
                </div>
                <div className="text-[24px] flex flex-col">
                    <a href="" className="underline hover:opacity-70 duration-500">Возврат и гарантия</a>
                    <a href="" className="underline hover:opacity-70 duration-500">Подарочные сертификаты</a>
                </div>
            </div>
            <div className="text-[24px]">
                <p>Designer <a href="" className="underline hover:opacity-70 duration-500">Stepan Korovin</a></p>
                <p>Frontend dev <a href="" className="underline hover:opacity-70 duration-500">Kondrashov Egor</a></p>
                <p>Backend dev <a href="" className="underline hover:opacity-70 duration-500">Text</a></p>
            </div>
        </div>
    )
}

export default Footer