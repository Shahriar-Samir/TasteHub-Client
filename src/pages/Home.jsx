import { useEffect } from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Home = () => {
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','dark')
    },[])
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>|| Home</title>
                </Helmet>
            </HelmetProvider>
            Home
        </div>
    );
};

export default Home;