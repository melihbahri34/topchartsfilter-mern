import React, { Component } from 'react';
import TopChartsCard from '../Components/Dashboard/TopChartsCard';

import WelcomeBanner from '../Components/Dashboard/WelcomeBanner';
import DashboardCard06 from '../Components/Dashboard/DashboardCard06';
import DashboardCard07 from '../Components/Dashboard/DashboardCard07';
import Banner from '../Components/Dashboard/Banner';

function AppDetail(props) {
    const rank = localStorage.getItem("app_rank");
    const name = localStorage.getItem("app_name");
    const publisher = localStorage.getItem("app_publisher");
    const image = localStorage.getItem("app_image");
    const releaseDate = localStorage.getItem("app_releaseDate");

    return(
        <div className="flex w-full h-screen overflow-hidden">

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          
                        {/* Welcome banner */}
                        <WelcomeBanner />
            
                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
            
                            {/* Doughnut chart (Top Countries) */}
                            <DashboardCard06 
                            rank={rank}
                            name={name}
                            publisher={publisher} 
                            releaseDate={releaseDate}
                            image={image} />

                            {/* Table (Top Channels) */}
                            <DashboardCard07 />
                          
                        </div>
          
                    </div>
                </main>
      
              <Banner />
      
            </div>
        </div>
    );
}

export default AppDetail;