import React from "react";
import FooterLinks from "./FooterLinks";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-[#160C28] flex flex-col items-center justify-center gap-8 py-16 text-white">
      <img src="/assets/logos/layer_1.svg" alt="" className="w-64" />
      <FooterLinks />
      <div className="w-4/5 h-[2px] bg-white"></div>
      <h6>
        Made with love by:{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/vamsivishwanath/"
            className="font-bold underline underline-offset-2"
          >
            VAMSI
          </a>
          👨‍💻
        </span>
      </h6>
    </div>
  );
};

export default Footer;
