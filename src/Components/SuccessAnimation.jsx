import React from 'react';
import Lottie from 'lottie-react';
// import animationData from "../assets/animation1.json";
import animationData from '../assets/animation3.json';

const SuccessAnimation = () => {
    // const defaultOptions = {
    //     loop: false,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };
  return (
    <div>
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        {/* <div><h1>Your response saved successfully</h1></div> */}
        <Lottie 
            animationData={animationData} 
            style={{ width: 300, height: 300 }} // Adjust size as needed
            loop={false} // Set to false if you want the animation to play only once
        />
    </div>
  )
}

export default SuccessAnimation