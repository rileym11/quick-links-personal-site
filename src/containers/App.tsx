import React from "react";
import { Mail, MapPin, FileText, Linkedin, GitHub } from "react-feather";
import { withLayout } from "../components/Layout";
import { NavItem } from "../components/NavItem";

export function App() {
  return (
    <div className="min-h-screen min-w-screen justify-center items-center flex flex-col">
      <header className="mx-4 mb-12">
        <h1 className="text-white font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 lg:mb-0">
          Riley MacDonald
        </h1>
        <h2 className="text-white font-sans text-l md:pl-1">
          Fullstack Developer
        </h2>
      </header>
      <nav className="text-white font-sans text-l">
        <ul className="flex flex-col">
          <li className="flex"></li>
          <NavItem
            icon={<GitHub />}
            text="Github"
            link="https://github.com/rileym11"
          />
          <NavItem
            icon={<FileText />}
            text="Resume"
            link="/resume"
            isReactLink
          />
          <NavItem
            icon={<Mail />}
            text="me@rileym.dev"
            link="mailto:me@rileym.dev"
          />
          <NavItem
            icon={<Linkedin />}
            text="LinkedIn"
            link="https://www.linkedin.com/in/riley-macdonald-943503151/"
          />
        </ul>
      </nav>
    </div>
  );
}

export const AppWithLayout = withLayout(App);
