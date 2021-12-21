import React, { Component } from 'react';

// pricing cards
import PricingCardWhite from '../../Components/Base/PricingCardWhite';
import PricingCardBlack from '../../Components/Base/PricingCardBlack';

export default class PricingPage extends Component {
  render() {
    const dataItems = [
      ["Top Charts", "New Releases"], 
      ["Top Charts", "New Releases", "Hyper-Casual Top Charts", "Top Publishers's New Releases"], 
      ["Top Charts", "New Releases", "Hyper-Casual Top Charts", "Top Publishers's New Releases", "Biggest Movers & Losers"],
      ["Top Charts", "New Releases", "Hyper-Casual Top Charts", "Top Publishers's New Releases", "Biggest Movers & Losers", "CTR & CPI Estimate", "D1, D7, D30 Estimate", "Ad Creatives", "Tiktok Trends"]
    ];

    const dataCard = [
      {"Name": "Free", "Price": "$9.9", "Button":"Sign up for free", items: dataItems[0], "color":"white"}, 
      {"Name":"Premium", "Price": "$24.9", "Button":"Get started", items: dataItems[1], "color":"white"}, 
      {"Name":"Pro", "Price":"$49.9", "Button":"Get started", items: dataItems[2], "color":"black"}, 
      {"Name":"Enterprise", "Price":"$99.9", "Button":"Get started", items: dataItems[3], "color":"white"}];
    
    const listCard = dataCard.map((d2, index1) => 
    <PricingCardWhite key={index1} name={d2.Name} price={d2.Price} items={d2.items} />);

    return (
      <div>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
              <div class="sm:flex sm:items-center sm:justify-between">
                  <div>
                      <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Simple, transparent pricing</h2>
                      <p class="mt-4 text-gray-500 dark:text-gray-400">Free trial for 14 days. No credit card required. Refund in 30 days.</p>
                  </div>
      
                  <div class="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                      <div class="sm:-mx-0.5 flex">
                          <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                          <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-transparent rounded-lg hover:bg-gray-200">Yearly</button>
                      </div>
                  </div>
              </div>
  
              <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {listCard}
              </div>
          </div>
        </section>
      </div>
    )
  }
}

