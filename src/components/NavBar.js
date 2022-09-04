import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        IBD Construction
      </a>
      <ul>
        <CustomLink href="/AboutIBD">AboutIBD</CustomLink>
        <CustomLink href="/Projects">Our Projects</CustomLink>
        <CustomLink href="/Services">Our Services</CustomLink>
        <CustomLink href="/Portfolio">Our Portfolio</CustomLink>
        <CustomLink href="/Philosophy">Our Philosophy</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
