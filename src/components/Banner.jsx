import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="h-[80vh] bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner.jpg')] bg-no-repeat bg-cover flex justify-center items-center ">
           <div className='flex flex-col items-center gap-4'>
           <h1 className='text-center text-5xl font-bold'>Where Flavor Comes to Life</h1>
            <p className='text-center text-xl w-11/12 max-w-[900px]'>Indulge your senses and ignite your taste buds at TasteHub, your ultimate destination for culinary exploration. Step into a world where every dish tells a story, where flavors mingle harmoniously, and where each bite is a revelation. From the vibrant hues of fresh ingredients to the tantalizing aromas wafting from our kitchen, every aspect of your dining experience is carefully curated to delight and inspire. Explore our food items.</p>
            <Link to='/allFoods' ><button className="btn bg-[#C90B12] hover:bg-[#8e282b] border-none px-6 font-bold text-white">View All Foods</button></Link>
           </div>
        </div>
    );
};

export default Banner;