import React from "react";
import { ContactUsData } from "@/data";
type Props = {};

const renderContactData = ContactUsData.map((contact, index) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 text-center"
      key={index}
    >
      <h3 className="underline font-medium text-md lg:text-xl">
        {contact.number}
      </h3>
      <h2 className="font-bold text-md lg:text-2xl">{contact.name}</h2>
      <h3 className="text-md lg:text-lg">{contact.role}</h3>
    </div>
  );
});

const ContactBox = (props: Props) => {
  return (
    <div className="flex w-full justify-evenly gap-10 text-pretty">
      {renderContactData}
    </div>
  );
};

export default ContactBox;
