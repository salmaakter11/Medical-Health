import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" py-30 pt-70 h-screen sm:text-left ">
            <h1 className="font-bold text-center text-4xl pt-80  ">Team-Members</h1>

            <img  className="pl-10" src={team} alt="" />


        </div>
    );
};

export default TeamMember;