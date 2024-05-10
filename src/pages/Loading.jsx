import React from 'react';
import Lottie from 'lottie-react';
import LoadingFood from '../../public/animations/loading.json'

const Loading = () => {
    return (
        <div className='flex justify-center items-center text-white h-[100vh]'>
            <div className='flex items-center gap-2'>
            <h1 className='text-4xl font-bold'>Loading</h1>
            <Lottie animationData={LoadingFood} className='w-[100px]' loop={true}/>
            </div>
        </div>
    );
};

export default Loading;