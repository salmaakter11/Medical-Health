import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" bg-base-200  py-30 pt-80 h-screen sm:text-left ">
            <h1 className="font-bold text-center text-4xl ">Team-Members</h1>

            <img  className="px-40  " src={team} alt="" />


        </div>
    );
};

export default TeamMember;