"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import SportsCarousel from "./components/SportsCarousel";
import TeamGrid from "./components/TeamGrid";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import SportsIconsBox from "./components/SportsIconsBox";
import { useRouter } from "next/navigation";
import SportsMarquee from "./components/SportsMarquee";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <Navbar />
      <div className="w-full flex flex-col relative">
        <div className="overflow-hidden min-h-screen bg-gradient-radial from bg-white to-transparent flex justify-center items-center relative">
          <div className="w-full">
            <div className="w-full flex flex-col gap-10 justify-center items-center relative">
              <img
                src="/assets/logos/aahvaan_dark_2.svg"
                alt=""
                className="relative z-[2] h-48"
                style={{ fill: "green" }}
              />
              <img
                src="/assets/logos/aahvaan_ghost.svg"
                alt=""
                className="w-4/5 absolute z-0 opacity-20"
              />
              <h3 className="w-1/2 text-center text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis nostrum explicabo eaque distinctio autem recusandae,
                exercitationem dolore corrupti maxime tempora architecto quam
                fuga? Eius commodi rem sunt ad, modi a?
              </h3>
              <button
                onClick={() => {
                  router.push("auth/");
                }}
                className="bg-[#160C28] border-2 border-[#ffffff] md:mt-[23px] hover:text-[#ffffff] hover:bg-black text-white px-6 py-3 text-xl font-medium rounded-lg z-[1]"
              >
                Register
              </button>
            </div>
            {/* sports icons */}
            <SportsIconsBox />
            {/* SPORTS MARQUEE */}
          </div>
          <img
            src="/assets/images/hexagon_pattern.svg"
            alt=""
            className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
          />
        </div>
        <SportsMarquee
          className={`bg-[#160C28] text-white border-2 border-white top-[90%]`}
        />
        <SportsMarquee
          className={`bg-white text-[#160C28] border-2 border-[#160C28] top-[95%]`}
        />
      </div>
      {/* fefwewegwegwe */}
      <div className="w-full relative bg-gradient-radial from bg-[#F7FFFA] to-transparent">
        <div className="w-full flex flex-col items-center justify-center py-10 gap-8">
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 pb-10 justify-center items-center">
              <h1 className="lg:text-5xl font-semibold">Events</h1>
              <p className="lg:text-xl w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sequi perspiciatis odio eveniet, minus illum eligendi hic
                exercitatione magni nemo minima officia. Totam, commodi?
              </p>
            </div>
          </div>
          <SportsCarousel />
          <img
            src="/assets/images/sports_pattern.svg"
            alt=""
            className="w-screen h-[45%] object-cover absolute top-0 left-0 z-0"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center py-24 gap-8">
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 pb-10 justify-center items-center">
              <h1 className="lg:text-5xl font-semibold">Our Team</h1>
              <p className="lg:text-xl w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sequi perspiciatis odio eveniet, minus illum eligendi hic
                exercitatione magni nemo minima officia. Totam, commodi?
              </p>
            </div>
          </div>
          <TeamGrid />
        </div>
        <div className="w-full flex flex-col items-center justify-center py-24 gap-10">
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-12">
            <h1 className="lg:text-5xl font-semibold">Contact Us</h1>
            <ContactBox />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
