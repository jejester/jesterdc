type Props = {
    title: string;
    description: string;
};

export default function AboutCard({ title, description }: Props) {
    return (
        <div className='rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lg bg-white border-gray-200 dark:border-gray-800'>
            <h3 className='text-xl font-semibold'>{title}</h3>

            <p className='mt-4 text-gray-600 leading-7'>{description}</p>
        </div>
    );
}
