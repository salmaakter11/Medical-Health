import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" bg-black  pt-24 h-screen sm:text-left ">
            <h1 className="font-bold text-center text-4xl pt-80  ">Team-Members</h1>

            <img  className="pl-20 my-10" src={team} alt="" />


        </div>
    );
};

export default TeamMember;