import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    return (
        <div className='flex-1 text-center'>
            <h1 className='font-stack mb-4 text-6xl font-bold dark:text-white'>
                Jester De La Cruz
            </h1>

            <h2 className=' font-stack mb-6 text-2xl font-medium text-blue-600'>
                Full Stack Developer
            </h2>

            <p className='font-stack text-lg leading text-gray-600 dark:text-gray-300'>
                I build modern enterprise web applications using Laravel, React,
                TypeScript, SQL Server, and AWS, focusing on scalable systems
                and great user experiences.
            </p>

            <HeroButtons />
        </div>
    );
}
