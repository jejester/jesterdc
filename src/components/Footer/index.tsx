import FooterLinks from "./FooterLinks";

export default function Footer() {
    return (
        <footer className='border-t border-gray-200'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-8'>
                <a href='#hero' className='text-xl font-bartle tracking-tight'>
                    Jester
                </a>

                <FooterLinks />

                <p className='text-sm text-gray-500'>
                    © {new Date().getFullYear()} Jester De La Cruz
                </p>
            </div>
        </footer>
    );
}
