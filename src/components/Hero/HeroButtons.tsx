export default function HeroButtons() {
    return (
        <div className='mt-10 flex items-center justify-center gap-4'>
            <a
                href='#projects'
                className='rounded-lg bg-black dark:bg-blue-500 px-6 py-3 text-white'
            >
                View Projects
            </a>

            <a
                href='/resume.pdf'
                className='rounded-lg border px-6 py-3 dark:border-blue-500 dark:text-white'
                target='_blank'
                rel='noopener noreferrer'
            >
                Download Resume
            </a>
        </div>
    );
}
