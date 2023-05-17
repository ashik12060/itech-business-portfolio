import React from 'react'

const Contact = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                    <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-[#1e1b4b] dark:text-white">Contact Us</h2>
                    <hr className='mt-4 border-2 border-[#ff5e14]' />
                    <p class="mt-10 mb-8 lg:mb-16 text-center text-black-500 font-semibold dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" class="space-y-8 m-24 ">
                        <div>
                            <div className="">
                                <label for="email" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border-2 border-[#ff5e14] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@itech.com" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-xl font-semibold  text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#ff5e14] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know your query" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-xl font-semibold  text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-[#ff5e14] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>


                            <div className='text-left mt-6 '>
                                <button className='bg-[#ff5e14] hover:bg-[white] hover:text-[black] border-2 border-[#ff5e14] rounded-lg text-white text-xl px-5 py-3 '><a href="#home">Send Message</a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;