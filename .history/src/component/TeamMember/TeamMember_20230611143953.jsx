import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" bg-base-200 hover:h-full py-30 h-screen">
            <h1 className="font-bold text-center  px-4 my-10 text-4xl ">Skills and Experience</h1>

            <img  className="px-40" src={team} alt="" />


        </div>
    );
};

export default TeamMember;