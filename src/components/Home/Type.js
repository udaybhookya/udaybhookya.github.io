import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI & Data Scientist II",
          "Applied AI Engineer",
          "GenAI & Agentic Systems",
          "Multi-Agent Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
