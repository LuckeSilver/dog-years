import React from "react";
import Lottie from "react-lottie";

import "./styles.css";

import dog from "../../assets/dog.json";

export default function Animation() {
  const defaultOptions = {
    title: "about",
    loop: true,
    autoplay: true,
    animationData: dog,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animationContainer">
      <Lottie options={defaultOptions} />
    </div>
  );
}
