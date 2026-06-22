import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function Projects() {
    return (
        <section id='projects' className='mx-auto max-w-7xl px-6 py-28'>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='font-semibold text-blue-600'>Featured Projects</p>

                <h2 className='mt-2 text-4xl font-bold'>Things I've built.</h2>

                <p className='mt-6 text-gray-600 leading-8'>
                    A selection of projects that demonstrate my experience
                    building scalable web applications, enterprise systems, and
                    modern user interfaces.
                </p>
            </div>

            <div className='mt-20 grid gap-10 lg:grid-cols-2'>
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
