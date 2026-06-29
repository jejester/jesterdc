type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className='font-stack text-center text-gray-800  dark:text-gray-300 
            hover:bg-blue-500/30 dark:hover:bg-blue-500/20 w-full lg:w-auto px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out'
        >
            {children}
        </a>
    );
}
