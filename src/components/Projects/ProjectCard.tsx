import TechBadge from "./TechBadge";
import type { Project } from "./types";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <article className='overflow-hidden rounded-2xl border transition duration-300 ease-linear hover:-translate-y-2 hover:shadow-xl'>
            <img src={project.image} alt={project.title} />

            <div className='p-8'>
                <h3 className='text-2xl font-bold'>{project.title}</h3>

                <p className='mt-2 text-blue-600'>{project.subtitle}</p>

                <p className='mt-6 text-gray-600 leading-7'>
                    {project.description}
                </p>

                <div className='mt-6 flex flex-wrap gap-2'>
                    {project.technologies.map(tech => (
                        <TechBadge key={tech} tech={tech} />
                    ))}
                </div>
            </div>
        </article>
    );
}
