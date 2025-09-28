import Navbar from "../components/Navbar/Navbar";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { HeroSection } from "../components/HeroSection/HeroSection";

const Home = () => {

    return (
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <main>
                <HeroSection />
            </main>
        </div>
        </>
    );
}

export default Home