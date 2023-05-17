import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className=" bg-[#1e1b4b]">

            <div className="flex flex-row w-full p-24 justify-between  text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Company</h1>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Executive Leadership</a></li>
                    <li><a href="#">News & stories</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Customer Stories</a></li>
                    <li><a href="#">Diversity, Equity & Inclusion</a></li>
                    <li><a href="#">Environment, Social & Governance</a></li>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold">Resources For</h1>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Researchers</a></li>
                    <li><a href="#">Student and Educators</a></li>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Why ITECH</h1>
                    <li><a href="#">Analyst Reports</a></li>
                    <li><a href="#">Best Cloud-based ERP</a></li>
                    <li><a href="#">Cloud Economics</a></li>
                    <li><a href="#">Corporate Responsibilites</a></li>
                    <li><a href="#">Diversity and Inclusion</a></li>
                    <li><a href="#">Security Practice</a></li>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <p>BD Sales: +880 1317424004</p>
                    <li><a href="#">How can we help?</a></li>
                    <li><a href="#">Subscribe to emails</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blogs</a></li>
                </div>
            </div>
            <hr className='text-red' />
            <br /><br />
            <p className='text-[white] text-center  pb-4'>&#169;ITECH Software Ltd. 2023</p>
        </div>
    )
}

export default Footer;