import Image from "next/image";
import Navbar from "./components/Navbar";
import SportsCarousel from "./components/SportsCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full">
        <div className="overflow-hidden min-h-screen bg-gradient-radial from bg-black to-transparent flex justify-center items-center relative">
          <div className="bg-green-300 ">
            <div></div>
          </div>
          <img
            src="/assets/images/hexagon_pattern.svg"
            alt=""
            className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
          />
        </div>
      </div>
      <div className="w-full relative">
        <div className=" w-full">
          <SportsCarousel />
        </div>
        <div className="bg-red-300 w-full">fe</div>
        <img
          src="/assets/images/sports_pattern.svg"
          alt=""
          className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
        />
      </div>
    </main>
  );
}
