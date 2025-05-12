import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

const navButtons = [
    {name: "Home", href: "#hero"},
    {name: "Projects", href: "projects"},
    {name: "About", href: "about"},
    {name: "Skills", href: "skills"},
    {name: "Contact", href: "contact"},
]

const Navbar = () => {

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll)

        return () =>  window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
           <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Zaid</span>
                        Portfolio
                    </span>
                </a>
            </div> 
        </nav>
    )
}

export default Navbar