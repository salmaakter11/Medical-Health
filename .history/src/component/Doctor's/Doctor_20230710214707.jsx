import doc1 from "../../img/doc1.jpg"
import React from 'react';

const Doctor = () => {
    return (
        <div>
            <h1 className=' text-center text-neutral font-bold text-5xl py-20 '>Doctor Deteils</h1>
            <div>
                {/* Doctor1 */}
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doc1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Michael I. Johnson</h1>
      <h6 className="text-5xl ">Neuro medicine </h6>
      <p className="py-6">Michael I. Johnson is a fellow of RACGP, with more than 15 years of working experience. She completed her postgraduate qualifications in Women’s health, Children’s health, Dermatology and Psychology.
Dr Johnson practices all areas of family medicine, especially family planning and pregnancy care. Dr Johnson is an accredited shared antenatal care provider for the Mercy Hospital, Box Hill Hospital, Monash Medical Centre and Royal Women’s Hospital. She is an Victorian IUD Provider – being able to do IUD insertion and removal, also doing implanon insertion and removal, and medical termination of pregnancy (Registered with 1800 My Options-1801 692 000).
Dr Johnson actively involves in the health promotion for the local community. She is in the GP Liaison Group for the Monash Children’s Hospital, and a committee member of the Canada Chinese Doctor Association (ACDA).</p>
      <button className="btn btn-primary">Appointment Now+</button>
    </div>
  </div>
</div>

{/* Doctor2 */}
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doc1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Professor Dr. Md. Ayub Ali Chowdhury</h1>
      <h4 className="text-5xl font-bold">Cardiology</h4>
      <p className="py-6">Michael I. Johnson is a fellow of RACGP, with more than 15 years of working experience. She completed her postgraduate qualifications in Women’s health, Children’s health, Dermatology and Psychology.
Dr Johnson practices all areas of family medicine, especially family planning and pregnancy care. Dr Johnson is an accredited shared antenatal care provider for the Mercy Hospital, Box Hill Hospital, Monash Medical Centre and Royal Women’s Hospital. She is an Victorian IUD Provider – being able to do IUD insertion and removal, also doing implanon insertion and removal, and medical termination of pregnancy (Registered with 1800 My Options-1801 692 000).
Dr Johnson actively involves in the health promotion for the local community. She is in the GP Liaison Group for the Monash Children’s Hospital, and a committee member of the Canada Chinese Doctor Association (ACDA).</p>
      <button className="btn btn-primary">Appointment Now+</button>
    </div>
  </div>
</div>
{/* 
Doctor 3 */}

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doc1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Michael I. Johnson</h1>
      <h4 className="text-5xl font-bold"></h4>
      <p className="py-6">Michael I. Johnson is a fellow of RACGP, with more than 15 years of working experience. She completed her postgraduate qualifications in Women’s health, Children’s health, Dermatology and Psychology.
Dr Johnson practices all areas of family medicine, especially family planning and pregnancy care. Dr Johnson is an accredited shared antenatal care provider for the Mercy Hospital, Box Hill Hospital, Monash Medical Centre and Royal Women’s Hospital. She is an Victorian IUD Provider – being able to do IUD insertion and removal, also doing implanon insertion and removal, and medical termination of pregnancy (Registered with 1800 My Options-1801 692 000).
Dr Johnson actively involves in the health promotion for the local community. She is in the GP Liaison Group for the Monash Children’s Hospital, and a committee member of the Canada Chinese Doctor Association (ACDA).</p>
      <button className="btn btn-primary">Appointment Now+</button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Doctor;