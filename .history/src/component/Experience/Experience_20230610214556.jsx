import React from 'react';

const Experience = () => {
    return (
        <div id='Experience' className="bg-base-200 hover:h-full py-30 h-screen ">
            <div>
            <h1 className="font-bold text-center  px-4 my-10 text-4xl ">Skills and Experience</h1>
            <p className="px-4 text-2xl"> I work at Web development. I am very interested in web development site. I have done some web projects for the great knowledge of the following language I have learnt very well:
           </p>

            </div>
            {/* className=" box-border h-15 w-40 p-4 border-4 bg-inherit" */}

<h2 className="font-bold break-normal my-5 px-4 text-2xl">My Skills</h2>
<ul className="list-disc px-12">
  <li  >Html</li>
  <li >CSS</li>
  <li >Bootstrap</li>
  <li >PHP</li>
  <li >JavaScript</li>
  <li >SQL, MySQL</li>
  <li >WordPress management</li>
  <li >Reactjs</li>
  <li >Nodejs(learning)</li>

  
</ul>

<h1 input type="range" min={0} max="400" value="90" className="range range-xs py-10 " > HTML</h1> <br />
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
<input type="range" min={0} max="100" value="90" className="range range-xs" /> 
        </div>
    );
};

export default Experience;