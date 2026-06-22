export default function HeroButtons() {
    return (
        <div className='mt-10 flex gap-4'>
            <a
                href='#projects'
                className='rounded-lg bg-black px-6 py-3 text-white'
            >
                View Projects
            </a>

            <a
                href='/resume.pdf'
                className='rounded-lg border px-6 py-3'
                target='_blank'
                rel='noopener noreferrer'
            >
                Download Resume
            </a>
        </div>
    );
}
