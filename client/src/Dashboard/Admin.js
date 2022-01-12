import React, { useEffect, useState, useMemo } from 'react';

//
import axios from 'axios';

// components
import DashboardCard06 from '../Components/Dashboard/DashboardCard06';

const Admin = () => {

    const [charts, setCharts] = useState([]);
    const [apps, setApps] = useState([]);
    const [render, setRender] = useState(false);

    const [appID, setAppID] = useState('');

    const [isHyperCasual, setIsHyperCasual] = useState(false);
    const [isHyperCasualToAll, setIsHyperCasualToAll] = useState(false);

    const [newChart, setNewChart] = useState({
		appName: '',
        chartsDate: '',
        appVideo: '',
        appID: '',
        videoUrl: ''
	});

    const [whichCharts, setWhichCharts] = useState('');

    const getCharts = () => {
        if(whichCharts === "top-charts")
        {
            axios.get('http://18.220.41.49:3000/top-charts/') // http://localhost:3000/top-charts/
			.then((res) => { 
                setCharts(res.data[0].data)

                setApps(charts);

                setRender(true);
			})
			.catch((err) => {
				console.log(err);
			});
        }
        else if(whichCharts === "new-releases")
        {
            axios.get('http://18.220.41.49:3000/new-releases/') // http://localhost:3000/new-releases/
			.then((res) => { 
                setCharts(res.data[0].data)

                setApps(charts);

                setRender(true);
			})
			.catch((err) => {
				console.log(err);
			});
        }
    }
    
    const handleChange = (e) => {
		setNewChart({ ...newChart, [e.target.name]: e.target.value });
	};

	const handleVideo = (e) => {
		setNewChart({ ...newChart, appVideo: e.target.files[0] });
	};

    // setNewChart({ ...newChart, [e.target.name]: e.target.value.substring(e.target.value.indexOf(" ")) });
    // setNewChart({ ...newChart, "appID": e.target.value.charAt(0) });

    async function handleSubmit(e) {
        e.preventDefault();

        var appIndex = newChart.appName.substr(0, newChart.appName.indexOf(' ')); 

        var obj = apps[appIndex]; // newChart.appName.words[0]
        obj["appVideo"] = newChart.videoUrl;

        var obj = apps[appIndex]; // newChart.appName.charAt(0)
        obj["isHyperCasual"] = isHyperCasual;

        if(isHyperCasualToAll)
        {
            for (let i = 0; i < 100; i++) 
            {
                var obj = apps[i]; // newChart.appName.charAt(0)
                obj["isHyperCasual"] = "false";
            }
        }

        console.log(apps);

        if(whichCharts === "top-charts")
        {
            await fetch('http://18.220.41.49:3000/api/top-charts/update', { // http://localhost:3000/api/top-charts/update
    			method: 'POST',
    			headers: {
    				'Content-Type': 'application/json'
    			},
    			body: JSON.stringify({
                    date: newChart.chartsDate,
                    data: apps
    			}),
    		}).then(
                alert("okay")
            );
        }
        else if(whichCharts === "new-releases")
        {
            await fetch('http://18.220.41.49:3000/api/new-releases/update', {
    			method: 'POST',
    			headers: {
    				'Content-Type': 'application/json'
    			},
    			body: JSON.stringify({
                    date: newChart.chartsDate,
                    data: apps
    			}),
    		}).then(
                alert("okay")
            );
        }
	};

    async function handleNext(e) {
        e.preventDefault();

        getCharts();
	};

    useEffect(() => {
		getCharts();
	}, [render]);

    const Options = ({charts}) => (
        <>
          {charts.map((chart, index) => (
                <option>
                    { index + " " + chart["im:name"].label }
                </option>
          ))}
        </>
    );

    function toggleClass(e) {
        setIsHyperCasual(e.target.checked);
    };

    function toggleClass1(e) {
        setIsHyperCasualToAll(e.target.checked);
    };

    return (
        <>
			{render ? (
				<div class="pt-16 mx-auto w-4/6 h-4/6">
                  <div class="w-full p-6 m-auto bg-blue border border-green-600 rounded-md shadow-md dark:bg-gray-800">
                  
                    <section>
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Admin Panel</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Game Name</label>
                                    
                                    <select 
                                        id="appName" 
                                        name="appName"
                                        value={newChart.appName}
                                        onChange={handleChange} 
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    >    
                                        <option>
                                            { "none" }
                                        </option>
                                        <Options charts={apps} />
                                    </select>
    
                                </div>
                
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Top Charts Date</label>
                                    <input 
                                        id="chartsDate" 
                                        name='chartsDate'
                                        type="date"
                                        value={newChart.chartsDate}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
    
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Game Mechanic Media</label>
                                    <input
                                        type='file'
                                        accept='.png, .jpg, .jpeg'
                                        id="appVideo"
                                        name='appVideo'
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        onChange={handleVideo}
                                    />
    
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Game Mechanic Url</label>
                                    <input
                                        id="videoUrl"
                                        name='videoUrl'
                                        type='text'
                                        value={newChart.videoUrl}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
    
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">App Video Name</label>
                                    <label class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">{newChart.appVideo.name}</label>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Is Hyper-Casual</label>

                                    <div class="mb-3">
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                            <input value={isHyperCasual} onChange={toggleClass} type="checkbox" name="toggle" id="Blue" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                            <label for="Blue" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                            </label>
                                        </div>
                                        <span class="text-gray-400 font-medium">
                                            Yes
                                        </span>
                                    </div>

                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Write isHyperCasual to All</label>

                                    <div class="mb-3">
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                            <input value={isHyperCasualToAll} onChange={toggleClass1} type="checkbox" name="toggle1" id="Blue" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                            <label for="Blue" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                            </label>
                                        </div>
                                        <span class="text-gray-400 font-medium">
                                            Yes
                                        </span>
                                    </div>

                                </div>
                                
                            </div>
                
                            <div class="flex justify-end mt-6">
                                <input 
                                    type="submit" 
                                    value="Submit"
                                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                </input>
                            </div>
    
                        </form>
                    </section>
    
                  </div>
                </div>
			) : (
                <div class="pt-16 mx-auto w-4/6 h-4/6">
                  <div class="w-full p-6 m-auto bg-blue border border-green-600 rounded-md shadow-md dark:bg-gray-800">
                  
                    <section>
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Admin Panel</h2>
                        
                        <form onSubmit={handleNext}>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Which Charts?</label>
                                    
                                    <select 
                                        id="whichCharts" 
                                        name="whichCharts"
                                        value={whichCharts}
                                        onChange={(e) => setWhichCharts(e.target.value)} 
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    >   
                                        <option>{ "none" }</option> 
                                        <option>{ "top-charts" }</option>
                                        <option>{ "new-releases" }</option>
                                    </select>
    
                                </div>
                                
                            </div>
                
                            <div class="flex justify-end mt-6">
                                <input 
                                    type="submit" 
                                    value="Next"
                                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                </input>
                            </div>
    
                        </form>
                    </section>
    
                  </div>
                </div>
			)}

		</>
    );
};

export default Admin;