import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" bg-base-200  py-30 my-30 h-screen ">
            <h1 className="font-bold text-center  text-4xl ">Team-Members</h1>

            <img  className="px-40  " src={team} alt="" />


        </div>
    );
};

export default TeamMember;