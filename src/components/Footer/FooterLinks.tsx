import { footerNavigation } from "./data";

export default function FooterLinks() {
    return (
        <nav className='flex flex-wrap justify-center gap-6'>
            {footerNavigation.map(item => (
                <a
                    key={item.href}
                    href={item.href}
                    className='text-sm text-gray-600 transition hover:text-black'
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
