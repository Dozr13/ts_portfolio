import React, { useEffect, useState } from "react";

import CogWheel from "./CogWheel";
import { StyledCogWheelsContainer } from "./CogWheel.styles";
import { CogWheelContainerProps } from "../../../types/types";

const CogWheelContainer = ({
  cogCount,
  speed,
}: CogWheelContainerProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cogWheels = [];

  for (let i = 0; i < cogCount; i++) {
    const direction = i % 2 === 0 ? "forward" : "reverse";
    const radius = i % 2 === 0 ? 20 : 30;
    cogWheels.push(
      <CogWheel
        key={i}
        radius={radius}
        speed={speed}
        direction={direction}
        scrollPosition={scrollPosition}
      />
    );
  }

  return (
    <StyledCogWheelsContainer cogCount={cogCount}>
      {cogWheels}
    </StyledCogWheelsContainer>
  );
};

export default CogWheelContainer;
