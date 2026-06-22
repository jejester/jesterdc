import { contacts } from "./data";

export default function ContactLinks() {
    return (
        <div className='mt-10 space-y-4'>
            {contacts.map(contact => (
                <a
                    key={contact.title}
                    href={contact.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                >
                    <h4 className='font-semibold'>{contact.title}</h4>

                    <p className='text-gray-600'>{contact.value}</p>
                </a>
            ))}
        </div>
    );
}
