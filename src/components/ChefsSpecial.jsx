import React from 'react';

const ChefsSpecial = () => {
    return (
        <div className='flex justify-between mt-32 gap-10'>
            <div className='w-1/2 h-full'>
            <h1 className='text-3xl font-bold'>Chef's Culinary Showcase</h1>
            <p className='text-xl'>Step into a realm of culinary excellence with TasteHub's Chef's Culinary Showcase. Our esteemed chefs pour their creativity and expertise into every dish, crafting a symphony of flavors and textures that tantalize the senses and ignite the imagination. From innovative fusion creations to seasonal masterpieces, each dish is a work of art, meticulously curated to transport you on a gastronomic journey unlike any other. Embark on an epicurean adventure and savor the magic of our Chef's Culinary Showcase, where every bite tells a story of passion, innovation, and culinary craftsmanship.</p>
            <button className='btn bg-[#C90B12] hover:bg-[#8e282b] text-white border-none mt-10'>Go to Showcase</button>
            </div>
            <img className='w-1/2'  src='/images/specialDish.jpg'/>
        </div>
    );
};

export default ChefsSpecial;