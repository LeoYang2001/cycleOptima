// src/components/HaloVisualizer.tsx
import React, { useState } from "react";
import "./HaloVisualizer.css";

type Props = {
  decibel: number | null;
  ifSession?: boolean;
  scaleRange?: [number, number]; // New prop: min and max scale bounds
};

const HaloVisualizer: React.FC<Props> = ({
  decibel,
  scaleRange = [0.8, 2.0],
}) => {
  const [haloState, setHaloState] = useState("");

  const [minScale, maxScale] = scaleRange;
  let scale = 1;

  if (decibel !== null) {
    // Clamp normalized scale between 0 and 1
    const normalized = Math.min(Math.max(decibel / 50, 0), 1);
    scale = minScale + (maxScale - minScale) * normalized;
  }

  return (
    <div className="halo-wrapper">
      <div
        className={`halo-circle ${haloState}`}
        style={{
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};

export default HaloVisualizer;
