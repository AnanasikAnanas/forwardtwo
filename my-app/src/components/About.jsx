import Book from '/Book 2.svg'
import Picture from '/chorni.svg'

function About() {
    return(
        <div className='flex flex-col gap-[24px]'>
            <div className='p-3 flex rounded-[16px] border-2 border-color items-center justify-center w-[280px] text-[24px] ml-[196px] gap-2'>
                <img src={Book} alt="" />
                <p className="">ПАРУ СЛОВ О НАС</p>
            </div>
            <div className='p-[196px] flex gap-[96px] color-1 rounded-[128px] items-center'>
                <div className='flex flex-col gap-[48px]'>
                    <p className='text-[64px]'>Будь в движении с кроссовками от  
                    <span className='font-medium'> Step Forward!</span></p>
                    <p className='text-[36px] opacity-70'>Наши кроссовки созданы для тех, кто ценит комфорт и стиль в каждом шаге </p>
                    <p className='text-[24px] opacity-40'>Выбирай Step Forward — выбирай лучшее для себя.</p>
                </div>
                <img src={Picture} alt="" />
            </div>
        </div>
    )
}

export default About