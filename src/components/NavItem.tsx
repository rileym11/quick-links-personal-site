import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

export function NavItem({
  icon,
  text,
  link,
  isReactLink,
  textSize = 'base',
}: {
  icon: JSX.Element;
  text: string;
  link: string;
  isReactLink?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
}) {
  return (
    <li className={`flex items-center sm:text-${textSize}`}>
      <span className="mr-2">{icon}</span>
      {isReactLink ? (
        <Link className="flex items-center my-2" to={link}>
          <span data-content={text} aria-hidden="true"></span>
          {text}
        </Link>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="flex items-center my-2"
        >
          <span data-content={text} aria-hidden="true"></span>
          {text}
        </a>
      )}
    </li>
  );
}
