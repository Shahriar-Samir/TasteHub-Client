import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center flex-col text-white bg-[#C90B12]">
            <img src="/animations/404.gif" className="w-[200px] md:w-[300px]"/>
            <h1 className="text-2xl w-11/12 font-semibold text-center">Page you're looking for not found</h1>
            <Link to='/'><button className="bg-[#C90B12] bg-[#8e282b] p-2 rounded-md mt-5 font-semibold">Go to Home</button></Link>
        </div>
    );
};

export default PageNotFound;