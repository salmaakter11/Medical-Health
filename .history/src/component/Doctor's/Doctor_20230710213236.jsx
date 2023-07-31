
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
      <h1 className="text-5xl font-bold">Box Office News!</h1>
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