// import React from "react";

import Text from '../component/text';
import './about.css';

function Info() {
  return (
    <>
      <div className="bg-black  text-white ">
        {/* <div className='mt-8 font-semibold text-3xl mb-40' style={{border:'solid 1px green',width:'80%'}}> */}
        <div className="about-text" style={{ fontFamily: 'fantasy' }}>
          <p>{Text.about}</p>
          <p>{Text.about_1}</p>
          <p className="mt-6">{Text.about_first}</p>
          <p className="mt-5 ">{Text.click}</p>
          {/* <p>{Text.about_first_1}</p>
    <p>{Text.about_first_2}</p>
    <p>{Text.about_second}</p>
    <p>{Text.about_second_1}</p>
    <p>{Text.about_third}</p>
<p>{Text.about_skills}</p> */}
        </div>
      </div>
    </>
  );
}

export default Info;
