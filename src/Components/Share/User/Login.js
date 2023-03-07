import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Contex } from '../../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {userSingIn, userGoogleSingIn } = useContext(Contex)    
    
    

    const handleGoogle = () => {
        const provider= new GoogleAuthProvider()
        userGoogleSingIn(provider)
        .then((res)=> {
            console.log(res.user)
            toast.success("Success Google Login..!")
        })
        .catch((err) => {
            console.log(err)
            toast.error("Sorry, Filed Google Login..!")
        })
    }

    const handleLogin =(data) => {
        console.log(data)
        userSingIn(data.email, data.password)
        .then((res)=> {
            const user = res.user;
            console.log(user)
            toast.success("Success Login...!")
        })
        .catch((err)=> {
            console.log(err)
            toast.error("Sorry, Filed Login...!")
        })
    }







    return (
        <div className='flex justify-center items-center h-96 mt-24'>

            <div className='w-1/3  bg-gradient-to-b from-rose-200 py-10 px-8 '>
                <h1 className='text-center font-serif text-3xl font-bold text-sky-400'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-serif text-lg"> Your Email</span> </label>
                        <input type="email" placeholder="Name" {...register("email", { required: "Your Email required" })} className="input input-bordered w-full " />
                        {errors.email && <span className='text-red-600 font-serif '> {errors.email.message} </span>}
                    </div>



                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-serif text-lg"> Password </span> </label>
                        <input type="password" placeholder="Name" {...register("password", { required: "Your Password required" })} className="input input-bordered w-full " />
                        {errors.password && <span className='text-red-600 font-serif '> {errors.password.message} </span>}
                    </div>







                    <input type="submit" value="Login" className='text-white    bg-gradient-to-r from-indigo-500 via-yellow-700 to-pink-500               w-full py-2 mt-6 font-medium text-lg' />
                    <h1 className='font-serif'> Create new an account? <span> <Link to='/singup'>Sing up</Link> </span> </h1>
                </form>

                <input type="submit" onClick={ handleGoogle} value="Google" className='text-white bg-green-400 w-full py-2 mt-6 font-medium text-lg' />
          
            </div>



        </div>
    );
};

export default Login;