import Marquee from "react-fast-marquee";
import Salee from '/Frame 35 (1).svg'
const Sale = () =>{
    return(
        <Marquee
          gradient={true}
          speed={100}
          autoFill={true}
          gradientWidth="100px"
          direction="left"
          className="w-full mt-4 bg-[linear-gradient(90deg,#B0E3F9_0%,#FFFFFF_100%)] h-12 rounded-3xl"
        >
          <div className="flex gap-2 h-[80px] py-6">
            <p className="flex flex-row gap-2 items-center text-3xl ml-6">Успей купить</p>
            <img src={Salee} alt="" />
          </div>
          
        </Marquee>
    )
}

export default Sale