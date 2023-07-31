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
        <div id='Skill' className=" hover:h-full h-screen  bg-pink-50 max-w rounded-lg shadow-2xl my-40">
            <h1 className="font-bold text-center text-4xl ">Skills</h1>

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pl-36'>
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
                  <img className='h-20 w-20 hover:shadow-lg hover:shadow-yellow-800 z-0' src={sql} alt="" />
                  </div>

                  <div>
                  <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={php} alt="" />
                  </div>
                  <div>
                    <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={wordpress} alt="" />
                    </div>

                  <div>
                  <img className='h-20 w-22  hover:shadow-lg hover:shadow-yellow-800 z-0' src={react} alt="" />
                  </div>

                  <div>
                    <img className='h-20  hover:shadow-lg hover:shadow-yellow-800 z-0' src={node} alt="" />
                  </div>
                 
           </div>
            

        </div>
    );
};

export default Experience;