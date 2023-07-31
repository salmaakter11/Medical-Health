import React from 'react';

const Contact = () => {
    return (
        <div id='Contact'>
             <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Contact</h1>

             <div className='bg-sky-200 px-32'> 
             <h1 className='font-bold text-5xl py-20'>Address</h1>
             <h3>7895 Piermont Dr NE Albuquerque, <br /> NM 198866, See Our Stores</h3>
             <h1 className='font-bold text-5xl py-20'>Get In Touch</h1>
             <h3>Phone Number : +012 (345) 6789
               Email Address : support@gmail.com
               Hotline : 12345678</h3>
               <h1 className='font-bold text-5xl py-20'>Follow Us</h1>
               <h3>Sit amet consectetur adipiscing elit sed do <br /> eiusmod tempor incididunt ut labore</h3>

               <div className="flex gap-4 mt-5 ">
                            <a target="blank" href="  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="fill-current"
                                    viewBox="0 0 496 512"
                                >
                                    
                                </svg>
                            </a>
                            <a target="blank" href="https://www.linkedin.com/in/salma-akter-263447222">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 450 450"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    </div>
                                </svg>
                            </a>
                            <a target="blank" href="https://www.facebook.com/Salma.com.37">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
             </div>
        </div>
    );
};

export default Contact;