// import { Modal } from 'antd'
import './content.css';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
// import Typewriter from 'typewriter-effect'

// import Words from 'react-words';

function Content() {
  const [showFront, setShowFront] = useState(false);
  const [showParietal, setShowParietal] = useState(false);
  const [showTemporal, setShowTemporal] = useState(false);
  const [showOccipital, setShowOccipital] = useState(false);

  return (
    <>
      <div id="content" className=" text-white  bg-black mt-48">
        {/* height:1200px width:100% */}
        <p className="text-white text-4xl ">About</p>
        <p className="text-2xl  mt-10">
          Click Brain,Try it.{' '}
          <lord-icon
            src="https://cdn.lordicon.com/gyynjgtu.json"
            trigger="hover"
            colors="primary:#eee966,secondary:#eeaa66"
            style={{ width: '40px', height: '40px', marginBottom: '-10px' }}
          />
        </p>

        <div
          className="image-container"
          style={{
            position: 'relative',
            height: '900px',
            backgroundColor: 'black',
          }}
        >
          <img
            src="image/front.png"
            className="image front hover:scale-110 transition duration-600"
            onClick={() => setShowFront(true)}
          />
          {showFront ? (
            <>
              <div className="front-brain">
                <p>
                  <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                    sequence={[
                      //   "I specialize in developing both B2B and B2C products, with experience in frontend interface development for educational systems and research center data computing. I excel in utilizing technologies such as react.js, Next.js, and Vite for development purposes. I believe that with my extensive experience and strong prefrontal cortex function(haha), I can effectively address the challenges and problems you may encounter",
                      // With my experience and strong problem-solving skills, I can effectively address the challenges and problems you may encounter.",
                      'I specialize in developing B2B and B2C products, ex. educational systems,research center data computing and else. Using react.js, Next.js, and Vite. ',
                      3000,
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 90 }}
                    omitDeletionAnimation={true}
                    style={{
                      display: 'block',
                      minHeight: '200px',
                      color: '	#FF8F59',
                      fontWeight: '500',
                    }}
                  />
                </p>
              </div>
            </>
          ) : null}

          <img
            src="image/temporal.png"
            className="image temporal hover:scale-110 transition duration-600"
            onClick={() => setShowTemporal(true)}
          />
          {showTemporal ? (
            <>
              <div className="temporal-brain">
                <p>
                  <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                    sequence={[
                      // "I'm skilled in effective communication and problem-solving, always improving my knowledge of frontend technologies. With experience in designing system page flows and developing features, I'm adept at organizing requirements and functionalities. Moreover, my background in psychology makes me open to collaborations in diverse domains.",
                      // "I excel in communication and problem-solving, continuously enhancing my expertise in frontend technologies. Experienced in designing page flows and developing features, I efficiently manage requirements and functionalities. My psychology background fosters collaboration across various domains.",
                      'Efficient communication and problem-solving.constantly improving my technical abilities.  My psychology background enriches my understanding of human-computer interaction and UX design concepts.',
                      3000,
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 90 }}
                    omitDeletionAnimation={true}
                    style={{
                      display: 'block',
                      minHeight: '200px',
                      color: '#84C1FF',
                      fontWeight: '500',
                    }}
                  />
                </p>
              </div>
            </>
          ) : null}

          <img
            src="image/parietal.png"
            className="image parietal hover:scale-110 transition duration-600"
            onClick={() => setShowParietal(true)}
          />
          {showParietal ? (
            <>
              <div className="parietial-brain">
                <p>
                  <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                    sequence={[
                      // "Just as the parietal lobe oversees spatial information and visual processing, I specialize in designing smooth web flows and user-friendly interfaces. I work closely with clients to understand their needs, brainstorm ideas, and transform their vision into designs, building products from concept to completion. I'm passionate about leveraging these skills to help my clients unleash their full potential.",
                      // "Similar to the parietal lobe's role in spatial information and visual processing, I focus on crafting smooth web flows and user-friendly interfaces. By collaborating closely with clients, I translate their needs into designs, bringing their vision to life from concept to finished product. I'm driven by the passion to utilize these skills to empower my clients to reach their full potential.",
                      'I focus on crafting smooth web flows and user-friendly interfaces. By collaborating closely with clients, I translate their needs into designs, bringing their vision to life from concept to finished product.',
                      3000,
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 90 }}
                    omitDeletionAnimation={true}
                    style={{
                      display: 'block',
                      minHeight: '200px',
                      color: '	#FFFFAA',
                      fontWeight: '500',
                    }}
                  />
                </p>
              </div>
            </>
          ) : null}
          <img
            src="image/occipital.png"
            className="image occipital hover:scale-110 transition duration-600"
            onClick={() => setShowOccipital(true)}
          />
          {showOccipital ? (
            <>
              <div className="occipital-brain">
                <p>
                  <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                    sequence={[
                      // "Just as the parietal lobe oversees spatial information and visual processing, I specialize in designing smooth web flows and user-friendly interfaces. I work closely with clients to understand their needs, brainstorm ideas, and transform their vision into designs, building products from concept to completion. I'm passionate about leveraging these skills to help my clients unleash their full potential.",
                      // "Similar to the parietal lobe's role in spatial information and visual processing, I focus on crafting smooth web flows and user-friendly interfaces. By collaborating closely with clients, I translate their needs into designs, bringing their vision to life from concept to finished product. I'm driven by the passion to utilize these skills to empower my clients to reach their full potential.",
                      ' So,if you need frontend development, interface design, web consultation, or collaboration in the field of psychology, contact me!',
                      3000,
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 90 }}
                    omitDeletionAnimation={true}
                    style={{
                      display: 'block',
                      minHeight: '200px',
                      color: '	#53FF53',
                      fontWeight: '500',
                    }}
                  />
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Content;

{
  /* <div className=" text-white mt-20 bg-black  " >
<h1 className="text-center">Projects</h1>
<div style={{height:'1200px',position:'relative',width:'80%',marginLeft:'100px',backgroundColor:'black',border:'solid 1px green'}}>

<img src='public/image/front.png' style={{position:'absolute',top:'20%',left:'26%',width:'30%'}} className="hover:scale-110 transition duration-600"/>
{/* <img src='public/image/front.png' className="absolute top-20 left-20 w-72" /> */
}

//   <img src='public/image/temporal.png' style={{position:'absolute',top:'65vh',left:'36%',width:'39%'}} className="hover:scale-110 transition duration-600 "/>

//   <img src='public/image/parietal.png' style={{position:'absolute',top:'19%',left:'51%',width:'28%'}} className="hover:scale-110 transition duration-600"/>

//   <img src='public/image/occipital.png' style={{position:'absolute',top:'425px',left:'73.5%',width:'5.5%'}} className="hover:scale-110 transition duration-600"/>

// </div>
// </div>

{
  /* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("I specialize in developing both B2B and B2C products, with experience in frontend interface development for educational systems and research center data computing. I excel in utilizing technologies such as react.js, Next.js, and Vite for development purposes. I believe that with my extensive experience and strong prefrontal cortex function, I can effectively address the challenges and problems you may encounter.")
                        .pauseFor(3000)
                        
                        
                        .start();
                }}
                options={{
                    typeSpeed: 10000, // 设置打字速度，单位为毫秒
                    
                    cursorSpeed: 1000, // 设置光标闪烁速度，单位为毫秒
                  }}
            /> */
}
