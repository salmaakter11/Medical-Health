import shop from '../../img/shop.jpg'
import React from 'react';


const Shop = () => {
    return (
        <div id=''>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Medecine shop</h1>
            <div className='h-screen  w-80'>
            <img src={shop} alt="" />
            </div>
        </div>
    );
};

export default Shop;