import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';


const Signin = () => {
    const {signIn} = useContext(AuthContext)

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
    },[])    

    function submit(e){
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        if(password.length < 6 || /[A-Z]/.test(password) === false || /[a-z]/.test(password) === false){
            toast.error('Password must have an uppercase and lowercase letter with at least 6 characters')
        }
        else{
            signIn(email,password)
        .then(()=> toast.success('Logged in successfully'))
        .catch(err=>{
            if(err.message==='Firebase: Error (auth/invalid-credential).'){
                toast.error('Incorrect email or password')
            }
            else{
                toast.error('Something went wrong')
            }
        })
        }
    }

    return (
        <>
        <ToastContainer/>
        <div className="h-[100vh] w-full  bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/loginBanner.jpg')] bg-no-repeat bg-cover flex justify-center items-center gap-10">
                <div className='md:w-1/3 flex justify-center items-center'>
<form className="w-11/12 max-w-[300px] mt-20" onSubmit={submit}>
    <h1 className='text-3xl mb-5 font-bold text-center'>Sign In</h1>
  <div className="mb-5 w-full ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your email</label>
    <input type="email" id="email" name='email' className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5" placeholder="Enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">Your password</label>
    <input type="password" id="password" name='password' className="shadow-sm bg-[white] text-black  text-sm rounded-lg w-full p-2.5   " placeholder="Enter your password" required />
  </div>
 
  <button type="submit" className="w-full text-white bg-[#C90B12] hover:bg-[#8e282b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
  <p className='mt-4 text-sm text-center'>Don't have an account? <Link to='/signup' className='font-bold hover:underline'>Create a new account</Link></p>
</form>

                </div>
                <div className="flex flex-col">
                        <div className='flex flex-col gap-4 md:'>
                        <h1 className='text-6xl font-bold max-w-[600px] text-center mt-20'><Typewriter words={['Welcome back to TasteHub!']} typeSpeed={50}  cursor={true} cursorStyle={'_'}/></h1>
                            <p className='text-center w-11/12 max-w-[600px]'>Embark on a personalized culinary journey with TasteHub. Sign in to manage your food inventory, explore new recipes, and track your orders seamlessly. From adding your favorite dishes to discovering new flavors, your profile is your gateway to a world of culinary delight</p>
                        </div>
                </div>
        </div>
        </>
    );
};

export default Signin;