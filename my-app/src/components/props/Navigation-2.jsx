import Shop from '/Shop.svg'
import Search from '/Search.svg'
import User from '/User.svg'
import Like from '/Like.svg'
function NavigationTwo() {
    return(
        <div className='flex gap-2'>
            <a href="" className='p-2 hover:opacity-[0.7] duration-500'><img src={Shop} alt="" /></a>
            <a href="" className='p-2 hover:opacity-[0.7] duration-500' ><img src={Search} alt="" /></a>
            <a href="" className='p-2 hover:opacity-[0.7] duration-500'><img src={User} alt="" /></a>
            <a href="" className='p-2 hover:opacity-[0.7] duration-500'><img src={Like} alt="" /></a>
        </div>
    )
}

export default NavigationTwo