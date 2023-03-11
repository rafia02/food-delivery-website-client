import React from 'react';

const Button = ({text}) => {
    return (
        <div className='p-1 py-2 font-bold rounded text-center text-lg text-white px-2 bg-gradient-to-r from-rose-500 to-orange-400 '>
            <button>{text}</button>
        </div>
    );
};

export default Button;