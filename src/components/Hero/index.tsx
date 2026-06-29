import { ArrowDown } from "lucide-react";
import HeroButtons from "./HeroButtons";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isScrolling, setIsScrolling] = useState(false);
    // Detect scrolling and update isScrolling state
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id='hero-parent'>
            <div className='absolute inset-0' id='radial'></div>
            <section
                id='hero'
                className='flex relative min-h-screen max-w-full flex-col items-center justify-center text-center gap-2 px-6'
            >
                <h1 className='font-stack mb-4 text-6xl font-bold dark:text-white'>
                    Jester De La Cruz
                </h1>

                <h2 className=' font-stack mb-6 text-2xl font-medium text-blue-600'>
                    Full Stack Developer
                </h2>

                <p className='font-stack text-lg max-w-3xl leading text-gray-600 dark:text-gray-300'>
                    I build modern enterprise web applications using Laravel,
                    React, TypeScript, SQL Server, and AWS, focusing on scalable
                    systems and great user experiences.
                </p>

                <HeroButtons />
                <div
                    className={`absolute bottom-30 flex flex-col items-center justify-center gap-2 transition-all duration-1000 ease-in-out   
                                ${
                                    isScrolling
                                        ? "opacity-0 scale-95 translate-y-2 invisible pointer-events-none"
                                        : "opacity-100 scale-100 translate-y-0 visible"
                                }`}
                >
                    <p className='text-xs text-gray-500 dark:text-gray-200 uppercase font-bartle'>
                        Scroll{" "}
                    </p>
                    <ArrowDown className='animate-bounce text-gray-500 dark:text-gray-200' />
                </div>
            </section>
        </div>
    );
}
