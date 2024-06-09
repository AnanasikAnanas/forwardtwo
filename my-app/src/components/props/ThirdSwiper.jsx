import Subtract from '/Subtract.svg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import TwoShop from '/Vector.svg'
import SliderPicture from '/slider (1).svg'
import SecondSliderPicture from '/slider (2).svg'
import ThirdSliderPicture from '/slider (3).svg'
import SliderPictureFour from '/slider (4).svg'
import SliderPictureFive from '/slider (5).svg'
import Prev from '/ArrowLeft.svg'
import Next from '/ArrowRight.svg'
import Tg from '/Vector (2).svg'

// Import Swiper styles
import 'swiper/css';


function ThirdSwiper() {
    return(
        <div className=''>
            <Swiper
            // install Swiper modules
            modules={[]}
            slidesPerView={1}
            spaceBetween={24}
            
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-[493px] rounded-[48px] p-6 gap-3 flex flex-col color-2 h-[640px]'
            >
            <SwiperSlide className='flex'>
                <img src={SliderPictureFive} alt="" className='picture '/>
            </SwiperSlide>
            
            <SwiperSlide><img src={SliderPictureFive} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SliderPictureFive} alt="" /></SwiperSlide>

            <div className='flex flex-col gap-[24px]'>
                
                <div className='p-6 color-3 flex rounded-[24px] gap-3 items-center'>
                    <div className='flex w-[353px] items-center gap-[12px]'>
                        <p className='text-[20px] opacity-50'>Данил</p>
                        <p className='opacity-20'>13 мая 2024 года</p>
                    </div>
                    
                    <a href="https://t.me/c3RlcHVuaw" className='rounded-[24px] w-[32px] h-[32px] bg-black flex justify-center items-center'><img src={Tg} alt="" /></a>
                </div>
            </div>
            </Swiper>
            
        </div>
    )
}

export default ThirdSwiper