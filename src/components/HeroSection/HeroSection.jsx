import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="flex flex-row px-4 my-50"
        >
            <div className="container max-w-4xl mx-auto text-left z-10 -ml-9">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight ml-25"> 
                        <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Zaid
                            </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Sarhan
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ml-25">
                        I'm passionate about Web—Mobile Full-Stack Development,
                        <br />
                        Multimedia Digital creation,
                        <br />
                        & Educating
                    </p>
                    <div className="pt-4 ml-25 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my Work
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    );
};
