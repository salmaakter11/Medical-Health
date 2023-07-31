import React from 'react';
import html  from '../../img/html.jpg'
import css from '../../img/css.jpg'
import bootstrap from '../../img/bootstrap.jpg'
import tailwind from '../../img/tailwind.jpg'
import sass from '../../img/sass.jpg'
import sql from '../../img/sql.jpg'
import php from '../../img/php.jpg'
import wordpress from '../../img/wordpress.jpg'
import react from '../../img/react.jpg'
import node from '../../img/node.jpg'

const Experience = () => {
    return (
        <div id='Skill' className=" hover:h-full  h-screen pl-20  bg-pink-50 max-w rounded-lg shadow-2xl ">
            <h1 className="font-bold text-center  px-4 my-10 text-4xl ">Skills</h1>
            {/* <div>
            <p className="px-4 text-2xl"> I work at Web development. I am very interested in web development site. I have done some web projects for the great knowledge of the following language I have learnt very well:
           </p>
            </div> */}

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-20 my-20'>
                  <div>
                    <h1></h1>
                    <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={html} alt="" />
                  </div>
                  <div>
                    <h1></h1>
                  <img className='h-20 hover:shadow-lg hover:shadow-yellow-800 z-0' src={css} alt="" />
                  </div>
                  <div>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={sass} alt="" />
                  </div>

                  <div>
                    <h1></h1>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={bootstrap} alt="" />
                  </div>

                  <div>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={tailwind} alt="" />
                  </div>
                  

                  <div>
                  <img className='h-20 w-15 hover:shadow-lg hover:shadow-yellow-800 z-0' src={sql} alt="" />
                  </div>

                  <div>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={php} alt="" />
                  </div>

                  <div>
                    <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={wordpress} alt="" />
                    </div>

                  <div>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={react} alt="" />
                  </div>

                  <div>
                    <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={node} alt="" />
                  </div>
           </div>
            

        </div>
    );
};

export default Experience;