import { useState, useEffect } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { navigation } from "./data";
import NavLink from "./NavLink";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTopPage, setIsTopPage] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        document.documentElement.classList.toggle("dark");
    };

    // Check user theme preference on initial load
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        setIsDarkMode(prefersDarkMode);
        document.documentElement.classList.toggle("dark", prefersDarkMode);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = scrollTop / scrollHeight;

            setIsTopPage(scrollTop === 0);

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className='fixed right-1/2 top-0 z-50 h-0.5 rounded-l-full bg-linear-to-r from-blue-500 via-cyan-500 to-sky-500 transition-all duration-200 ease-linear'
                style={{
                    width: `${(scrollProgress * 100) / 2}%`,
                }}
            />
            <div
                className='fixed left-1/2 top-0 z-50 h-0.5 rounded-r-full bg-linear-to-r from-sky-500 via-cyan-500 to-blue-500 transition-all duration-200 ease-linear'
                style={{
                    width: `${(scrollProgress * 100) / 2}%`,
                }}
            />
            <header className='sticky top-0 z-40'>
                <nav
                    className={`flex relative h-18 mx-auto items-center justify-between lg:justify-evenly px-6 transition-all duration-1000 ease-linear border-b-gray-200 dark:border-b-gray-800
                ${
                    isTopPage
                        ? "bg-transparent border-none"
                        : "bg-transparent  border-b border-b-gray-200 dark:border-b-gray-800 py-4 backdrop-blur-sm backdrop-saturate-100 dark:bg-slate-800/40"
                }`}
                >
                    <a
                        href='#hero'
                        className='text-lg lg:text-xl font-bartle tracking-tight text-slate-950 dark:text-gray-200'
                    >
                        JESTER
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden text-slate-800 dark:text-gray-200 hover:cursor-pointer active:scale-90'
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    <div className='hidden lg:flex items-center justify-center gap-10'>
                        {navigation.map(item => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                        {/* Dark mode button */}
                        {/* <button
                            onClick={toggleDarkMode}
                            className='hover:cursor-pointer text-slate-800 dark:text-gray-200 active:scale-95'
                        >
                            {isDarkMode ? <SunMedium /> : <MoonStar />}
                        </button> */}
                    </div>

                    <div className='hidden lg:flex'>
                        <a
                            href='#contact'
                            className='font-stack text-white bg-linear-to-r dark:from-blue-800 from-blue-500 
                            dark:to-blue-700 to-blue-600 rounded-md px-4 py-2 transition-colors duration-300 ease-linear
                            hover:from-blue-600 hover:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-800'
                        >
                            Let's Connect
                        </a>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div
                    className={`
                            lg:hidden flex flex-col items-center justify-center gap-3 absolute top-full left-0 right-0
                            bg-transparent backdrop-blur-sm backdrop-saturate-50 dark:bg-slate-800/60
                            border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-all duration-300 ease-in-out 
                            ${
                                isMenuOpen
                                    ? "opacity-100 scale-100 translate-y-0 visible"
                                    : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                            }
                        `}
                >
                    {navigation.map(item => (
                        <NavLink key={item.href} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                    <div className='flex w-full items-center justify-between gap-2 border-t border-t-slate-300 dark:border-t-slate-700 pt-2'>
                        <a
                            onClick={() => setIsMenuOpen(false)}
                            href='#contact'
                            className='flex-1 w-full font-stack text-center text-white bg-linear-to-r dark:from-blue-800 from-blue-500 
                            dark:to-blue-700 to-blue-600 rounded-md px-4 py-2 transition-colors duration-300 ease-linear
                            hover:from-blue-600 hover:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-800'
                        >
                            Let's Connect
                        </a>
                        {/* Dark mode button */}
                        <button
                            onClick={toggleDarkMode}
                            className='mx-auto border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-slate-800 rounded-md px-4 py-2 transition-colors duration-300 ease-linear hover:cursor-pointer
                             text-slate-600 dark:text-gray-200 active:scale-95'
                        >
                            {isDarkMode ? <SunMedium /> : <MoonStar />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
