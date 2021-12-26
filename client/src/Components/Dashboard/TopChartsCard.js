import React from 'react';

import { useHistory, generatePath, useRouteMatch } from 'react-router-dom';

// routes
import * as ROUTES from '../../Constants/routes';

const TopChartsCard = (props) => {
    let history = useHistory();

    const { url } = useRouteMatch();

    const redirectDetailed = () => {
        localStorage.setItem("app_rank", props.rank);
        localStorage.setItem("app_name", props.name);
        localStorage.setItem("app_publisher", props.publisher);
        localStorage.setItem("app_image", props.image);
        localStorage.setItem("app_releaseDate", props.releaseDate);
        localStorage.setItem("app_video", props.videoUrl);
  
        history.push(ROUTES.APP_DETAIL + '/' + props.name);
    }
      
    
    return (  
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.rank}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href={props.url} class="block relative">
                            <img alt="profil" src={props.image} class="mx-auto object-cover rounded-lg h-14 w-14"/>
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {props.name}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.publisher}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.releaseDate}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        {props.score}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <a onClick={redirectDetailed} class="text-indigo-600 hover:text-indigo-900">
                    Detail
                </a>
            </td>
        </tr>
    );
}

export default TopChartsCard;