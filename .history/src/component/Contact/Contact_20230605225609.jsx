import React from 'react';

const Contact = () => {
    return (
        <div className="bg-base-200 py-40">
          <h1 className="text-center font-bold text-4xl my-10">Contact me</h1>
            <div id="Contact" className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className='font-bold'>Leave a message</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>


         {/* id="Contact" className="text-center bg-base-200 h-screen py-40"
            <h1 className="text-center font-bold text-4xl py-10 ">Contact</h1>
            <h2 className="font-bold"> Name:salma Akter</h2>
            <h2 className="font-bold">Email:Salmajahanerin@gmail.com</h2>
            <h2 className="font-bold">Phone:01611850171</h2> */}


            

        </div>
    );
};

export default Contact;