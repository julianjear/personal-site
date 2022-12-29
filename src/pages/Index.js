import React from "react";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Main from "../layouts/Main";

const url =
  "https://infinitemindspodcast.us18.list-manage.com/subscribe/post?u=7ef744c2b21b96acce8b69ac1&amp;id=0d2a0588ee";

// const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Index = () => (
  <Main
    description={
      "Julian Alvarez's personal website. New York based Stanford ICME graduate, " +
      "co-founder and CTO of Arthena, and YC Alumni."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hello Universe! ¡Hola Amigos! 👋</Link>
          </h2>
        </div>
      </header>
      <p>
        {" "}
        Hello friends! I'm Julian and I'm an entrepreneur, software engineer, and podcaster. Please
        feel free to read more <Link to="/about">about me</Link>. You can also check out my{" "}
        <Link to="/resume">resume</Link> or <Link to="/contact">contact me</Link>.
      </p>
      <h2>Inventing The Future Podcast</h2>
      <a
        href="https://inventingthefuture.ai/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", borderBottomStyle: "none" }}
      >
        <img
          src="images/Inventing The Future_Cover_Space.png"
          alt="Inventing The Future Logo"
          width="60%"
        />
      </a>
      <p>
        Inventing The Future is an entrepreneurship podcast with the mission of inspiring and{" "}
        empowering entrepreneurs to solve the world's biggest problems. This podcast focuses on
        exploring the most significant problems that entrepreneurs around the world are working to
        solve, how they are approaching the problem with their unique solution, the entrepreneurial
        lessons they have learned along the way, and the mindsets that they have developed to endure
        the adversity and challenges of building something from the ground up. If you are interested
        in entrepreneurship, business, leadership, exponential technologies, or self-improvement,
        you'll love this podcast.
      </p>
      <button type="button">
        <a
          href="https://inventingthefuture.ai/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", borderBottomStyle: "none", fontSize: "12px" }}
        >
          Listen Now!
        </a>
      </button>
      <br />
      <p>
        <br />
        <strong>Here is the show description of the podcast:</strong>
        <br />
        The potential for entrepreneurs to disrupt industries and solve problems on a massive scale
        has never been greater. The decreased cost and increased power of technology has{" "}
        democratized our ability to solve large-scale problems. Today, a single individual or team,
        driven by a purpose, can transform our world. Our mission is to inspire and empower
        entrepreneurs to solve the world's biggest problems. Join me, a growing entrepreneur and
        computer scientist, as I interview those that are inventing our future. The best way to
        predict the future is to invent it. <br />
        How will you invent the future?{" "}
      </p>

      <h3>Inventing The Future Newsletter</h3>
      <p>
        Subscribe to my newsletter to recieve updates on new episodes every 2 weeks. I'll also share
        notes, insights, wisdom, tools, and resources that are designed to help you become a better
        entrepreneur and live a healthier, fulfilling, and more productive life.{" "}
      </p>
      <h4>Subscribe</h4>
      <MailchimpSubscribe url={url} />
      <br />
      <h3>Podcast Slack Community</h3>
      <p>
        <strong>
          There are two primary reasons why I created a Slack community for this podcast.
        </strong>{" "}
        <br />
        1. Podcasts often discuss really interesting topics but the conversations are usually one{" "}
        directional, which means that they go from the host/guests to the listener. In this{" "}
        community, we'll keep the conversation from the topics discussed in the podcast going. This
        means you'll be able to have conversations with the host (me) and other listeners related to
        the topics discussed in the episodes. <br />
        2. If you really enjoy a podcast, it is likely that you would relate well with other
        listeners that also enjoy the podcast. This podcast community creates a space where you can
        meet, engage with, learn from, and potentially collaborate with other like-minded
        entrepreneurs. <br />
        <br />
        If you are passionate about entrepreneurship and would like to learn from and connect with
        other ambitious entrepreneurs, I invite you to join the community and share anything related
        to entrepreneurship that you think would be valuable to others. <br />
        Let's invent the future, together.
      </p>
      <button type="button">
        <a
          href="https://inventingthefuturepod.slack.com/join/shared_invite/zt-msqn2ldi-3gPROHj8xPXXuvocj0vufw#/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", borderBottomStyle: "none", fontSize: "12px" }}
        >
          Join The Slack Community
        </a>
      </button>
    </article>
  </Main>
);

export default Index;
