import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Color } from "../../constants";
import { TextRevealCard } from "../ui/text-reveal-card";
import HaloVisualizer from "../aiAssistant/HaloVisualizer";
import { useDecibelDetector } from "../../hooks/useDecibelDetector";

function Header() {
  const { decibelLevel, startDetection } = useDecibelDetector();
  const location = useLocation();

  useEffect(() => {
    startDetection();
  }, []);

  const isHome = location.pathname === "/";

  return (
    <div
      style={{
        height: "8%",
        minHeight: 90,
        backgroundColor: Color.darkerColor,
        zIndex: 999,
      }}
      className="w-full py-4 flex relative flex-row justify-center items-center"
    >
      <div>
        <TextRevealCard
          text="Test. Tweak. Repeat."
          revealText="Master Your Machine"
          textSize={40}
        />
      </div>

      <div
        className={`absolute transition-all duration-800 `}
        style={
          isHome
            ? {
                left: "50%",
                top: "120%",
                transform: "translate(-50%)",
              }
            : {
                left: "93%",
                top: "50%",
                transform: "translateY(-50%)",
              }
        }
      >
        <HaloVisualizer scaleRange={[0.8, 2]} decibel={decibelLevel} />
      </div>
    </div>
  );
}

export default Header;
