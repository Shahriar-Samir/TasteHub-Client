
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify';
import axios from 'axios'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const AllFoods = () => {
    const {data} = useLoaderData()
    const {count} = data
    const [foodItems,setFoodItems] = useState([])
    const [resultTitle,setResultTitle] = useState('Results for : All')
    const [currentPage, setCurrentPage] = useState(0)
    const searchItems = (e)=>{
            e.preventDefault()
            const searchValue = e.target.search.value
            setResultTitle(`Results for : ${searchValue? searchValue : 'Nothing'}`)
            axios.get(`https://assignment-11-server-alpha-one.vercel.app/searchFood/${searchValue===''? 'false' : searchValue}`, {withCredentials:true})
            .then(res=>{
                setFoodItems(res.data)
            })
            .catch(err=>{
                toast.error('Something went wrong')
            })
    }

    const itemsPerPage = 9
    const numbersOfPages = Math.ceil(count/ itemsPerPage) 
    const pages = [...Array(numbersOfPages).keys()]


    const previous = ()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage-1)
        }
    }
    const next = ()=>{
        if(currentPage < (numbersOfPages-1)){
            setCurrentPage(currentPage+1)
        }
    }

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','dark')
        axios.get('https://assignment-11-server-alpha-one.vercel.app/allFoods', {withCredentials:true, params:{page:currentPage, size:itemsPerPage}})
        .then(res=>{
            setFoodItems(res.data)
        })
        .catch(()=>{
            toast.error('Something went wrong')
        })
    },[currentPage,itemsPerPage])
    
    return (
        <div className='mb-28'>
             <HelmetProvider>
                <Helmet>
                    <title>TasteHub || All Foods</title>
                </Helmet>
            </HelmetProvider>
            <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/allFoods.jpg')] bg-no-repeat bg-cover flex justify-center items-center h-[80vh]">
                <h1 className='text-4xl lg:text-5xl text-center font-bold'>All Food Items</h1>
            </div>

            <div className='mt-14'>
            <form className="w-11/12 max-w-md mx-auto" onSubmit={searchItems}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search food items" name='search' />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#C90B12] hover:bg-[#8e282b] font-medium rounded-lg text-sm px-4 py-2" >Search</button>
                </div>
            </form>
            <div className='w-11/12 max-w-[1200px] mx-auto mt-5'>
                <p className='text-center text-lg font-bold'>{resultTitle}</p>
            </div>
            {foodItems.length > 0 ? <div>
                <div className='w-11/12 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {foodItems.map(item=>{
                    return <Card key={item._id} item={item}/>
                })}
            </div>
            <div className='w-full flex justify-center mt-10'>
            <div className="join" data-theme='light'>
                <button className="join-item btn" onClick={previous}>Previous</button>
            {
                pages.map(page=>{
                    if(page === currentPage){
                        return <button key={page} onClick={()=> setCurrentPage(page)} className="join-item btn bg-[black] text-white">{page+1}</button>
                    }
                    else{
                        return <button key={page} onClick={()=> setCurrentPage(page)} className="join-item btn">{page+1}</button>
                    }
                })
            }
            <button className="join-item btn" onClick={next}>Next</button>
            </div>
            </div>
            </div> : <div className='h-[80vh] mt-10 flex flex-col justify-between items-center'>
            <p className='text-xl text-center'>No items found</p>
            <div className="join" data-theme='light'>
                <button className="join-item btn" onClick={previous}>Previous</button>
            {
                pages.map(page=>{
                    if(page === currentPage){
                        return <button key={page} onClick={()=> setCurrentPage(page)} className="join-item btn bg-[black] text-white">{page}</button>
                    }
                    else{
                        return <button key={page} onClick={()=> setCurrentPage(page)} className="join-item btn">{page}</button>
                    }
                })
            }
            <button className="join-item btn" onClick={next}>Next</button>
            </div>
                </div>}
            </div>
        </div>
    );
};

export default AllFoods;


// card component


const Card = ({item})=>{
    const {foodName,foodImage,foodCategory,price,_id,quantity} = item
    return(
        <div className="card bg-base-100 shadow-xl border-2 rounded-sm border-gray-300" >
        <div className="p-5 flex flex-col justify-between" style={{background:"linear-gradient(to bottom,  rgba(0,0,0,0.2),  rgb(0,0,0,0.2)), url('"+foodImage+"')",height:"330px",backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className=''>
        <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold">{foodName}</h2>
        </div>
        <p className='font-bold'>{foodCategory}</p>
        </div>
        <div className='flex flex-col'>
        <p className='font-bold text-xl' style={{textShadow:'1px 1px 20px black'}}>Quantity: {quantity}</p>
            <div className="flex items-center justify-between">
            <p className='font-bold text-xl'  style={{textShadow:'1px 1px 20px black'}}>Price: <span className='text-[gold]'>${price}</span></p>
      <Link to={`/foodDetails/${_id}`}><button className="btn bg-[#C90B12] hover:bg-[#8e282b] border-none text-white">View Details</button></Link>
        </div>
        </div>

    </div>
    </div>
    )
}