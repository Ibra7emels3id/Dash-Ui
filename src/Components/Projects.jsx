import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <div className="Projects mb-10 px-5 flex items-center justify-between">
                <h3 className=' text-white text-3xl font-bold '>Product</h3>
                <Link className=' bg-white text-indigo-900 py-2 px-4 rounded-xl font-medium' to=''>Add To Product</Link>
            </div>
        </>
    );
}

export default Projects;
