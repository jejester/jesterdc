import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section
            id='hero'
            className='mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 lg:flex-row'
        >
            <HeroContent />

            <HeroImage />
        </section>
    );
}
