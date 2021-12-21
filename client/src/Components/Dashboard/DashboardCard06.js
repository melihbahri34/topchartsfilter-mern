import React from 'react';

function DashboardCard06(props) {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">About App</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div class="flex flex-col">

        <div class="pl-4 pb-8 pt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <a class="mx-2">Rank:</a>
                    <a class="mx-2">{props.rank}</a>
                </div>
            </div>
        </div>

        <div class="pl-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img 
                      class="object-cover h-20 w-20 rounded-lg" 
                      src={props.image}
                      alt="Avatar"/>
                    <a class="mx-2 text-xl">{props.name}</a>
                </div>
            </div>
        </div>

        <div class="pl-4 pt-6 pb-8">
            <div class="flex items-center">
                <div class="flex items-center">
                    <a class="mx-2">Publisher:</a>
                    <a class="mx-2">{props.publisher}</a>
                </div>
            </div>
        </div>

        <div class="pl-4 pb-8">
            <div class="flex items-center">
                <div class="flex items-center">
                    <a class="mx-2">Release Date:</a>
                    <a class="mx-2">{props.releaseDate}</a>
                </div>
            </div>
        </div>

        <div class="pl-4 pb-8">
            <div class="flex items-center">
                <div class="flex items-center">
                    <a class="mx-2">Score:</a>
                    <a class="mx-2">X/X</a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardCard06;
