import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"
import { X, Menu } from "lucide-react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const navButtons = [
    {name: "Home", href: "#hero"},
    {name: "Projects", href: "#projects"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

const Navbar = () => {

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <span className="text-glow text-foreground">Zaid</span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop - Navigation buttons */}
                <div className="hidden md:flex space-x-8">
                    {navButtons.map((nav, key) => (
                        <a key={key} href={nav.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {nav.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
                
                {/* Mobile - Mapping through Navigation buttons */}

                <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 bg-background-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navButtons.map((nav, key) => (
                            <a
                            key={key}
                            href={nav.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                                {nav.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar