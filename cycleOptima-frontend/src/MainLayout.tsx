// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import { Color } from "./constants";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ShootingStars } from "./components/ui/shooting-stars";

export default function MainLayout() {
  return (
    <div
      className=" w-[100vw] "
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Header />
      <main
        style={{
          backgroundColor: Color.lighterDark,
        }}
        className=" flex-1  w-full px-10 pt-6 "
      >
        <ShootingStars />

        <Outlet />
      </main>
    </div>
  );
}
