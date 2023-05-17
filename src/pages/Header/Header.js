import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#ff5e14] py-8 sticky top-0 z-50'>
            <nav className="flex justify-between items-center w-[90%]  mx-auto">
                <div>
                    <h1>
                    <a className='text-5xl font-semibold' href="/home">ITE<span className='text-white'>CH</span></a>
                    </h1>
                    
                </div>
                <div className=''>
                    <ul className="flex  gap-6 item-center">
                        <li><a className="text-white text-xl " href="/home">HOME</a></li>
                        <li><a className="text-white text-xl " href="/products">PRODUCTS</a></li>
                        <li><a className="text-white text-xl " href="/booking">BOOKING</a></li>
                        <li><a className="text-white text-xl " href="/about">ABOUT</a></li>
                        <li><a className="text-white text-xl " href="/contact">CONTACT</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-white text-[#ff5e14]  text-xl px-5 py-3 rounded-full '>Get a Quote</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;