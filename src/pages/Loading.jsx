import Lottie from 'lottie-react';
import LoadingFood from '../../public/animations/loading.json'
import { useEffect } from 'react';

const Loading = () => {
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','dark')
    },[])
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