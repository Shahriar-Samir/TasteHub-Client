import React from 'react';

const GlobalGasronomy = () => {
    return (
        <div className='mt-32'>
         <h1 className='text-3xl font-bold text-center'>Global Gastronomy Expedition</h1>
        <div className='flex flex-row-reverse mt-10 gap-10'>                         
            <div>          
                <p className='text-xl'>Embark on a culinary voyage around the world with TasteHub's Global Gastronomy Expedition. This section invites you to explore an eclectic array of international flavors and culinary traditions, curated to transport your palate to distant lands and exotic locales. From tantalizing street food to refined gourmet fare, each dish offers a passport to new culinary horizons, allowing you to savor the diverse tastes and cultures of the world without ever leaving your table. Join us on a journey of gastronomic discovery and indulge in the vibrant tapestry of global cuisine.</p>
                <button className='btn bg-[#C90B12] hover:bg-[#8e282b] text-white border-none mt-5 text-xl font-bold'>Join Us</button>
            </div>
            <img src='/images/diverseFood.jpg' className='w-1/2 h-[400px] object-cover'/>
        </div>
        </div>
   
    );
};

export default GlobalGasronomy;