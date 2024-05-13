import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import buttonLoader from '../../public/animations/buttonLoading.json'
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase';


const Register = () => {
    const {signUp,updateUser,setLoadingSpinner,loadingSpinner} = useContext(AuthContext)
    const auth = getAuth(app)
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
    },[])
    
    function submit(e){
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, photo)
        if(password.length < 6 || /[A-Z]/.test(password) === false || /[a-z]/.test(password) === false){
            toast.error('Password must have an uppercase and lowercase letter with at least 6 characters')
        }
        else{
            signUp(email,password)
            .then(()=>{
                setLoadingSpinner(false)
                updateUser({displayName:name, photoURL: photo})
                .then(()=>{
                    setLoadingSpinner(false)
                    toast.success('Account created successfully')
                    onAuthStateChanged(auth,user=>{
                        const {
                            uid,
                            email,
                            displayName,
                            photoURL} = user

                        axios.post('http://localhost:5000/addUser',{
                            uid,
                            email,
                            displayName,
                            photoURL}, {withCredentials:true})
                    })
                })
            })
            .catch(err=>{
                setLoadingSpinner(false)
                if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
                    toast.error('Email already in use')            
                }
                else{
                    toast.error('Something went wrong')
                }
            })
          
        }
    }
    
    return (
        <>
     <ToastContainer toastStyle={{backgroundColor:'#00000080',color:'white'}}/>
        <div className="h-[120vh] w-full  bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/loginBanner.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10">
                <div className='md:w-1/3 flex justify-center items-center'>
<form className="w-11/12 max-w-[350px] mt-32" onSubmit={submit}>
    <h1 className='text-3xl mb-5 font-bold text-center w-full'>Create a new account</h1>
    <div className="mb-5 w-full ">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white ">User name</label>
    <input type="text" id="name" className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5" placeholder="Enter your name" name='name' required />
  </div>
  <div className="mb-5 w-full ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">User email</label>
    <input type="email" id="email" className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5" placeholder="Enter your email" required />
  </div>
  <div className="mb-5 w-full ">
    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-white ">User photo URL</label>
    <input type="text" id="photo" name='photo' className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5" placeholder="Enter your photo URL" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">User password</label>
    <input type="password" id="password" className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5   " placeholder="Enter your password" required />
  </div>
 
  {loadingSpinner?  <button className="w-full btn-disabled border rounded-md bg-transparent border-[#C90B12] flex justify-center items-center p-[4.5px]"><Lottie animationData={buttonLoader} loop={true} className='w-[30px]'/></button>:  <button type="submit" className="w-full text-white bg-[#C90B12] hover:bg-[#8e282b] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>}

  <p className='mt-4 text-sm text-center'>Already have an account? <Link to='/signin' className='font-bold hover:underline'>Sing In</Link></p>
</form>

                </div>
                <div className="flex flex-col">
                        <div className='flex flex-col gap-4 mt-10'>
                        <h1 className='text-6xl font-bold max-w-[600px] text-center'><Typewriter words={['Join TasteHub']} typeSpeed={50}  cursor={true} cursorStyle={'_'}/></h1>
                            <p className='text-center w-11/12 max-w-[600px]'>Become a part of the TasteHub community today. Register to unlock a world of culinary possibilities, from adding your own recipes to ordering delicious meals. Start your culinary adventure with us and savor every moment.</p>
                        </div>
                </div>
        </div>
        </>
    );
};

export default Register;