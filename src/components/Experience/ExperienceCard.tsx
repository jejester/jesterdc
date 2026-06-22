import TechBadge from "../Projects/TechBadge";
import type { Experience } from "./types";

type ExperienceCardProps = {
    experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <article className='rounded-2xl border p-8'>
            <p className='text-sm font-semibold text-blue-600'>
                {experience.period}
            </p>

            <h3 className='mt-2 text-2xl font-bold'>{experience.position}</h3>

            <p className='text-gray-600'>{experience.company}</p>

            <ul className='mt-6 list-disc space-y-2 pl-5'>
                {experience.description.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className='mt-6 flex flex-wrap gap-2'>
                {experience.technologies.map(tech => (
                    <TechBadge key={tech} tech={tech} />
                ))}
            </div>
        </article>
    );
}
