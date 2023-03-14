import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Contex } from '../../../Context/AuthProvider';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { userSingIn, userGoogleSingIn } = useContext(Contex)
    const navigate = useNavigate()



    const handleGoogle = () => {
        const provider = new GoogleAuthProvider()
        userGoogleSingIn(provider)
            .then((res) => {
                console.log(res.user)
                toast.success("Success Google Login..!")
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                toast.error("Sorry, Filed Google Login..!")
            })
    }

    const handleLogin = (data) => {
        console.log(data)
        userSingIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                console.log(user)
                toast.success("Success Login...!")
                navigate('/')

            })
            .catch((err) => {
                console.log(err)
                toast.error("Sorry, Filed Login...!")
            })
    }







    return (
        <div className='w-1/2 mx-auto my-10'>

            <div>
                <div className=' bg-rose-100 py-8 '>
                    <h1 className='text-center  text-3xl font-bold text-rose-500'>Login</h1>
                    <div className='text-center text-rose-700 mt-2'>
                        <h1>User Email: check@gmail.com</h1>
                        <h1>Password: 123456</h1>
                    </div>

                    <form className='w-2/3 mx-auto' onSubmit={handleSubmit(handleLogin)}>

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







                        <input type="submit" value="Login" className='text-white rounded bg-gradient-to-r from-rose-500 to-orange-400         w-full py-2 mt-6 font-medium text-lg' />
                        <h1 className='font-serif'> Create new an account? <span> <Link className='text-rose-500 font-bold' to='/singup'>Sing up</Link> </span> </h1>
                    </form>

                   <div onClick={handleGoogle} value="Google" className='text-white rounded text-center w-2/3 mx-auto bg-gradient-to-r from-rose-500 to-orange-400 py-2 mt-6 font-medium text-lg'>Google</div>


                </div>
            </div>



        </div>
    );
};

export default Login;