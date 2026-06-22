type Props = {
    label: string;
    error?: string;
    children: React.ReactNode;
};

export default function ContactField({ label, error, children }: Props) {
    return (
        <div>
            <label className='mb-2 block font-medium'>{label}</label>

            {children}

            {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
        </div>
    );
}
