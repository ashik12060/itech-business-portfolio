import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb, faCircleCheck, faCheck, faCalendarDays, faFolderOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner';
import image from '../../images/business-meeting.jpg'
import Contact from '../Contact/Contact';
import About from '../About/About';
import news1 from '../../images/news1.jpg'
import news2 from '../../images/news2.jpg'
import news3 from '../../images/news3.jpg'
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <>
            <Banner></Banner>

            <section className='overflow-hidden'>
                <div>
                    <div className='mt-36'>

                        <h1 className="text-center text-5xl font-semibold text-[#041436]">Welcome to ITECH Ltd.</h1>
                        <hr className='lg:mx-72 md:mx-60 sm:mx-40 mt-4 border-2 border-[#ff5e14]'/>

                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:w-full mx-auto lg:text-center md:text-left sm:text-left mt-24">
                        <div className="bg-[#041436] mt-10 mb-10 lg:ml-20 md:ml-16 sm:ml-10  lg:p-20 md:p-16 sm:p-16 p-16">

                            <FontAwesomeIcon className="text-6xl pb-4 text-[#ff5e14] " icon={faHandshake} />

                            <h1 className="text-2xl text-[white] text-bold">
                                Reliable Solutions
                            </h1>
                            <br />
                            <p className='text-[white]'>
                                Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.</p>
                        </div>

                        <div className="bg-[#ff5e14]  lg:p-24 md:p-20 sm:p-16 p-16">
                            <FontAwesomeIcon className="text-6xl pb-4 text-[#041436] " icon={faLightbulb} />
                            <h1 className="text-2xl text-[white] text-bold">
                                Reliable Solutions
                            </h1>
                            <br />
                            <p className='text-[white]'>
                                Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.</p>
                        </div>

                        <div className="bg-[#041436] mt-10 mb-10 lg:me-20 md:me-16 sm:me-10 lg:p-20 md:p-16 sm:p-16 p-16">
                            <FontAwesomeIcon className="text-6xl pb-4 text-[#ff5e14] " icon={faCircleCheck} />
                            <h1 className="text-2xl text-[white] text-bold">
                                Reliable Solutions
                            </h1>
                            <br />
                            <p className='text-[#d1d5db]'>
                                Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mt-24">
                <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col">
                    <div className='lg:w-2/4 md:w-full sm:w-full'>
                 
                        <img className=" h-4/5 lg:m-20  rounded" src={image} alt="meeting" />
                    </div>

                    <div className='pl-2'>
                        <h1 className="lg:pl-20  lg:mx-24  mt-24 text-6xl font-bold"><span className="text-[#041436]">We make things easy</span> <span className="text-[#ff5e14]">for everyone</span></h1>
                        <p className="lg:pl-20 pt-5  lg:mx-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in doloremque incidunt praesentium, soluta ab sunt rerum quasi facere, esse at dicta corrupti.</p>
                        <div>
                            <ul className='lg:pl-20 pt-5  lg:mx-24'>
                                <li><h1 className='text-3xl text-[#041436]'>This is a simple title for text one</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum incidunt ut quaerat eum nisi, similique corporis eveniet. Iste dolorem tempore nulla pariatur!</p> <br />
                                </li>
                                <li><h1 className='text-3xl text-[#041436]'>This is a simple title for text one</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum incidunt ut quaerat eum nisi, similique corporis eveniet. Iste dolorem tempore nulla pariatur!</p> <br />
                                </li>
                                <li><h1 className='text-3xl text-[#041436]'>This is a simple title for text one</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum incidunt ut quaerat eum nisi, similique corporis eveniet. Iste dolorem tempore nulla pariatur!</p>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
                
            </section>

            <section className='overflow-hidden'>
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col w-11/12 lg:m-20 md:m-16 sm:m-10 lg:p-10 md:p-10 sm:p-6 p-6 bg-[#ff5e14]  text-center rounded">
                    <div className="lg:w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">9 Years of Experience</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>

                    </div>
                    <div className="lg:w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">Experienced Workers</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>
                    </div>
                    <div className="lg:w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">100+ Awards
                        </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#1e1b4b]">
                <div className='pb-20'>
                    <div className='text-center text-5xl font-bold text-[white]' >
                        <h1 className='pt-24'>Why we are the best</h1>
                        <hr className='lg:mx-72 mt-4 border-2 border-[#ff5e14]'/>
                    </div>

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-center mt-20'>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">
                            <div className="flex flex-row">
                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>
                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'> Knowledge & Experience</h3>
                                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">

                            <div className="flex flex-row">
                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>
                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'>Best Service Provider</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">

                            <div className="flex flex-row">
                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>
                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'>Customer Focused
</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">

                            <div className="flex flex-row">
                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>
                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'>Quality sub-trades
</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">

                            <div className="flex flex-row">
                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>

                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'>Build Guarantee
</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-left mx-20 mt-20 text-[white] space-y-2">
                            <div className="flex flex-row">

                                <div><FontAwesomeIcon className=" text-[#ff5e14] text-2xl font-bold" icon={faCheck} /> </div>
                                <div className=" mx-3">
                                    <h3 className='text-3xl font-bold text-[white]'>Obligation Free
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at dolorum quidem illum soluta sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='bg-[#fffafa]'>
                    <div>
                    <h1 className='text-center mt-20 text-5xl text-[#1e1b4b]'>Latest NEWS Post</h1>
                    <hr className='lg:mx-72 md:mx-60 sm:mx-40 mt-4 border-2 border-[#ff5e14]'/>
                    </div>

                    <div className='grid grid-cols-3 gap-4  m-16 mb-20'>
                    
                        <div className='mt-20 rounded bg-[white] shadow-xl shadow-gray-300 pb-16'>
                            <img className='h-2/3 w-full rounded' src={news1} alt='news 1'/> 
                            <div className='flex flex-row ms-6'>
                                
                            <p className=' pt-4'> <FontAwesomeIcon className='text-[#1e1b4b]' icon={faCalendarDays} /> <span className='font-bold'>June 4, 2023</span> </p>
                            <p className='ms-16 pt-4'><FontAwesomeIcon className='text-[#1e1b4b]' icon={faFolderOpen} /> <span className='font-bold'>IT Service</span> </p>
                            </div>
                               <h2 className="ms-6 text-2xl my-6">Your Business Safe Ensure High Availability</h2>
                               <p className="ms-6">We've been a strategy thought leader for nearly five decades and we bring But we ipsum dolor sit amet...</p>
                               <p className="ms-6 text-[#1e1b4b] font-bold pt-4">Read Details  <FontAwesomeIcon icon={faArrowRight} /></p>
                        </div>   
                        

                        <div className=' mt-20 rounded bg-[white] shadow-xl shadow-gray-300 pb-16'>
                            <img className='h-2/3 w-full rounded' src={news2} alt='news 1'/> <div>
                            <div className='flex flex-row ms-6'>
                                
                            <p className=' pt-4'> <FontAwesomeIcon className='text-[#1e1b4b] ' icon={faCalendarDays} /> <span className='font-bold'>June 4, 2023</span> </p>
                            <p className='ms-16 pt-4'><FontAwesomeIcon className='text-[#1e1b4b]' icon={faFolderOpen} /> <span className='font-bold'>Circuitry</span> </p>
                            </div>
                            </div>
                            <h2 className="ms-6 text-2xl my-6">Data Backup and Recovery Best Practices Small</h2>
                            <p className="ms-6">We've been a strategy thought leader for nearly five decades and we bring But we ipsum dolor sit amet...</p>
                            <p className="ms-6 text-[#1e1b4b] font-bold pt-4">Read Details  <FontAwesomeIcon icon={faArrowRight} /></p>

                            <div>
    
                         </div>   
                        
                        </div>
                        <div className='mt-20 rounded  bg-[white] shadow-xl shadow-gray-300 pb-16'>
                            <img className='h-2/3 w-full rounded' src={news3} alt='news 1'/><div>
                            <div className='flex flex-row ms-6'>
                                
                                <p className=' pt-4'> <FontAwesomeIcon className='text-[#1e1b4b]' icon={faCalendarDays} /> <span className='font-bold'>June 4, 2023</span> </p>
                                <p className='ms-16 pt-4'><FontAwesomeIcon className='text-[#1e1b4b]' icon={faFolderOpen} /> <span className='font-bold'>Business</span> </p>
                                </div>
                            </div>
                            <h2 className="ms-6 text-2xl my-6">Small Business Disaster Recovery Planning</h2>
                            <p className="ms-6">We've been a strategy thought leader for nearly five decades and we bring But we ipsum dolor sit amet...</p>
                            <p className="ms-6 text-[#1e1b4b] font-bold pt-4">Read Details  <FontAwesomeIcon icon={faArrowRight} /></p>

                        </div>                
                    </div>
                </div>
            </section>

            <Footer/>

        
        </>

    )
}

export default Home;