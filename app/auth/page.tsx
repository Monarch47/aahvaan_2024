"use client";
import React from "react";
import Navbar from "../components/Navbar";

type Props = {};

const providers = [
  {
    name: "google",
  },
];

const formInputs = [
  {
    type: "text",
    placeholder: "Username",
  },
  {
    type: "password",
    placeholder: "Password",
  },
  {
    type: "text",
    placeholder: "College Name",
  },
  {
    type: "text",
    placeholder: "Team Name",
  },
];

const renderFormInputs = formInputs.map((input, index) => {
  return (
    <>
      <input
        type={input.type}
        className="w-full py-4 focus:outline-none border-none bg-transparent text-black text-lg font-semibold"
        placeholder={input.placeholder}
        key={index}
      />
      <div className="w-full bg-gray-600 h-[2px]"></div>
    </>
  );
});

const Signup = (props: Props) => {
  return (
    <div className="flex flex-col w-full bg-[#fafafa] items-center">
      <Navbar />
      <div className="min-h-screen flex w-full px-10 items-center justify-center lg:justify-evenly gap-4">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full md:w-3/4 lg:w-3/4 xl:w-1/4 flex flex-col gap-4 text-center justify-center items-center">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Registeraton
          </h2>
          <div className="flex flex-col gap-2 w-full">{renderFormInputs}</div>
          <button className="bg-[#160C28] border-2 border-[#160C28] text-white px-4 py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#160C28] transition duration-200 ease-in-out w-1/2">
            Continue
          </button>
          <div className="mt-4 text-gray-600 text-xl">or</div>

          <button
            // onClick={handleOAuthSignIn(name)}
            className="bg-[#160C28] border-2 border-[#160C28] text-white px-4 py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#160C28] transition duration-200 ease-in-out w-1/2"
          >
            Sign in with Google
          </button>
        </div>
        <div className="min-h-screen w-1/2 bg-[#160C28] md:block hidden relative">
          fdf
          <img
            src="/assets/images/hexagon_pattern.svg"
            alt=""
            className="w-screen h-screen object-cover absolute top-0 left-0 z-0 bg-gradient-to-tr from-black/[0.03] to-white/[0.01]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
