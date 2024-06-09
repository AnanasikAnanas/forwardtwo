import Subtract from '/Subtract.svg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import TwoShop from '/Vector.svg'
import SliderPicture from '/slider (1).svg'
import SecondSliderPicture from '/slider (2).svg'
import ThirdSliderPicture from '/slider (3).svg'
import Prev from '/ArrowLeft.svg'
import Next from '/ArrowRight.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function FirstSwiper() {
    return(
        <div className=''>
            <Swiper
            // install Swiper modules
            modules={[]}
            slidesPerView={1}
            spaceBetween={24}
            
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-[493px] rounded-[48px] p-6 gap-3 flex flex-col color-2'
            >
            <SwiperSlide className='h-[445px] flex'>
                <img src={SliderPicture} alt="" className='picture'/>
            </SwiperSlide>
            
            <SwiperSlide><img src={SliderPicture} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SliderPicture} alt="" /></SwiperSlide>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <p className='text-[24px]'>Название товара</p>
                    <p className='flex gap-2 items-center text-[36px]'>0 <img src={Subtract} alt="" className=''/></p>
                </div>
                <a href="" className='p-3 rounded-[24px] color-1 flex justify-center items-center gap-2 text-[24px]'>В корзину <img src={TwoShop} alt="" /></a>
            </div>
            </Swiper>
            
        </div>
    )
}

export default FirstSwiper