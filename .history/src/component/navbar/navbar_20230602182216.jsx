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
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#About" >About Me</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact" >Contact</a></li>
        <li><a href="#Resume">Resume</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">SALMA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="#About" >About Me</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact" >Contact</a></li>
        <li><a href="#Resume">Resume</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default navbar;