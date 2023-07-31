import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" bg-black  my-44 h-screen  ">
            <h1 className="font-bold text-center text-4xl   ">Team-Members</h1>

            <img  className="pl-20 my-40" src={team} alt="" />


        </div>
    );
};

export default TeamMember;