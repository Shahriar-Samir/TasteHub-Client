import {useEffect } from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Link, useLoaderData } from 'react-router-dom';
import ChefsSpecial from '../components/ChefsSpecial';


const Home = () => {
    const {data} = useLoaderData()
    console.log(data)
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','dark')
    },[])
    return (
        <div className='mt-52 w-11/12 max-w-[1200px] mx-auto'>
            <HelmetProvider>
                <Helmet>
                    <title>TasteHub || Home</title>
                </Helmet>
            </HelmetProvider>
            <div>
                <h1 className='text-2xl font-bold text-center text-[gold]'>Six Top Selling Foods</h1>
            <div className='grid grid-cols-3 gap-14 mt-14'>
                {data.map(item=>{
                    return <Card key={item.key} item={item}/>
                })}
            </div>
            <div className='mt-12 flex justify-center'>
            <Link to='/allFoods' ><button className="btn bg-[#C90B12] hover:bg-[#8e282b] border-none px-6 font-bold text-white">View All Foods</button></Link>
            </div>
            </div>
            <ChefsSpecial/>
        </div>
    );
};

export default Home;

const Card = ({item})=>{
    const {foodName,foodImage,foodCategory,price,_id} = item
    return(
        <div className="card bg-base-100 shadow-xl border-2 rounded-sm border-[gold]" >
        <div className="p-5 flex flex-col justify-between" style={{background:"linear-gradient(to bottom,  rgba(0,0,0,0.2),  rgb(0,0,0,0.2)), url('"+foodImage+"')",height:"330px",backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className=''>
        <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold">{foodName}</h2>
        </div>
        <p className='font-bold'>{foodCategory}</p>
        </div>
            <div className="flex items-center justify-between mt-5">
            <p className='font-bold text-xl'  style={{textShadow:'1px 1px 20px black'}}>Price: <span className='text-[gold]'>${price}</span></p>
      <Link to={`/foodDetails/${_id}`}><button className="btn bg-[#C90B12] hover:bg-[#8e282b] border-none text-white">View Details</button></Link>
        </div>
    </div>
    </div>
    )
}