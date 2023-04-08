import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb, faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner';
import image from '../../images/business-meeting.jpg'
import Contact from '../Contact/Contact';
import About from '../About/About';


const Home = () => {
    return (
        <>
            <Banner></Banner>

            <section>
                <div>
                    <div className='mt-36'>

                        <h1 className="text-center text-5xl font-semibold text-[#041436]">Welcome to ITECH Ltd.</h1>
                        <hr className='mx-72 mt-4 border-2 border-[#ff5e14]'/>

                    </div>

                    <div className="grid grid-cols-3 w-full mx-auto text-center mt-24">
                        <div className="bg-[#041436] mt-10 mb-10 ml-20 p-20">

                            <FontAwesomeIcon className="text-6xl pb-4 text-[#ff5e14] " icon={faHandshake} />

                            <h1 className="text-2xl text-[white] text-bold">
                                Reliable Solutions
                            </h1>
                            <br />
                            <p className='text-[white]'>
                                Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.</p>
                        </div>

                        <div className="bg-[#ff5e14]  p-24">
                            <FontAwesomeIcon className="text-6xl pb-4 text-[#041436] " icon={faLightbulb} />
                            <h1 className="text-2xl text-[white] text-bold">
                                Reliable Solutions
                            </h1>
                            <br />
                            <p className='text-[white]'>
                                Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.</p>
                        </div>

                        <div className="bg-[#041436] mt-10 mb-10 me-20 p-20">
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
                <div className="flex flex-row">
                    <div className='w-2/4'>
                 
                        <img className=" h-4/5 m-24 rounded" src={image} alt="" />
                    </div>

                    <div className=''>
                        <h1 className="pl-20  mx-24 mt-24 text-6xl font-bold"><span className="text-[#041436]">We make things easy</span> <span className="text-[#ff5e14]">for everyone</span></h1>
                        <p className="pl-20 pt-5  mx-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in doloremque incidunt praesentium, soluta ab sunt rerum quasi facere, esse at dicta corrupti.</p>
                        <div>
                            <ul className='pl-20 pt-5  mx-24'>
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
                <div className="flex flex-row w-11/12 m-20 p-10 bg-[#ff5e14] text-center rounded">
                    <div className="w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">9 Years of Experience</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>

                    </div>
                    <div className="w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">Experienced Workers</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>
                    </div>
                    <div className="w-1/3 text-left bg-[white] p-6 m-2 rounded">
                        <h2 className="text-2xl font-bold">100+ Awards
                        </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, est.</p>
                    </div>
                </div>

            </section>

            <section className="bg-[#1e1b4b]">
                <div>
                    <div className='text-center text-5xl font-bold text-[white]' >
                        <h1 className='pt-24'>Why we are the best</h1>
                        <hr className='mx-72 mt-4 border-2 border-[#ff5e14]'/>
                    </div>

                    <div className='grid grid-cols-2 text-center mt-20'>
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

        
        </>

    )
}

export default Home;