import React from 'react';

const Button = ({text}) => {
    return (
        <div className='p-1 font-bold rounded text-center  text-white px-2 bg-gradient-to-r from-rose-500 to-orange-400 hover:bg-orange-400'>
            <button>{text}</button>
        </div>
    );
};

export default Button;