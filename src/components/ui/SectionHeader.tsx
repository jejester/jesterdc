import clsx from "clsx";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description: string;
    centered?: boolean;
    className?: string;
};

export default function SectionHeader({
    eyebrow,
    title,
    description,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={clsx(
                "max-w-3xl",
                centered && "mx-auto text-center",
                className,
            )}
        >
            <p className='text-sm font-semibold uppercase tracking-widest text-blue-600'>
                {eyebrow}
            </p>

            <h2 className='mt-3 text-4xl font-bold tracking-tight'>{title}</h2>

            <p className='mt-6 text-lg leading-8 text-gray-600'>
                {description}
            </p>
        </div>
    );
}
