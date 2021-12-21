import React, { Component } from 'react';

// heros
import Hero1 from '../../Components/Landing/Hero1';
import Hero2 from '../../Components/Landing/Hero2';
import Hero3 from '../../Components/Landing/Hero3';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero1></Hero1>
                <Hero2></Hero2>
                <Hero3></Hero3>
            </div>
        )
    }
}
