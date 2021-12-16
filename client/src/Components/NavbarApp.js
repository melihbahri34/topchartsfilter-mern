import React from 'react';

// constants
import * as ROUTES from '../Constants/routes';
import * as VARIABLES from '../Constants/variables';

const NavbarApp = () => {

    return (  
        <div>
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container px-6 py-4 mx-auto">
                    <div class="md:flex md:items-center md:justify-between">
                        <div class="flex items-center justify-between">
                            <div class="text-xl font-semibold text-gray-700">
                                <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">{VARIABLES.BRAND}</a>
                            </div>
            
                            <div class="flex md:hidden">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
            
                        <div class="flex-1 md:flex md:items-center md:justify-between">
                            <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                <a href="/" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">About</a>
                                <a href="/pricing" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Pricing</a>
                                <a href="/3" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">3</a>
                                <a href="/4" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">4</a>
                            </div>
    
                            <div class="flex items-center py-2 -mx-1 md:mx-0">
                                <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" href="/login">Login</a>
                                <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="/register">Join free</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <hr/>
        </div>
    )
}
  
export default NavbarApp;