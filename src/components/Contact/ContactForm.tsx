export default function ContactForm() {
    return (
        <form className='rounded-3xl border border-gray-200 bg-white p-8 shadow-sm'>
            <div className='space-y-6'>
                <div>
                    <label
                        htmlFor='name'
                        className='mb-2 block text-sm font-medium text-gray-700'
                    >
                        Name
                    </label>

                    <input
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                    />
                </div>

                <div>
                    <label
                        htmlFor='email'
                        className='mb-2 block text-sm font-medium text-gray-700'
                    >
                        Email
                    </label>

                    <input
                        id='email'
                        type='email'
                        placeholder='john@email.com'
                        className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                    />
                </div>

                <div>
                    <label
                        htmlFor='subject'
                        className='mb-2 block text-sm font-medium text-gray-700'
                    >
                        Subject
                    </label>

                    <input
                        id='subject'
                        type='text'
                        placeholder='Project Inquiry'
                        className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                    />
                </div>

                <div>
                    <label
                        htmlFor='message'
                        className='mb-2 block text-sm font-medium text-gray-700'
                    >
                        Message
                    </label>

                    <textarea
                        id='message'
                        rows={6}
                        placeholder='Tell me about your project...'
                        className='w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-900'
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}
