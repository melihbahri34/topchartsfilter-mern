import React, { Component } from 'react';

export default class TopPublishers extends Component {
    render() {
        return (
            <div class="container mx-auto px-4 sm:px-8 w-full">
                <div class="py-8">
                    <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 class="text-2xl leading-tight">
                            Top Publishers
                        </h2>
                        <div class="text-end">
                            <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div class=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                                </div>
                                <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">

                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Rank
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Name
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Country
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            App Count
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Score
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        </th>
                                    </tr>
                                </thead>
            
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                #1
                                            </p>
                                        </td>

                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">

                                                <div class="flex-shrink-0">
                                                    <a href="#" class="block relative">
                                                        <img alt="logo" src="data:image/png;base64,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" class="mx-auto object-cover h-14 w-14 rounded-lg"/>
                                                    </a>
                                                </div>

                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Voodoo
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                France
                                            </p>
                                        </td>

                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                96
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                </span>
                                                <span class="relative">
                                                    7/10
                                                </span>
                                            </span>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
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
        )
    }
}
