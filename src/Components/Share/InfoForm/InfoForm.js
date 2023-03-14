import React from 'react';
import Button from '../Button/Button';

const InfoForm = ({text}) => {
    return (
        <form>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text text-lg font-sans">Contact information</span></label>
                            <input type="text" placeholder="Email or mobile phone number" className="input input-bordered w-full" />
                        </div>





                        <div className="form-control w-full mt-10 ">
                            <label className="label"><span className="label-text text-lg font-sans">Shipping address</span></label>
                            <input type="text" placeholder="Country" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full flex flex-row mt-3 ">
                            <input type="text" placeholder="Frist name" className="input input-bordered w-1/2 mb-3 md:mt-0  mr-2" />
                            <input type="text" placeholder="Last name" className="input input-bordered w-1/2" />
                        </div>

                        <div className="form-control w-full mt-3 ">
                            <input type="text" placeholder="Address" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full mt-3 ">
                            <input type="text" placeholder="Apartment, suite, etc(optional)" className="input input-bordered w-full" />
                        </div>


                        <div className="form-control w-full flex flex-row mt-3 ">
                            <input type="text" placeholder="City" className="input input-bordered w-1/2 mb-3 md:mt-0 mr-2" />
                            <input type="text" placeholder="Postal Code" className="input input-bordered w-1/2" />
                        </div>
                        <div className='text-center md:text-start'>
                        <input type="Submit" value="Purchase" className='font-bold rounded text-center px-8 py-3 mt-10 text-white px-2 bg-gradient-to-r from-rose-500 to-orange-500 ' />

                        </div>

                    </form>
    );
};

export default InfoForm;