import AboutCard from "./AboutCard";
import { aboutCards } from "./data";

export default function About() {
    return (
        <section id='about' className='mx-auto max-w-7xl px-6 py-28'>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='text-blue-600 font-semibold'>About Me</p>

                <h2 className='mt-2 text-4xl font-bold'>
                    Building software that solves real business problems.
                </h2>

                <p className='mt-6 text-gray-600 leading-8'>
                    I'm a Full Stack Developer passionate about creating
                    scalable, maintainable applications. My experience spans
                    enterprise systems, financial applications, vehicle
                    auctions, dashboards, and modern web technologies.
                </p>
            </div>

            <div className='mt-16 grid gap-6 md:grid-cols-2'>
                {aboutCards.map(card => (
                    <AboutCard key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
}
