import React from 'react';
import Projects from './Projects';
import AllBox from './AllBox';
import TablesProduct from './TablesProduct';
import Tasks from './Tasks';
import Teams from './Teams';
import Footer from './Footer';

const Groupbox = () => {
    return (
        <>
            <div className="Groupbox   px-5  -mt-40">
                <Projects />
                <AllBox />
                <TablesProduct />
                <div className="Component grid grid-cols-5 gap-5 py-10">
                    <Tasks />
                    <Teams />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Groupbox;
