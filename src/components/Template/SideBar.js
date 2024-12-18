import React from "react";
import { Link as InternalLink } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <InternalLink to="/" className="logo">
        <img src="/images/me.jpg" alt="Picture of Julian" />
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
        hi, i&apos;m Julian! i love learning, exploring new ideas & people, and building products &
        companies that enable humans to become better learner, thinkers, and doers. i am inventing
        the future of learning at <InternalLink to="/Jungle">Jungle</InternalLink> as the co-founder
        & ceo. i am obsessed with the infinite journey of personal growth and love uncovering new
        ways to expand my infinite potential.
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
