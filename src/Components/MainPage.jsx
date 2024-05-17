import React, { useState } from 'react';


// import style Navsearch
import './style/Navsearch.css'

// import Icons 
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Avataruser from './Avatar';
import Mainbox from './Mainbox';
import Groupbox from './Groupbox';

const MainPage = () => {
    const [MAinPage, setMainPage] = useState('ml-64')




    return (
        <>
            <div className={`MainPageGroup ${MAinPage}  relative`}>
                <div className="Navsearch flex px-7 justify-between h-16 bg-white items-center">
                    <div className="group flex gap-16">
                        <div className="lest ">
                            <div id="iconLest" onClick={() => {
                                document.getElementById('cal-1').classList.toggle('bsNo1');
                                document.getElementById('cal-2').classList.toggle('bsNo2');
                                document.getElementById('cal-3').classList.toggle('bsNo3');
                                let header = document.getElementById('header');
                                if (MAinPage === 'ml-64') {
                                    setMainPage('ml-0')
                                    console.log('test');
                                    header.style.marginLeft = '-16rem'
                                } else {
                                    setMainPage('ml-64')
                                    header.style.marginLeft = '0px'
                                }
                            }} className="iconLest">
                                <span id="cal-1" className="cal-1"></span>
                                <span id="cal-2" className="cal-2"></span>
                                <span id="cal-3" className="cal-3"></span>
                            </div>
                        </div>
                        <div className="input-Search">
                            <input className=' border p-1 px-3 text-indigo-800 font-medium rounded w-72 outline-0 ' type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="group-Account flex items-center  gap-5 ">
                        <div className="iconNtofoceshans rounded-full bg-slate-200 cursor-pointer">
                            <CircleNotificationsIcon sx={{ fontSize: '30px', color: '#637381' }} />
                        </div>
                        <div className="iconAccount">
                            <Avataruser />
                        </div>
                    </div>
                </div>
                <Mainbox/>
                <Groupbox />
            </div>
        </>
    );
}

export default MainPage;
