import React from 'react';

const Experience = () => {
    return (
        <div id='Experience' className="bg-base-200 hover:h-full py-30 h-screen  ">
            <div>
            <h1 className="font-bold text-center  px-4 my-10 text-4xl ">Skills and Experience</h1>
            <p className="px-4 text-2xl px-30"> I work at Web development. I am very interested in web development site. I have done some web projects for the great knowledge of the following language I have learnt very well:
           </p>

            </div>
            

<h1 input type="range" min={0} max="10" value="90" className="range range-xs py-10 " > HTML</h1> <br />
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
        </div>
    );
};

export default Experience;