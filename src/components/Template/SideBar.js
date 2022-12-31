import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Julian Alvarez</h2>
        <p>
          <a href="mailto:infinite@julian.ai">infinite@julian.ai</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Julian. I love building things, learning, and leading others. I am a Co-Founder
        & the CEO at <a href="https://www.mindflow.gg">Mindflow</a>, and the host of the{" "}
        <a href="https://www.youtube.com/@inventing.the.future">Inventing The Future Podcast</a>. I
        am obsessed with the infinite journey of personal growth and love uncovering new ways to
        continue expanding and manifesting my infinite potential.
      </p>
      <br />
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <br />
      <p className="copyright">
        &copy; Julian Alvarez <Link to="/">julian.ai</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
