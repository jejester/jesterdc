import ContactLinks from "./ContactLinks";

export default function ContactInfo() {
    return (
        <div>
            <h3 className='text-3xl font-bold'>Let's Connect</h3>

            <p className='mt-6 leading-8 text-gray-600'>
                I'm always interested in discussing new ideas, exciting
                projects, and opportunities to build impactful software.
            </p>

            <ul className='mt-8 space-y-3'>
                <li>✔ Full-time Opportunities</li>
                <li>✔ Freelance Projects</li>
                <li>✔ Open Source Collaboration</li>
                <li>✔ Technical Discussions</li>
            </ul>

            <ContactLinks />
        </div>
    );
}
