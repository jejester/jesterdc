type Props = {
    tech: string;
};

export default function TechBadge({ tech }: Props) {
    return (
        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm'>
            {tech}
        </span>
    );
}
