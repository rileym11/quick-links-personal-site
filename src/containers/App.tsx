import React from 'react';
import { Mail, MapPin, FileText, Linkedin } from 'react-feather';
import { withLayout } from '../components/Layout';
import './App.scss';

function Link({
  icon,
  text,
  link,
}: {
  icon: JSX.Element;
  text: string;
  link: string;
}) {
  return (
    <li className="flex items-center sm:text-xl">
      <span className="mr-2">{icon}</span>
      <a target="_blank" rel="noopener noreferrer" href={link} className="flex items-center my-2">
        <span data-content={text} aria-hidden="true"></span>
        {text}
      </a>
    </li>
  );
}

function App() {
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
          <Link
            icon={<MapPin />}
            text="Montreal, QC"
            link="https://www.google.ca/maps/place/Montreal,+QC/@45.5576996,-74.0104841,10z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"
          />
          <Link icon={<FileText />} text="Resume" link="" />
          <Link icon={<Mail />} text="me@rileym.dev" link="mailto:me@rileym.dev" />
          <Link icon={<Linkedin />} text="LinkedIn" link="https://www.linkedin.com/in/riley-macdonald-943503151/" />
        </ul>
      </nav>
    </div>
  );
}

export const AppWithLayout = withLayout(App);
