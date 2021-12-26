import React, {Component} from 'react';

import axios from 'axios';

export default class Admin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            charts: [],
            apps: [],
            render: false,
        };

    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({charts: true}) //After 1 second, set render to true
        }.bind(this), 1000)

        axios.get('http://localhost:3000/top-charts/')
			.then((res) => {
				this.setState({ charts: res.data[0].data });
          
                console.log(this.state.charts);
    
                for (let i = 0; i < 100; i++) 
                {
                    this.state.apps.push( this.state.charts[i]) ;
                }
			})
			.catch((err) => {
				console.log(err);
			});
    }

    render() {
        const Options = ({charts}) => (
            <>
              {charts.map((chart, index) => (
                    <option>
                        { chart["im:name"].label }
                    </option>
              ))}
            </>
        );

        return (
            <div class="pt-16 mx-auto w-4/6 h-4/6">
                <div class="w-full p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                  
                    <section>
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Admin Panel</h2>
                        
                        <form>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="username">Game Name</label>
                                    
                                    <select 
                                        id="Currency" 
                                        name="currency" 
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        
                                        <Options charts={this.state.apps} />
                                    </select>
    
                                </div>
                
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Top Charts Date</label>
                                    <input 
                                        id="emailAddress" 
                                        type="date" 
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Game Mechanic Media</label>
                                    <input
                 						type='file'
                 						accept='.png, .jpg, .jpeg'
                 						name='blogImage'
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                 					/>

    						    </div>
                            </div>
                
                            <div class="flex justify-end mt-6">
                                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>

                        </form>
                    </section>
    
                  </div>
            </div>
        )
    }
}