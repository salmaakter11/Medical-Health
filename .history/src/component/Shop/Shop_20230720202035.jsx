import shop from '../../img/shop.jpg'
import shop2 from '../../img/shop2.jpg'
import shop3 from '../../img/shop3.jpg'
import shop4 from '../../img/shop4.jpg'
import shop5 from '../../img/shop5.jpg'
import React from 'react';


const Shop = () => {
    return (
        <div id=''>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Medecine shop</h1>
            {/* <div className='h-screen  '>
            <img src={shop} alt="" />
            </div> */}
            <div className="carousel carousel-end rounded-box">
  <div className="carousel-item h-64 px-6">
    <img src={shop} alt="Drink" />
  </div> 
  <div className="carousel-item h-64 px-6">
    <img src={shop2} alt="Drink" />
  </div> 
  <div className="carousel-item h-64 px-6">
    <img src={shop3} alt="Drink" />
  </div> 
  <div className="carousel-item h-64 px-6">
    <img src={shop4} alt="Drink" />
  </div> 
  <div className="carousel-item h-64 px-6">
    <img src={shop5} alt="Drink" />
  </div> 
</div>
            <div>

            </div>

        </div>
    );
};

export default Shop;