import FourSwiper from './props/FourSwiper'
import SecondSwiper from './props/SecondSwiper'
import ThirdSwiper from './props/ThirdSwiper'

function Reviews() {
    return(
        <div className="container flex flex-col gap-[24px]">
            <p className="p-3 flex rounded-[16px] border-2 border-color items-center justify-center w-[275px] m-0 text-[24px] ">ОТЗЫВЫ КЛИЕНТОВ</p>
            <div className='flex gap-[24px]'>
                <SecondSwiper/>
                <ThirdSwiper/>
                <FourSwiper/>
            </div>
            <a href="" className='p-4 bg-black rounded-[16px] text-[24px] text-white w-[169px] flex items-center justify-center hover:opacity-70 duration-500'>Все отзывы</a>
        </div>
    )
}

export default Reviews