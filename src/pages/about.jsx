// import React from "react";

import Text from "../component/text"

function About(){
    return(

        <>
       

        <div className="bg-black  text-white">
            <h1 className='font-bold'>About </h1>
            
        <div className='mt-8 font-semibold text-2xl mb-40'>
            <p>{Text.about}</p>
            <p>{Text.about_1}</p>
            <p>{Text.about_first}</p>
            {/* <p>{Text.about_first_1}</p>
            <p>{Text.about_first_2}</p>
            <p>{Text.about_second}</p>
            <p>{Text.about_second_1}</p>
            <p>{Text.about_third}</p>
            <p>{Text.about_skills}</p> */}
        </div>
        </div>
        </>
    )
}

export default About