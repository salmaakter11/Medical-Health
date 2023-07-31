import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className="  pt-40 h-screen sm:text-left ">
            <h1 className="font-bold text-center text-4xl pt-40  ">Team-Members</h1>

            <img  className="pl-40 my-10" src={team} alt="" />


        </div>
    );
};

export default TeamMember;