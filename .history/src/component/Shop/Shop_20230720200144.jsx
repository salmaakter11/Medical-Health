import shop from '../../img/shop.jpg'
import React from 'react';


const Shop = () => {
    return (
        <div id=''>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Medecine shop</h1>
            {/* <div className='h-screen  '>
            <img src={shop} alt="" />
            </div> */}
            <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src={shop} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
</div>
            <div>

            </div>

        </div>
    );
};

export default Shop;