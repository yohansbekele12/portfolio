import React from "react";
import "./LandingPage.css";
import { Button } from "../components/ui/moving-border";

function LandingPage() {
  return (
    <div className="LandingPage  flex justify-center   font-main w-full h-lvh">
      <div className="container flex justify-center space-y-7 flex-col ">
        <span className="font-special font-main">Hi , My name is </span>
        <p className="text-5xl font-bold font-main text-slate-100">
          Yohans(JOHN)
        </p>
        <p className="text-5xl text-slate-100 font-bold font-main">
          I am a Full Stack engineer.
        </p>
        <p className="font-main text-gray-400">
          I am a full stack developer with a passion for creating interactive
          and responsive web applications. currently working on
          SwiftTechSolution project.
        </p>
        <Button className="outlinedBtn ca"> Check out my start up</Button>
      </div>
    </div>
  );
}

export default LandingPage;
