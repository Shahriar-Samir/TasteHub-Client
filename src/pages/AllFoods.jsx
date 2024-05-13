
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify';
import axios from 'axios'


const AllFoods = () => {
    const {data} = useLoaderData()
    const [foodItems,setFoodItems] = useState(data)
    const [resultTitle,setResultTitle] = useState('Results for : All')

    const searchItems = (e)=>{
            e.preventDefault()
            const searchValue = e.target.search.value
            setResultTitle(`Results for : ${searchValue? searchValue : 'All'}`)
            axios.get(`http://localhost:5000/searchFood/${searchValue===''? 'false' : searchValue}`, {withCredentials:true})
            .then(res=>{
                setFoodItems(res.data)
            })
            .catch(err=>{
                toast.error('Something went wrong')
            })
    }
    
    return (
        <div>
           <ToastContainer toastStyle={{backgroundColor:'#00000080',color:'white'}}/>
            <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/allFoods.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10 h-[80vh]">
                <h1 className='text-5xl font-bold'>All Food Items</h1>
            </div>

            <div className='mt-14'>
            <form className="max-w-md mx-auto" onSubmit={searchItems}>   
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
                <p className='text-center'>{resultTitle}</p>
            </div>
            {foodItems.length > 0 ? <div className='w-11/12 mx-auto max-w-[1200px] grid grid-cols-3 gap-10 mt-10'>
                {foodItems.map(item=>{
                    return <Card key={item._id} item={item}/>
                })}
            </div> : <div className='h-[80vh] mt-10'>
            <p className='text-xl text-center'>No items found</p>
                </div>}
            </div>
        </div>
    );
};

export default AllFoods;


// card component


const Card = ({item})=>{
    const {foodName,foodImage,_id} = item
    return (
        <div className="max-w-sm rounded overflow-hidden bg-gray-600">
  <img className="w-full" src={foodImage} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{foodName}</div>
    <p className="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <Link to={`/foodDetails/${_id}`}>View Details</Link>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    )
}