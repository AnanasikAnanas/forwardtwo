import Link from '/Link.svg'
import Tg from '/Vector (3).svg'
import Inst from '/Vector (4).svg'


function Contact() {
    return(
        <div className='container flex flex-col gap-6'>
            <div className='flex gap-2 rounded-[16px] p-3 border-color border-2 w-[191px] justify-center items-center font-normal text-[24px]'>
                <img src={Link} alt="" />
                <p>КОНТАКТЫ</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='p-[64px] contact-1 h-[355px] justify-center flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='text-[64px] text-white'>Телеграм канал</p>
                        <a href="https://t.me/c3RlcHVuaw" className='rounded-[48px] w-[128px] h-[128px] bg-black flex justify-center items-center'><img src={Tg} alt="" /></a>
                    </div>
                    <a href='' className='text-[24px] opacity-70 text-white'>@stepforward</a>
                </div>
                <div className='p-[64px] contact-2 h-[355px] justify-center flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='text-[64px] text-white'>Инстаграм</p>
                        <a href="https://t.me/c3RlcHVuaw" className='rounded-[48px] w-[128px] h-[128px] bg-black flex justify-center items-center'><img src={Inst} alt="" /></a>
                    </div>
                    <a href='' className='text-[24px] opacity-70 text-white'>@stepforward</a>
                </div>
            </div>
            <a href="" className='p-[24px] color-1 rounded-[20px] flex justify-center items-center text-[24px] hover:opacity-70 duration-500'>Оставить Предложение</a>
        </div>
    )
}

export default Contact