import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className="max-w rounded-lg shadow-2xl  h-screen bg-pink-50 my-40 ">
            <h1 className="font-bold text-center text-4xl   ">Team-Members</h1>

            <img  className=" max-w rounded-lg pl-36 my-20" src={team} alt="" />


        </div>
    );
};

export default TeamMember;