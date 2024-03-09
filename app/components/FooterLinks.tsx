import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div>
      <div className="flex items-center gap-8 pb-8">
        {/* Instagram Logo */}
        <Link href="https://www.instagram.com/" passHref>
          <img
            className="h-8 w-8"
            src="/assets/logos/insta_logo.svg"
            alt="Instagram Logo"
          />
        </Link>

        {/* LinkedIn Logo */}
        <Link href="https://www.linkedin.com/" passHref>
          <img
            className="h-8 w-8"
            src="/assets/logos/linkedin_logo.svg"
            alt="LinkedIn Logo"
          />
        </Link>

        {/* WhatsApp Logo */}
        <Link href="https://web.whatsapp.com/" passHref>
          <img
            className="h-8 w-8"
            src="/assets/logos/whatsapp_logo.svg"
            alt="WhatsApp Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
