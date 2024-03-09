import React from "react";
import { ContactUsData } from "@/data";
type Props = {};

const renderContactData = ContactUsData.map((contact, index) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1"
      key={index}
    >
      <h3>{contact.number}</h3>
      <h2>{contact.name}</h2>
      <h3>{contact.role}</h3>
    </div>
  );
});

const ContactBox = (props: Props) => {
  return <div className="flex w-full justify-evenly">{renderContactData}</div>;
};

export default ContactBox;
