import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialMediaLinks = [
  { href: "https://twitter.com/", icon: faTwitter },
  {
    href: "https://www.linkedin.com/in/ashish-sunil-thomas-a34334137/",
    icon: faLinkedin,
  },
  { href: "https://github.com/ashishthomas", icon: faGithub },
  {
    href: "https://mail.google.com/mail/u/0/?fs=1&to=ashishthomas1995@gmail.com&tf=cm",
    icon: faEnvelope,
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-white text-4xl">Hello, I'm</p>
        <h1 className="text-7xl font-extrabold leading-tight my-5 text-white font-dancing-script">
          {" "}
          Ashish Sunil Thomas
        </h1>
        <p className="text-lg text-white font-medium mb-7">
          A FRONTEND WEB DEVELOPER
        </p>
        <div className="flex space-x-4 justify-center">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
