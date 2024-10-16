import React from "react";
import FooterText from "./FooterText";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="callout large secondary">
      <div className="row">
        <FooterText/>
        <FooterLink/>
      </div>
    </div>
  );
};

export default Footer;
