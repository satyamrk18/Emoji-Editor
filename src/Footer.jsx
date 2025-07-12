import React from "react";
import { Github, Linkedin, MailPlus } from "lucide-react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <h3><i>Thanks For Visiting</i></h3>
      <div className="links">
        <a href="https://github.com/satyamrk18" target="new">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/satyam-katkade-4ba389279/"
          target="new"
        >
          <Linkedin />
        </a>
        <a href="mailto:satyamrk18@gmail.com?subject=Hello%20Satyam&body=This%20is%20a%20test%20mail%20from%20my%20app" target="new">
          <MailPlus />
        </a>
      </div>
    </div>
  );
};

export default Footer;
