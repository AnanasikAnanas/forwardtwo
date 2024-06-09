import Shop from '/Shop.svg'
import Subtract from '/Subtract.svg'
import TwoShop from '/Vector.svg'
import SliderPicture from '/slider.svg'
import FirstSwiper from './props/FirstSwiper'
import Sale from './props/Sale'


function Now() {
    return(
        <div className="flex flex-col gap-6 container">
            <div className="flex p-3 rounded-[16px] border-2 w-[180px] border-color items-center gap-2 text-[24px]">
                <img src={Shop} alt="" />
                <p>НОВИНКИ</p>
            </div>
            <div className='flex gap-6'>
                <FirstSwiper />
                <FirstSwiper />
                <FirstSwiper/>
            </div>
        </div>

    )
}

export default Now