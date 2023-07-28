import React from 'react'
import '../../App.css';
import image from '../../images/business-meeting.jpg';
const Banner = () => {
  return (
    <div>
      <section className='lg:overflow-hidden md:overflow-hidden sm:overflow-hidden'>
        <div className=" h-96 lg:w-full md:w-full sm:w-full relative banner-container ">

          <img src={image} alt="office-environment" className='w-full absolute mix-blend-overlay brightness-50' />

          <div class="p-24" >
            <h2 className="text-center text-[white] text-5xl font-bold ">Trusted Software company, <span className="text-[orange]">Since 2015</span></h2>
          </div>
          <div className='text-center align-center '>
            <button className='bg-[orange] text-white text-xl px-5 py-3 rounded-full'><a href="#home">Learn More</a></button>
          </div>
        </div>
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
        <br />
      </section>

    </div>
  )
}

export default Banner;