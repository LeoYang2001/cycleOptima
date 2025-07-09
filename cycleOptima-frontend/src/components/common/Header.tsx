import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Color } from "../../constants";
import { TextRevealCard } from "../ui/text-reveal-card";
import HaloVisualizer from "../aiAssistant/HaloVisualizer";
import { useDecibelDetector } from "../../hooks/useDecibelDetector";
import { small } from "motion/react-client";

function Header() {
  const { decibelLevel, startDetection } = useDecibelDetector();
  const location = useLocation();

  useEffect(() => {
    startDetection();
  }, []);

  useEffect(() => {
    console.log("Path changed:", location.pathname);
    // You can do other side effects here
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <div
      style={{
        height: "8%",
        minHeight: 90,
        backgroundColor: Color.darkerColor,
        zIndex: 999,
      }}
      className="w-full py-4 flex relative flex-row justify-between px-10 items-center"
    >
      {!isHome ? (
        <Link
          to={"/"}
          className="  hover:transform  hover:-translate-y-2 transition-all duration-300"
        >
          <span className=" text-lg font-semibold text-white cursor-pointer  ">
            Home
          </span>
        </Link>
      ) : (
        <div className=" opacity-0"> home</div>
      )}
      <div>
        <TextRevealCard
          text="Test. Tweak. Repeat."
          revealText="Master Your Machine"
          textSize={40}
        />
      </div>
      <div className=" opacity-0">placeholder</div>

      <div
        className={`absolute transition-all duration-800 `}
        style={
          isHome
            ? {
                left: "50%",
                top: "140%",
                transform: "translate(-50%)",
              }
            : {
                left: "93%",
                top: "50%",
                transform: "translateY(-50%)",
              }
        }
      >
        <HaloVisualizer
          size={isHome ? "large" : "small"}
          scaleRange={[0.8, 2]}
          decibel={decibelLevel}
        />
      </div>
    </div>
  );
}

export default Header;
