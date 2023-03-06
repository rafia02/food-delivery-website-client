import React from 'react';

const Button = ({text}) => {
    return (
        <div className='p-1 font-bold rounded  text-white px-2 bg-gradient-to-r from-orange-500 to-yellow-400 hover:bg-orange-500'>
            <button>{text}</button>
        </div>
    );
};

export default Button;