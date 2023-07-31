import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
             <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Doctor Deteils</h1>

             <div className='bg-sky-200 px-32'> 
             <h1 className='font-bold text-5xl py-20'>Address</h1>
             <h3>7895 Piermont Dr NE Albuquerque, <br /> NM 198866, See Our Stores</h3>
             <h1 className='font-bold text-5xl py-20'>Get In Touch</h1>
             <h3>Phone Number : +012 (345) 6789
               Email Address : support@gmail.com
               Hotline : 12345678</h3>
               <h1 className='font-bold text-5xl py-20'>Follow Us</h1>
               <h3>Sit amet consectetur adipiscing elit sed do <br /> eiusmod tempor incididunt ut labore</h3>
             </div>
        </div>
    );
};

export default Contact;