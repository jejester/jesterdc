type Props = {
    skill: string;
};

export default function SkillBadge({ skill }: Props) {
    return (
        <span className='rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white'>
            {skill}
        </span>
    );
}
