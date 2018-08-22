import React from 'react';
import logo from '../images/a2uned_solutions_io_logo.png';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="A2uned.io" />
      <nav>
        <ul>
          <li>
            <a href="https://www.a2unedsolutions.com">a2unedsolutions.com</a>
          </li>
          <li>
            <a href="https://blog.a2unedsolutions.com">blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}