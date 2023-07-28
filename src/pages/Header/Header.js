import React from 'react'

const Header = () => {
    return (
<<<<<<< HEAD
        <header className='bg-[#ff5e14] py-8 overflow-hidden'>
            <nav className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col  justify-between items-left w-[100%] ps-10  mx-auto">
=======
        <header className='bg-[#ff5e14] py-8 sticky top-0 z-50'>
            <nav className="flex justify-between items-center w-[90%]  mx-auto">
>>>>>>> e2e3b9fb60f7e5c7ddc6c90976d30157bdbab061
                <div>
                    <h1>
                    <a className='text-5xl font-semibold' href="/home">ITE<span className='text-white'>CH</span></a>
                    </h1>
                    
                </div>
                <div className=''>
                    <ul className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col   gap-6 item-center">
                        <li><a className="text-white text-xl " href="/home">HOME</a></li>
                        <li><a className="text-white text-xl " href="/about">ABOUT</a></li>
                        <li><a className="text-white text-xl " href="/contact">CONTACT</a></li>
                        <li><a className="text-white text-xl " href="/products">PRODUCTS</a></li>
                        <li><a className="text-white text-xl " href="/booking">BOOKING</a></li>
                        
                    </ul>
                </div>
                <div>
                    <button className='bg-white text-[#ff5e14]  text-xl px-5 lg:me-2 py-3 rounded-full '>Get a Quote</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;