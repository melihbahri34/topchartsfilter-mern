import React, { Component } from 'react'

export default class Hero3 extends Component {
    render() {
        return (
            <div>         
                <header class="bg-white dark:bg-gray-800">
                    <div class="container px-6 py-16 mx-auto">
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Platform To Boost Your Business.</h1>
                                    <p class="mt-2 text-gray-600 dark:text-gray-400">Realtime app stores tracker. The newest games in App Store and Google Play from all over the World.</p>
                                    <button class="duration-300 ease-in-out w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 animate-bounce">
                                        GET STARTED
                                    </button>
                                </div>
                            </div>
                    
                            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img class="w-4/6 h-4/6 lg:max-w-2xl" src="https://storeglide.com/img/charts.svg" alt="Catalogue-pana.svg"/>
                            </div>
                        </div>
                    </div>
                </header>
                <hr/>
            </div>
        )
    }
}
