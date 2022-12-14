import React from 'react'
import { useState } from 'react'


export default function ItemCount({ stock, initial }) {
    const [value, setValue] = useState(initial);

    function onAdd() {
        (stock) > value ? setValue(value + 1) : setValue(value + 0);
    }

    function onSubstract() {
        value !== 0 ? setValue(value - 1) : setValue(value + 0);
    }
    
    return (
        <div>
            <h1 className='text-black font-bold mt-2'>Stock Actual: {stock}</h1>
            <div className='flex justify-center my-4'>
                <button className="fill-gray-200 h-7 w-7 p-1 hover:bg-slate-300 rounded-full mx-3" onClick={onSubstract}>-</button>
                <h1 className='text-gray font-bold mx-5 text-xl'>{value}</h1>
                <button className="fill-gray  h-7 w-7 hover:bg-slate-300  rounded-full  mx-3" onClick={onAdd}>+</button>
            </div>

        </div>
    );

}