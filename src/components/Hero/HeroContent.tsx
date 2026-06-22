import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    return (
        <div className='flex-1'>
            <p className='mb-4 text-lg'>👋 Hi, I'm</p>

            <h1 className='mb-4 text-6xl font-bold'>Jester</h1>

            <h2 className='mb-6 text-2xl font-semibold text-blue-600'>
                Full Stack Developer
            </h2>

            <p className='max-w-xl text-lg leading-8 text-gray-600'>
                I build modern enterprise web applications using Laravel, React,
                TypeScript, SQL Server, and AWS, focusing on scalable systems
                and great user experiences.
            </p>

            <HeroButtons />
        </div>
    );
}
