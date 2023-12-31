import React from 'react';
import Lottie from "react-lottie";

import animationData from "../../../Animations/loading-chat.json";

const LoadingChatAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Lottie 
            options={defaultOptions}
            width={200}
            height={200}
        />
    )
}

export default LoadingChatAnimation;