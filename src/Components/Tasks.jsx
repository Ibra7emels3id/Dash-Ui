import React from 'react';


// import Icons 
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';


const Tasks = () => {
    return (
        <>
            <div className="Tasks col-span-2 bg-white  p-5 rounded-xl flex flex-col ">
                <div className="tit flex items-center justify-between">
                    <h2 className=' font-medium text-lg'>Tasks Performance</h2>
                    <svg className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div
                    id="apexchartsq59yf63j"
                    className="apexcharts-canvas apexchartsq59yf63j apexcharts-theme-light"
                    style={{ width: 346, height: "250.074px", margin:'30px auto' }}
                >
                    <svg
                        id="SvgjsSvg1363"
                        width={346}
                        height="300"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                    >
                        <g
                            id="SvgjsG1365"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(26, 0)"
                        >
                            <defs id="SvgjsDefs1364">
                                <clipPath id="gridRectMaskq59yf63j">
                                    <rect
                                        id="SvgjsRect1367"
                                        width={302}
                                        height={320}
                                        x={-3}
                                        y={-1}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                    />
                                </clipPath>
                                <clipPath id="forecastMaskq59yf63j" />
                                <clipPath id="nonForecastMaskq59yf63j" />
                                <clipPath id="gridRectMarkerMaskq59yf63j">
                                    <rect
                                        id="SvgjsRect1368"
                                        width={300}
                                        height={322}
                                        x={-2}
                                        y={-2}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                    />
                                </clipPath>
                                <filter
                                    id="SvgjsFilter1437"
                                    filterUnits="userSpaceOnUse"
                                    width="200%"
                                    height="200%"
                                    x="-50%"
                                    y="-50%"
                                >
                                    <feComponentTransfer
                                        id="SvgjsFeComponentTransfer1438"
                                        result="SvgjsFeComponentTransfer1438Out"
                                        in="SourceGraphic"
                                    >
                                        <feFuncR id="SvgjsFeFuncR1439" type="linear" slope="0.5" />
                                        <feFuncG id="SvgjsFeFuncG1440" type="linear" slope="0.5" />
                                        <feFuncB id="SvgjsFeFuncB1441" type="linear" slope="0.5" />
                                        <feFuncA id="SvgjsFeFuncA1442" type="identity" />
                                    </feComponentTransfer>
                                </filter>
                            </defs>
                            <g id="SvgjsG1369" className="apexcharts-radialbar">
                                <g id="SvgjsG1370">
                                    <g id="SvgjsG1371" className="apexcharts-tracks">
                                        <g
                                            id="SvgjsG1372"
                                            className="apexcharts-radialbar-track apexcharts-track"
                                            rel={1}
                                        >
                                            <path
                                                id="apexcharts-radialbarTrack-0"
                                                d="M 123.56270641592879 262.9684271897858 A 117.53689024390246 117.53689024390246 0 1 1 123.76340129320306 263.0109031845801"
                                                fill="none"
                                                fillOpacity={1}
                                                stroke="transaprent"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.25183536585366"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area"
                                                data:pathorig="M 123.56270641592879 262.9684271897858 A 117.53689024390246 117.53689024390246 0 1 1 123.76340129320306 263.0109031845801"
                                            />
                                        </g>
                                        <g
                                            id="SvgjsG1374"
                                            className="apexcharts-radialbar-track apexcharts-track"
                                            rel={2}
                                        >
                                            <path
                                                id="apexcharts-radialbarTrack-1"
                                                d="M 126.7996632462031 247.73974262299544 A 101.96798780487808 101.96798780487808 0 1 1 126.97377413816169 247.77659225982177"
                                                fill="none"
                                                fillOpacity={1}
                                                stroke="transaprent"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.25183536585366"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area"
                                                data:pathorig="M 126.7996632462031 247.73974262299544 A 101.96798780487808 101.96798780487808 0 1 1 126.97377413816169 247.77659225982177"
                                            />
                                        </g>
                                        <g
                                            id="SvgjsG1376"
                                            className="apexcharts-radialbar-track apexcharts-track"
                                            rel={3}
                                        >
                                            <path
                                                id="apexcharts-radialbarTrack-2"
                                                d="M 130.0366200764774 232.51105805620506 A 86.3990853658537 86.3990853658537 0 1 1 130.18414698312029 232.54228133506342"
                                                fill="none"
                                                fillOpacity={1}
                                                stroke="transaprent"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.25183536585366"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area"
                                                data:pathorig="M 130.0366200764774 232.51105805620506 A 86.3990853658537 86.3990853658537 0 1 1 130.18414698312029 232.54228133506342"
                                            />
                                        </g>
                                    </g>
                                    <g id="SvgjsG1378">
                                        <g
                                            id="SvgjsG1380"
                                            className="apexcharts-series apexcharts-radial-series"
                                            seriesname="Direct"
                                            rel={1}
                                            data:realindex={0}
                                        >
                                            <path
                                                id="SvgjsPath1381"
                                                d="M 123.56270641592879 262.9684271897858 A 117.53689024390246 117.53689024390246 0 1 1 255.37529218775404 195.80656017537365"
                                                fill="none"
                                                fillOpacity="0.85"
                                                stroke="rgba(40,167,69,0.85)"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.568902439024392"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                data:angle={282}
                                                data:value={100}
                                                index={0}
                                                j={0}
                                                data:pathorig="M 123.56270641592879 262.9684271897858 A 117.53689024390246 117.53689024390246 0 1 1 255.37529218775404 195.80656017537365"
                                                selected="false"
                                            />
                                        </g>
                                        <g
                                            id="SvgjsG1382"
                                            className="apexcharts-series apexcharts-radial-series"
                                            seriesname="Referral"
                                            rel={2}
                                            data:realindex={1}
                                        >
                                            <path
                                                id="SvgjsPath1383"
                                                d="M 126.7996632462031 247.73974262299544 A 101.96798780487808 101.96798780487808 0 1 1 228.35187091388303 85.22223819206005"
                                                fill="none"
                                                fillOpacity="0.85"
                                                stroke="rgba(255,193,7,0.85)"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.568902439024392"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-1"
                                                data:angle={220}
                                                data:value={78}
                                                index={0}
                                                j={1}
                                                data:pathorig="M 126.7996632462031 247.73974262299544 A 101.96798780487808 101.96798780487808 0 1 1 228.35187091388303 85.22223819206005"
                                                selected="true"
                                                filter="url(#SvgjsFilter1437)"
                                            />
                                        </g>
                                        <g
                                            id="SvgjsG1384"
                                            className="apexcharts-series apexcharts-radial-series"
                                            seriesname="Organic"
                                            rel={3}
                                            data:realindex={2}
                                        >
                                            <path
                                                id="SvgjsPath1385"
                                                d="M 130.0366200764774 232.51105805620506 A 86.3990853658537 86.3990853658537 0 1 1 233.75507968520816 137.47060019565814"
                                                fill="none"
                                                fillOpacity="0.85"
                                                stroke="rgba(220,53,69,0.85)"
                                                strokeOpacity={1}
                                                strokeLinecap="round"
                                                strokeWidth="10.568902439024392"
                                                strokeDasharray={0}
                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-2"
                                                data:angle={251}
                                                data:value={89}
                                                index={0}
                                                j={2}
                                                data:pathorig="M 130.0366200764774 232.51105805620506 A 86.3990853658537 86.3990853658537 0 1 1 233.75507968520816 137.47060019565814"
                                                selected="false"
                                            />
                                        </g>
                                        <circle
                                            id="SvgjsCircle1379"
                                            r="76.27316768292684"
                                            cx={148}
                                            cy={148}
                                            className="apexcharts-radialbar-hollow"
                                            fill="transparent"
                                        />
                                    </g>
                                </g>
                            </g>
                            <line
                                id="SvgjsLine1386"
                                x1={0}
                                y1={0}
                                x2={296}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                            />
                        </g>
                        <g id="SvgjsG1366" className="apexcharts-annotations" />
                    </svg>
                    <div className="apexcharts-legend" />
                </div>
                <div className="flex items-center justify-between mt-6 p-6">
                    <div className="text-center">
                        <TaskAltIcon />
                        <h1 className="mt-3  mb-1 fw-bold">76%</h1>
                        <p>Completed</p>
                    </div>
                    <div className="text-center">
                        <TrendingUpIcon />
                        <h1 className="mt-3  mb-1 fw-bold">32%</h1>
                        <p>In-Progress</p>
                    </div>
                    <div className="text-center">
                        <TrendingDownIcon />
                        <h1 className="mt-3  mb-1 fw-bold">13%</h1>
                        <p>Behind</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Tasks;
