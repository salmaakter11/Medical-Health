import doc1 from "../../img/doc1.jpg"
import React from 'react';

const Doctor = () => {
    return (
        <div>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Doctor Deteils</h1>
            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doc1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Michael I. Johnson</h1>
      <h4 className="text-5xl font-bold"></h4>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Doctor;