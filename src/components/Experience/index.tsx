import SectionHeader from "../ui/SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./data";

export default function Experience() {
    return (
        <section id='experience' className='mx-auto max-w-7xl px-6 py-28'>
            <div className='mx-auto max-w-3xl text-center'>
                <SectionHeader
                    eyebrow='Experience'
                    title='My professional journey.'
                    description="Companies and roles where I've applied my skills to build
                    software, improve business processes, and deliver reliable
                    solutions."
                />
            </div>

            <div className='mt-16 space-y-8'>
                {experiences.map(experience => (
                    <ExperienceCard
                        key={`${experience.company}-${experience.period}`}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}
