import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Certified Ethical Hacker",
          "CISO",
          "Software Developer",
          "Web Penetration Tester",
          "Blockchain Engineer",
          "Security Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type;
