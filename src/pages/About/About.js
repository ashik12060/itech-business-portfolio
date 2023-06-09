import React from 'react'
import image from '../../images/business-professionals-talking-during-coffee-break-office-desk.jpg';

import img1 from '../../images/ceo.jpg';
import img2 from '../../images/hr.jpg';
import img3 from '../../images/freelancer.jpg';
import img4 from '../../images/manager.jpg';
import img5 from '../../images/md.jpg';
import img6 from '../../images/p_manager.jpg';
import img7 from '../../images/pd.jpg';
import img8 from '../../images/saled exu.jpg';

const About = () => {
    return (
        <div>
            <section>
                <div className=" h-96 w-full relative banner-container">

                    <img src={image} alt="office-environment" className='w-full absolute mix-blend-overlay brightness-50' />

                    <div class="p-24" >
                        <h2 className="text-center text-[white] text-5xl font-bold ">Our Company</h2>
                    </div>

                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <section>
                <div className="text-center">
                    <h1 className="text-5xl font-semibold my-10 text-[#1e1b4b]">Our Story</h1>
                    <hr className='mx-96 mt-4 border-2 border-[#ff5e14]' />
                    <p className="mx-52 text-xl leading-10	mt-6">It was in 2015, with little capital but a pocketful of belief our CEO, started ITECH, a software company, right after graduating from DIU. The new company initially focused on the international market with the local market added in 2015. Since then the company has shown a continuous growth and currently employs over 700+ software engineers. ITECH is now not only an established name in Bangladesh but also in countries like the USA, UK, Netherlands, Denmark, Japan, Norway, Sweden, Germany, Canada, Switzerland, Turkey and the Middle East etc.</p>
                </div>
            </section>

            <section>
                <div className=" bg-[#1e1b4b] my-24 p-40">
                    <div className="flex flex-row w-10/11 mx-50 text-center text-[white] border-2 border-[gray] rounded-md">
                        <div className="mx-18  gap-2 p-10">
                            <h2 className="text-4xl font-semibold mb-4">
                                Our Mission
                            </h2>

                            <p classname="text-xl">Your trusted companion for digital leadership by empowering people to achieve more with less</p>
                        </div>
                        <div className="mx-18  gap-2 p-10">
                            <h2 className="text-4xl font-semibold mb-4">
                                Our Vision
                            </h2>
                            <p classname="text-xl">To be the fastest digital transformation and innovation partner by engaging global talents thus creating positive impact.</p>
                        </div>
                    </div>
                </div>
            </section>

{/* .........................................card.................................................... */}
            <section>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img1} alt="" className='h-48  w-full'/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img2} alt="" className='h-48  w-full'/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img3} alt="" className='h-48  object-center w-full'/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img4} alt="" className='h-48  w-full'/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img5} alt="" className='h-48  w-full'/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className='rounded-2 overflow-hidden shadow-lg max-w-sm'>
                            <img src={img6} alt="" className='h-48  w-full'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;