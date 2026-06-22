import SectionHeader from "../ui/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id='contact' className='mx-auto max-w-7xl px-6 py-28'>
            <SectionHeader
                eyebrow='Contact'
                title="Let's Build Something Together."
                description="Whether you have a project in mind, an opportunity to discuss, or simply want to connect, I'd love to hear from you."
            />

            <div className='mt-16 grid gap-12 lg:grid-cols-2'>
                <ContactInfo />

                <ContactForm />
            </div>
        </section>
    );
}
