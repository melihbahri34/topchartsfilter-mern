import React, { Component, useEffect, useState, useMemo } from 'react';

// component
import TopChartsCard from '../Components/Dashboard/TopChartsCard';

import axios from 'axios';

import WelcomeBanner from '../Components/Dashboard/WelcomeBanner';

const TopCharts = () => {

    const [charts, setCharts] = useState([]);
    const [apps, setApps] = useState([]);
    const [whichCharts, setWhichCharts] = useState('All');
    const [releaseTime, setReleaseTime] = useState('1000000000000');

    const [render, setRender] = useState(false);

    const [currentMilliseconds, setCurrentMilliseconds] = useState('');
    const [publisher, setPublisher] = useState('');

    const getCharts = () => {
        var date = new Date();
        var milliseconds = date.getTime();
        setCurrentMilliseconds(milliseconds);

        axios.get('http://localhost:3000/top-charts/')
			.then((res) => {
                setCharts(res.data[0].data);

                setApps(charts);

                setRender(true);
			})
			.catch((err) => {
				console.log(err);
			});
    }

    const handleChange = (e) => {
		setWhichCharts(e.target.value);
	};

    const handleChangeTime = (e) => {
		setReleaseTime(e.target.value);

        var date = new Date();
        var milliseconds = date.getTime();
        setCurrentMilliseconds(milliseconds);
	};

    const handleChangePublisher = (e) => {
		setPublisher(e.target.value);
	};

    useEffect(() => {
		getCharts();
	}, [render]);

    const NormalChartsList = ({charts}) => ( // chart["im:artist"].label === publisher
        <>
           {charts.filter(chart => new Date(chart["im:releaseDate"].label).getTime() > (currentMilliseconds - releaseTime))
            .map((chart,index) => (
                <TopChartsCard 
                    rank={"#" + (index + 1)}
                    name={chart["im:name"].label}
                    publisher={chart["im:artist"].label} 
                    releaseDate={chart["im:releaseDate"].attributes.label}
                    image={chart["im:image"][2].label} 
                    url={chart.id.label} 
                    score={"7/10"}
                    videoUrl={chart["appVideo"]}
                    isHyperCasual={chart["isHyperCasual"]}>

                </TopChartsCard>
          ))}
        </>
    );

    const NormalChartsListWithPublisher = ({charts}) => ( // chart["im:artist"].label === publisher
        <>
           {charts.filter(chart => new Date(chart["im:releaseDate"].label).getTime() > (currentMilliseconds - releaseTime))
            .filter(chart => chart["im:artist"].label === publisher)
            .map((chart,index) => (
                <TopChartsCard 
                    rank={"#" + (index + 1)}
                    name={chart["im:name"].label}
                    publisher={chart["im:artist"].label} 
                    releaseDate={chart["im:releaseDate"].attributes.label}
                    image={chart["im:image"][2].label} 
                    url={chart.id.label} 
                    score={"7/10"}
                    videoUrl={chart["appVideo"]}
                    isHyperCasual={chart["isHyperCasual"]}>

                </TopChartsCard>
          ))}
        </>
    );

    const HyperCasualChartsList = ({charts}) => (
        <>
           {charts.filter(chart => chart.isHyperCasual === true).map((chart,index) => (
                <TopChartsCard
                    rank={"#" + (index + 1)}
                    name={chart["im:name"].label}
                    publisher={chart["im:artist"].label} 
                    releaseDate={chart["im:releaseDate"].attributes.label}
                    image={chart["im:image"][2].label} 
                    url={chart.id.label} 
                    score={"7/10"}
                    videoUrl={chart["appVideo"]}
                    isHyperCasual={chart["isHyperCasual"]}>

                </TopChartsCard>
          ))}
        </>
    );

    function Charts() {
        if (publisher.length > 1) {
          return <NormalChartsListWithPublisher charts={charts} />;
        }
        return <NormalChartsList charts={charts} />;
    }      

    const Publishers = ({charts}) => (
        <>
          {charts.map((chart, index) => (
                <option>
                    { chart["im:artist"].label }
                </option>
          ))}
        </>
    );

    return (
        <div class="container mx-auto px-4 sm:px-8 w-full">
            <div class="py-8">
                <WelcomeBanner/>

                <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 class="text-2xl leading-tight">
                        Top Charts
                    </h2>
                </div>
                
                <div class="my-2 flex sm:flex-row flex-col pt-6">
                    <div class="flex flex-row mb-1 sm:mb-0">

                        <div class="relative">
                            <select
                                class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        <div class="relative">
                            <select
                                id="whichCharts" 
                                name="whichCharts"
                                value={whichCharts}
                                onChange={handleChange} 
                                class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>{"All"}</option>
                                <option>{"Hyper-Casual"}</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        <div class="relative">
                            <select
                                id="releaseTime" 
                                name="releaseTime"
                                value={releaseTime}
                                onChange={handleChangeTime} 
                                class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option value="1000000000000">none</option>
                                <option value="604800000">last week</option>
                                <option value="1296000000">last 15 days</option>
                                <option value="2629800000">last month</option>
                                <option value="5259600000">last 2 months</option>
                                <option value="7889400000">last 3 months</option>
                                <option value="15778800000">last 6 months</option>
                                <option value="31557600000">last year</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        <div class="relative">
                            <select
                                id="publisher" 
                                name='publisher'
                                type="text"
                                value={publisher}
                                onChange={handleChangePublisher}
                                class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="">none</option>
                                <Publishers charts={charts}/>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>

                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden border border-blue-500">

                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Rank
                                    </th>
                                    <th scope="col" class="px-5 py-3 pl-20 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Publisher
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Release Date
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Score
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                </tr>
                            </thead>
        
                            <tbody>
                                {whichCharts === "Hyper-Casual" ? (
                                    <HyperCasualChartsList charts={charts} />
                                ) : (
                                    <Charts />
                                )}

                            </tbody>
                            
                        </table>
        
                        <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div class="flex items-center">
                                <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                    1
                                </button>
                                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    2
                                </button>
                                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                    3
                                </button>
                                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    4
                                </button>
                                <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCharts;