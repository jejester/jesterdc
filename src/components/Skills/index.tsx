import SkillCategory from "./SkillCategory";
import { skillCategories } from "./data";

export default function Skills() {
    return (
        <section id='skills' className='mx-auto max-w-7xl px-6 py-28'>
            <div className='mx-auto max-w-3xl text-center'>
                <p className='font-semibold text-blue-600'>Skills</p>

                <h2 className='mt-2 text-4xl font-bold'>
                    Technologies I use every day.
                </h2>

                <p className='mt-6 text-gray-600 leading-8'>
                    My toolkit spans frontend, backend, databases, cloud
                    services, and modern development tools used to build
                    reliable web applications.
                </p>
            </div>

            <div className='mt-16 grid gap-6 lg:grid-cols-2'>
                {skillCategories.map(category => (
                    <SkillCategory key={category.title} {...category} />
                ))}
            </div>
        </section>
    );
}
