import React from "react";
import { Link as InternalLink } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <InternalLink to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </InternalLink>
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
        & the CEO at <InternalLink to="/mindflow">Mindflow</InternalLink>, and the host of the{" "}
        <InternalLink to="/podcast">Inventing The Future Podcast</InternalLink>. I am obsessed with
        the infinite journey of personal growth and love uncovering new ways to continue expanding
        and manifesting my infinite potential.
      </p>
      <br />
      <ul className="actions">
        <li>
          <InternalLink to="/story" className="button">
            My Story
          </InternalLink>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <br />
      <p className="copyright">
        &copy; Julian Alvarez <InternalLink to="/">julian.ai</InternalLink>.
      </p>
    </section>
  </section>
);

export default SideBar;
