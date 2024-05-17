import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id='header' className=' w-64 fixed' style={{ height: '100vh' , backgroundColor:'#212b36', transition:' 0.5s ease' }}>
                <div className="navbar">
                    <div className="logo">
                        <h1 className=' m-9 text-4xl font-bold text-white'>Dash Ui</h1>
                    </div>
                    <div className="links m-9">
                        <ul className='flex flex-col gap-10'>
                            <li><Link className='text-white'>DashBoard</Link></li>
                            <li className=' text-zinc-600 mt-2 mb-2'>LAYOUTS & PAGES</li>
                            <li><Link className='text-white'>Add Product</Link></li>
                            <li ><Link className='text-white'>User Profile</Link></li>
                            <li><Link className='text-white'>Tables</Link></li>
                            <li><Link className='text-white'>Teams</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
