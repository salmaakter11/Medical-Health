import React from 'react';

const navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-xl">
        <li><a href="#About" >About Me</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact" >Contact</a></li>
        <li><a href="#Resume">Resume</a></li>
      </ul>
    </div>
    <a id='salma' href='salma' className="btn btn-ghost normal-case text-xl font-bold text-xl front-bold"> SALMA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-bold">
    <li><a href="#About" >About Me</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact" >Contact</a></li>
        <li><a href="#Resume">Resume</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="https://www.facebook.com/Salma.com.37"></path></svg></a>
  </div>
</div>
        </div>
    );
};

export default navbar;