import SkillBadge from "./SkillBadge";

type Props = {
    title: string;
    skills: string[];
};

export default function SkillCategory({ title, skills }: Props) {
    return (
        <div className='rounded-2xl border p-8'>
            <h3 className='mb-6 text-xl font-semibold'>{title}</h3>

            <div className='flex flex-wrap gap-3'>
                {skills.map(skill => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
}
