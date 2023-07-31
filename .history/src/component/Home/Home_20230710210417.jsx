import Slide1 from '../../img/slide1.jpg'
import React from 'react';


const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgODRXuzbibZwlBNiDAATImmjZTqjyRGKVV4r0FHs-FynamFduvicrDYQFS3QOyGSWPk&usqp=CAU)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Home;