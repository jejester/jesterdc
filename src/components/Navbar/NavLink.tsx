type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className='text-sm font-medium text-gray-600 transition-colors hover:text-black'
        >
            {children}
        </a>
    );
}
