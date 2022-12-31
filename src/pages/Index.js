import React from "react";
import { Link as InternalLink } from "react-router-dom";
import {
  Text,
  Heading,
  Image,
  // Link,
  OrderedList,
  ListItem,
  HStack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Julian Alvarez's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <InternalLink to="/">Hello Universe! ¡Hola! 👋</InternalLink>
          </h2>
        </div>
      </header>
      <Text>
        {" "}
        Hello! I'm Julian and I'm an entrepreneur, software engineer, podcaster, and life-long
        learner.
        <br />
        <br />
        <b>A Brief Overview</b>
        <br />
        {"    "}💥 I am a Co-Founder and the CEO at Mindflow.
        <br />
        💥 I am also the Host of the{" "}
        <InternalLink to="/podcast">Inventing The Future Podcast</InternalLink>.
        <br />
        💥 Previously, I was the Co-Founder & CTO at Vize, which is a Glassdoor for factory workers
        in Mexico.
        <br />
        💥 Previously, I was also a software engineer at Meta (Facebook), LinkedIn, and Goldman
        Sachs
      </Text>
      <br />
      <Text>
        Learn more about me by reading the stories on how I discovered my purpose and the biggest
        mistake I have made in my life <InternalLink to="/story">here</InternalLink> or check out
        the <InternalLink to="/about">about page</InternalLink>, which outlines a bit of my history,
        interests, and dreams.
      </Text>
    </article>
  </Main>
);

export default Index;
