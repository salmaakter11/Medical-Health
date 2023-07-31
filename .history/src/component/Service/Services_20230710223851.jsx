import Dental from '../../img/Dental.jpg'
import heart from '../../img/heart.jpg'
import Dental from '../../img/Dental.jpg'
import Dental from '../../img/Dental.jpg'
import Dental from '../../img/Dental.jpg'
import Dental from '../../img/Dental.jpg'
import Dental from '../../img/Dental.jpg'
import Dental from '../../img/Dental.jpg'

import React from 'react';

const Services = () => {
    return (
        <div id='Service'>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>
            {/* Heart Caring */}
            <div className="card w-96 bg-base-100 shadow-xl card lg:w-96 hover:shadow- p-0 bg-base-200  rounded-md hover:scale-90 duration-500">
  <figure className="px-10 pt-10">
    <img src={heart} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Click</button>
    </div>
  </div>
</div>

{/* Dental Caring */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Dental} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dental Caring </h2>
    <p>Dental careers allow you to transform the lives of..
..</p>
    <div className="card-actions">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>

{/* Eye Caring */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* Orthopedics */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

{/* Covid 19 */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

{/* Pulmonary */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* sergert */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* Nephrology */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* Skin */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Heart Caring</h2>
    <p>Our mission is to provide ethical and high-quality..</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default Services;