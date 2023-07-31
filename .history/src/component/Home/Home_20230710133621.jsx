import React from 'react';
import Slide1 from '../../img/slide1.jpg'

const Home = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit recusandae eaque voluptate accusantium, illo repudiandae vitae odit ea quibusdam ratione earum doloribus corporis possimus pariatur cum, explicabo quos rerum nesciunt sed iste quidem perferendis. Vero sapiente recusandae nemo rerum quisquam laborum quas dicta laudantium maiores! Iusto quas quam facere atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus recusandae ducimus repellat, nulla, maxime quisquam reiciendis porro doloremque consequatur, est similique ab incidunt delectus tenetur quos? Unde culpa perferendis sunt qui, sit quaerat obcaecati inventore placeat magnam vel nisi minus eveniet, distinctio quas, cum a tempore ipsum modi et?
      </h1>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a src={slide1} href="#slide1" className="btn btn-circle"></a> 
      <a href="#slide2" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle"></a> 
      <a href="#slide3" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle"></a> 
      <a href="#slide4" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle"></a> 
      <a href="#slide1" className="btn btn-circle"></a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;