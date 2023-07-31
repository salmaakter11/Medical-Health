import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className=" ">
            <h1 className="font-bold text-center text-4xl my-32  ">Team-Members</h1>

            <img  className=" max-w rounded-lg pl-10 my-20" src={team} alt="" />


        </div>
    );
};

export default TeamMember;