import {Helmet, HelmetProvider} from 'react-helmet-async'

const Home = () => {
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