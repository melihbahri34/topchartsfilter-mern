import React from 'react';
import ReactPlayer from 'react-player';

function DashboardCard07(props) {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Mechanic Video (From AI)</h2>
      </header>
      
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">

          </table>

          <ReactPlayer 
            url={props.videoUrl}
            playing="true" 
            loop="true" />
          
        </div>

      </div>
    </div>
  );
}

export default DashboardCard07;
