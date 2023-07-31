import React from 'react';

const Service = () => {
    return (
        <div id="Service">
            <div className=' py-40'>
                <h1 className=' text-center text-neutral font-bold text-5xl  '>Select your preferred package</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                    {/* ======web development services ===== */}
                    <div className="card lg:w-96 hover:shadow-lg hover:shadow-red-500/50 p-0 bg-base-200  rounded-md hover:scale-110 duration-500">
                        <div className="card-body  ">
                            {/* heading  */}
                            <div className='flex justify-between'>
                                <h2 className="  font-bold text-3xl text-center text-neutral ">Web Development Services</h2>
                                <div className="badge font-bold bg-black border-0 text-white">US100$</div>
                            </div>
                            
                            <ul className="list-disc px-12">
                              <li  >eCommerce</li>
                              <li >Custom Web Development</li>
                              <li >Portal Development</li>
                              <li >Application Development</li>
                              <li >WordPress Development</li>
                              
                                </ul>


                            <div className="card-actions justify-end py-10">
                            <button className="btn bg-black text-white">Buy Now</button>
                             </div>
                        </div>
                    </div>

                    {/* ====standard ===== */}

                    <div className="card lg:w-96 hover:shadow-lg hover:shadow-red-500/50 p-0 bg-base-200  rounded-md hover:scale-110 duration-500">
                        <div className="card-body  ">
                            {/* heading  */}
                            <div className='flex justify-between'>
                                <h2 className="  font-bold text-3xl text-center text-neutral py-3 ">Mobile App Development Services</h2>
                                <div className="badge font-bold bg-black border-0 text-white">US130$</div>
                            </div>
                            
                            <ul className="list-disc px-12">
                              <li> iOS App Development</li>
                              <li >Android app Development</li>
                              <li >Windows phone Development</li>
                              <li >Mobile UI/UX Design</li>
                              <li >Mobile App Testing</li>
                              
                                </ul>


                            <div className="card-actions justify-end py-10">
                            <button className="btn bg-black text-white">Buy Now</button>
                             </div>
                        </div>
                    </div>


                    {/*==== Responsive Website ======= */}

                    <div className="card lg:w-96 hover:shadow-lg hover:shadow-red-500/50 p-0 bg-base-200  rounded-md hover:scale-110 duration-500">
                        <div className="card-body  ">
                           
                            <div className='flex justify-between'>
                                <h2 className="  font-bold text-3xl text-center text-neutral py-4 ">Responsive Website Services</h2>
                                <div className="badge font-bold bg-black border-0 text-white">US120$</div>
                            </div>
                            
                            <ul className="list-disc px-12">
                              <li  >Responsive Web Design</li>
                              <li >Static Website</li>
                              <li >PSD to WordPress</li>
                              <li >Dynamic Website Design</li>
                              <li >Landing page Design</li>
                              
                                </ul>


                            <div className="card-actions justify-end py-10">
                            <button className="btn bg-black text-white">Buy Now</button>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;