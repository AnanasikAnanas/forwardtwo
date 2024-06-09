import Logo from "/icons.svg"
import Navigation from "./props/Navigation"
import NavigationTwo from "./props/Navigation-2"

function Header() {
    return(
        <div className="pt-6 container">
            <header className="flex p-6 rounded-[24px] color-1 items-center justify-between">
                <a href="" className="hover:opacity-[0.7] duration-500"><img src={Logo} alt=""/></a>
                <Navigation />
                <NavigationTwo />
            </header>
        </div>
        
    )
}

export default Header