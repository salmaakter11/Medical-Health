import React from 'react';
import team from '../../img/img4.jpg'

const TeamMember = () => {
    return (
        <div id='Team' className="my-72 bg-pink-50 max-w rounded-lg shadow-2xl hover:h-full  h-screen">
            <h1 className="font-bold text-center text-4xl ">Team-Members</h1>

            <img  className=" rounded-lg pl-20  my-20" src={team} alt="" />


        </div>
    );
};

export default TeamMember;
// max-w rounded-lg shadow-2xl  h-screen bg-pink-50 my-40