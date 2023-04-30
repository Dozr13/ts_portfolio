import { useEffect, useState } from "react";
import React from "react";

import { CogWheelItem } from "./CogWheel.styles";
import { CogWheelProps } from "../../../types/types";

const CogWheel = ({
  radius,
  speed,
  direction,
  scrollPosition,
}: CogWheelProps) => {
  const [rotation, setRotation] = useState<number>(0);

  const animate = () => {
    const newRotation = (scrollPosition / speed) % 360;
    setRotation(direction === "forward" ? newRotation : -newRotation);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, [scrollPosition, speed, direction]);

  return <CogWheelItem radius={radius} rotation={rotation} />;
};

export default CogWheel;
