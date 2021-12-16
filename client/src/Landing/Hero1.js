import React, { Component } from 'react';

// constants
import * as VARIABLES from '../Constants/variables';

export default class Hero1 extends Component {
    render() {
        return (
            <div>
                <section class="bg-white dark:bg-gray-800">            
                    <div class="container px-6 py-16 mx-auto text-center">
                        <div class="max-w-lg mx-auto">
                            <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Building Your Next Game with our Awesome services</h1>
                            <p class="mt-6 text-gray-500 dark:text-gray-300">{VARIABLES.MOTTO}</p>
                            <button
                                class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
                                Start 14-Day free trial
                            </button>
                            <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
                        </div>
                
                        <div class="flex justify-center mt-10">
                            <div class="w-full h-64 bg-blue-600 rounded-xl md:w-4/5"></div>
                        </div>
                    </div>
                </section>
                <hr/>
            </div>
        )
    }
}
