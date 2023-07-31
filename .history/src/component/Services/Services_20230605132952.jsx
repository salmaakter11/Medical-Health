// import React from 'react';
import img from '../../img/img2.jpg'

const Services = () => {
    return (
        <div className="hover:h-full py-40">
<h1 className=" my-10 text-center font-bold text-50 decoration-double text-4xl">Services</h1>
<div id="Service" className='flex flex-wrap justify-around'>
            <div className="card w-96 bg-base-100 shadow-xl bg-base-200 my-10 ">
  <div className="card-body flex-initial 15rem ">
    <h2 className="card-title">1</h2>
    <p>My professional life has been about public service. My personal life I define very intently throught my family . </p>
  </div>
  <figure className="w-16 md:w-32 lg:w-48"><img src={img} alt="Shoes" /></figure>
</div>

<div className="card w-96 bg-base-100 shadow-xl bg-base-200 my-10  ">
  <div className="card-body ">
    <h2 className="card-title">2</h2>
    <p>My professional life has been about public service. My personal life I define very intently throught my family . </p>
  </div>
  <figure><img src={img} alt="Shoes" /></figure>
</div>

<div className="card w-96 bg-base-100 shadow-xl bg-base-200 my-10">
  <div className="card-body">
    <h2 className="card-title">3</h2>
    <p>My professional life has been about public service. My personal life I define very intently throught my family . </p>
  </div>
  <figure><img src={img} alt="Shoes" /></figure>
</div>
        </div>
        </div>

        
        
    );
};

export default Services;