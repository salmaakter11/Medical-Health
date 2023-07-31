import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Services</h1>
            <div>
            {/* Heart Caring */}
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