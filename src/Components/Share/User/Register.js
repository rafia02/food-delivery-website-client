import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();




     const handleRegister= (data)=> {
        console.log(data)
     }




    return (
        <div className='flex justify-center items-center h-96 mt-24'>

            <div className='w-1/3  bg-gradient-to-b from-rose-200 py-10 px-8 '>
                <h1 className='text-center font-serif text-3xl font-bold text-sky-400'>Create New Account</h1>

                <form onSubmit={handleSubmit(handleRegister)}>

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







                    <input type="submit" value="Login" className='text-white    bg-gradient-to-r from-indigo-500 via-yellow-700 to-pink-500               w-full py-2 mt-6 font-medium text-lg' />
                    <h1 className='font-serif'> Already have an account?  <span> <Link to="/login">Login</Link> </span>  </h1>
                </form>

                <input type="submit" value="Google" className='text-white bg-green-400 w-full py-2 mt-6 font-medium text-lg' />
          
            </div>



        </div>
    );
};

export default Register;