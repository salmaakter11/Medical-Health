import React from 'react';
import salmaimg from '../../img/img1.jpg'

const Experience = () => {
    return (
        <div id='Skill' className="bg-base-200 hover:h-full py-30 h-screen pl-20 pr-25 ">
            <h1 className="font-bold text-center  px-4 my-10 text-4xl ">Skills</h1>
            <div>
            <p className="px-4 text-2xl"> I work at Web development. I am very interested in web development site. I have done some web projects for the great knowledge of the following language I have learnt very well:
           </p>
            </div>

            <div class="grid grid-cols-4 gap-4 pl-10">
                  <div>
                    <img src={salmaimg} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                    <img src={} alt="" />
                    </div>

                  <div>
                  <img src={} alt="" />
                  </div>

                  <div>
                  <img src={} alt="" />
                  </div>
           </div>
            

        </div>
    );
};

export default Experience;