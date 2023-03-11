import React, { useContext, useReducer, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Contex } from '../../../Context/AuthProvider';
import logo from '../../../images/hangry3.png'
import { GiShoppingCart } from "react-icons/gi";
import FetchCart from '../FetchCart/FetchCart';

const Navber = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [navbar, setNavbar] = useState(false);
    const { userSingOut, user, notifiaction, setNotifiaction } = useContext(Contex)
    console.log(notifiaction)
    let notify = 0

    const data = FetchCart()





    const handleSingOut = () => {
        userSingOut()
            .then(res => {
                console.log(res)
                toast.success("Success SingOut...!")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Sorry, Filed SingOut...!")
            })
    }





    return (
        <div className='sticky top-0 z-30'>

            <div>
                {
                    data.map((crt) => {

                        notify = Math.floor(notify) + Math.floor(crt.quantity)

                        setNotifiaction(notify)

                       
                    })
                }
            </div>


            <nav className="w-full bg-white shadow sticky top-0 z-30 ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className='w-36 h-12' href="javascript:void(0)">
                                <img className='w-full h-full' src={logo} alt="" />
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-600 font-bold hover:text-rose-500">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-gray-600 font-bold hover:text-rose-500">
                                    <Link to="/foods">Foods</Link>
                                </li>
                                {/* <li className="text-gray-600 font-bold hover:text-rose-500">
                                <Link className='flex  indicator' to="/cart">
                                    Cart
                                    <span className="indicator-item badge badge-secondary">99+</span>
                                    <GiShoppingCart className='text-2xl font-bold '></GiShoppingCart>
                                </Link>
                            </li> */}

                                <li className="text-gray-600 font-bold hover:text-rose-500">
                                    <Link className='flex justify-center items-center  indicator' to="/cart">
                                        Cart
                                        <div class="relative inline-flex items-center p-1 text-center    ">
                                            <GiShoppingCart className='text-2xl font-extrabold '></GiShoppingCart>

                                            <span class="sr-only">Notifications</span>
                                            <div class="absolute inline-flex items-center hover:bg-black hover:opacity-60 text-white duration-500 justify-center w-6 h-6 text-xs font-bold  bg-rose-400 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{notifiaction}</div>
                                        </div>
                                    </Link>
                                </li>




                                <li className="text-gray-600 font-bold hover:text-rose-500">
                                    <Link to="/wishlists"> Wishlist </Link>
                                </li>



                                {
                                    user?.email ? <li className="text-gray-600 font-bold hover:text-rose-500">
                                        <Link to="/" onClick={handleSingOut} >SingOut</Link>
                                    </li> : <li className="text-gray-600 font-bold hover:text-rose-500">
                                        <Link to="/login">Login</Link>
                                    </li>
                                }








                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;