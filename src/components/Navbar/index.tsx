import { navigation } from "./data";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <header className='sticky top-0 z-50'>
            <nav className='mx-auto flex h-18 max-w-7xl items-center justify-between px-6'>
                <a href='#hero' className='text-xl font-bold tracking-tight'>
                    {"<Jester />"}
                </a>
                <div className='flex items-center gap-8'>
                    {navigation.map(item => (
                        <NavLink key={item.href} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}
