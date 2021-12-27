import React, { useEffect, useState, useMemo } from 'react';

import axios from 'axios';

import DashboardCard06 from '../Components/Dashboard/DashboardCard06';

const Admin = () => {

    const [charts, setCharts] = useState([]);
    const [apps, setApps] = useState([]);
    const [render, setRender] = useState(false);

    const [appID, setAppID] = useState('');

    const [isHyperCasual, setIsHyperCasual] = useState(false);

    const [newChart, setNewChart] = useState({
		appName: '',
        chartsDate: '',
        appVideo: '',
        appID: '',
        videoUrl: ''
	});

    const getCharts = () => {
        axios.get('http://localhost:3000/top-charts/')
			.then((res) => { 
                setCharts(res.data[0].data)

                setApps(charts);

                setRender(true);
			})
			.catch((err) => {
				console.log(err);
			});
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

        console.log(apps);

        await fetch('http://localhost:3000/api/top-charts/update', {
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

    function toggleClass() {
        if(!isHyperCasual)
        {
            setIsHyperCasual(true);
        }
        else if(isHyperCasual)
        {
            setIsHyperCasual(false);
        }
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
                                    <label class="text-gray-700 dark:text-gray-200">App Name</label>
                                    <label class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">{newChart.appName.substring(newChart.appName.indexOf(" "))}</label>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Charts Date</label>
                                    <label class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">{newChart.chartsDate}</label>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">App Video Name</label>
                                    <label class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">{newChart.appVideo.name}</label>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">App Rank</label>
                                    <label class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">{newChart.appName.substr(0, newChart.appName.indexOf(' '))}</label>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200">Is Hyper-Casual</label>

                                    <div class="mb-3" onClick={toggleClass}>
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                            <input type="checkbox" name="toggle" id="Blue" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
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
				'rendering...'
			)}

		</>
    );
};

export default Admin;