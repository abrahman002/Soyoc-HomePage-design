import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menubar = <>
        <li><Link>Find talent</Link></li>
        <li><Link>For designers</Link></li>
        <li><Link>Inspiration</Link></li>
        <li><Link>Leanr design</Link></li>
        <li><Link><span className='text-pink-500'>Go pro</span></Link></li>

    </>
    return (
        <div className='md:w-[1349px] md:h-[100px] pl-5 pr-5'>
            <div className="navbar bg-base-100 font-serif">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menubar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-thin">dribbble</a>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {menubar}
                    </ul>
                </div>
                <div className="navbar-end font-semibold">
                    <button className=' mr-3  bg-white outline-none'>Log in</button>
                    <button className='p-3 rounded-md bg-black text-white'>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;