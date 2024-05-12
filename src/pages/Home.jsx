import {useEffect } from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const {data} = useLoaderData()
    console.log(data)
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
            <div className='mx-auto w-11/12 max-w-[1200px] grid grid-cols-3'>
                {data.map(item=>{
                    return <Card key={item.key} item={item}/>
                })}
            </div>
        </div>
    );
};

export default Home;

const Card = ({item})=>{
    const {foodName,foodImage} = item
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={foodImage} /></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}