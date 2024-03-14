"use client";
import Navbar from "./components/Navbar";
import SportsCarousel from "./components/SportsCarousel";
import TeamGrid from "./components/TeamGrid";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import SportsIconsBox from "./components/SportsIconsBox";
import { useRouter } from "next/navigation";
import SportsMarquee from "./components/SportsMarquee";
import SwiperPrevButton from "./components/SwiperPrevButton";
import SwiperNextButton from "./components/SwiperNextButton";
import FootballNav from "./components/FootballNav";
import NavbarFinal from "./components/NavbarFinal";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      {/* <Navbar /> */}
      <FootballNav />
      {/* <NavbarFinal /> */}
      <div className="w-full flex flex-col relative">
        <div className="overflow-hidden min-h-screen bg-gradient-radial from bg-white to-transparent flex justify-center items-center relative">
          <div className="w-full flex flex-col justify-end min-h-screen">
            <div className="w-full flex flex-col justify-center items-center relative gap-24">
              <img
                src="/assets/logos/aahvaan_dark_2.svg"
                alt=""
                className="relative z-[2] h-28 sm:h-36 lg:h-48"
              />
              <img
                src="/assets/logos/aahvaan_ghost.svg"
                alt=""
                className="w-4/5 absolute z-0 opacity-20"
              />
              <h3 className="w-3/4 lg:w-1/2 text-center text-lg md:text-2xl hidden">
                North India’s largest sports festival conducted by the
                Department of Physical Education & Sports, Delhi Technological
                University. From 20+ sports events to cultural events and EDM
                nights Aahvaan has it all.
              </h3>
              <button
                // onClick={() => {
                //   router.push("auth/");
                // }}
                className="bg-[#160C28] border-2 border-[#ffffff] md:mt-[23px] hover:text-[#160C28] hover:bg-white hover:border-[#160C28] transition-all text-white px-6 py-3 text-xl font-medium rounded-lg z-[1]"
              >
                <a href="https://dtu.ac.in">Register</a>
              </button>
            </div>
            <div className="relative top-3/4 hidden lg:block">
              <SportsIconsBox />
            </div>
            <img
              src="/assets/images/sports_icons_phone.png"
              alt=""
              className="w-full block lg:hidden relative z-[1]"
            />
            <div className="relative z-[1]">
              <SportsMarquee
                className={`bg-[#160C28] text-white border-y-2 border-white top-[84%] md:top-[90%]`}
                marqueeProps={{
                  gradient: true,
                  gradientColor: "rgba(0, 0, 0, 0.5)",
                  gradientWidth: 50,
                  autoFill: true,
                  direction: "right",
                }}
              />
              <SportsMarquee
                className={`bg-white text-[#160C28] border-y-2 border-[#160C28] top-[92%] md:top-[95%]`}
                marqueeProps={{
                  gradient: true,
                  gradientColor: "rgba(203, 203, 203, 0.5)",
                  gradientWidth: 50,
                  autoFill: true,
                  direction: "left",
                }}
              />
            </div>
          </div>
          <img
            src="/assets/images/hexagon_pattern.svg"
            alt=""
            className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
          />
        </div>
      </div>

      <div
        className="w-full relative bg-gradient-radial from bg-[#F7FFFA] to-transparent"
        id="events"
      >
        <div className="w-full flex flex-col items-center justify-center py-16 gap-8">
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 lg:gap-10 pb-6 lg:pb-16 justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-semibold">Events</h1>
              <p className="lg:text-xl w-3/4 lg:w-1/2">
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
        <div
          className="w-full flex flex-col items-center justify-center py-16 lg:py-24 gap-8"
          id="team"
        >
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8 lg:gap-10 pb-6 lg:pb-16 justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-semibold">Our Team</h1>
              <p className="lg:text-xl w-3/4 lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sequi perspiciatis odio eveniet, minus illum eligendi hic
                exercitatione magni nemo minima officia. Totam, commodi?
              </p>
            </div>
          </div>
          <TeamGrid />
        </div>

        <div
          className="w-full flex flex-col items-center justify-center py-16 lg:py-24 gap-10"
          id="contact"
        >
          <div className="w-4/5 text-center flex flex-col justify-center items-center gap-12">
            <h1 className="text-xl lg:text-5xl font-semibold">Contact Us</h1>
            <ContactBox />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
