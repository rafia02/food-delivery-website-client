import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();




    const handleLogin =(data) => {
        console.log(data)
    }







    return (
        <div className='flex justify-center items-center h-96 mt-14'>

            <div className='w-1/3  bg-gradient-to-b from-indigo-300 py-10 px-10 '>
                <h1 className='text-center font-serif text-3xl font-bold text-sky-400'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-serif text-lg"> Your Name</span> </label>
                        <input type="text" placeholder="Name" {...register("name", { required: "Your Name required" })} className="input input-bordered w-full " />
                        {errors.name && <span className='text-red-600 font-serif '> {errors.name.message} </span>}
                    </div>



                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-serif text-lg"> Your Email</span> </label>
                        <input type="email" placeholder="Name" {...register("email", { required: "Your Email required" })} className="input input-bordered w-full " />
                        {errors.email && <span className='text-red-600 font-serif '> {errors.email.message} </span>}
                    </div>



                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-serif text-lg"> Password </span> </label>
                        <input type="text" placeholder="Name" {...register("password", { required: "Your Password required" })} className="input input-bordered w-full " />
                        {errors.password && <span className='text-red-600 font-serif '> {errors.password.message} </span>}
                    </div>







                    <input type="submit" value="Login" className='text-white bg-sky-600 w-full py-2 mt-6 font-medium text-lg' />
                </form>

                <input type="submit" value="Google" className='text-white bg-green-400 w-full py-2 mt-6 font-medium text-lg' />
          
            </div>



        </div>
    );
};

export default Login;