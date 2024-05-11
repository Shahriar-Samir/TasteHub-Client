import React from 'react';

const Gallery = () => {
    return (
        <div>
              <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/foodGallery.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 h-[70vh]">
                <h1 className='text-5xl font-bold'>Gallery</h1>
            </div>
        </div>
    );
};

export default Gallery;