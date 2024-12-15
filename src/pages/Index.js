import React from "react";
import { Link as InternalLink } from "react-router-dom";
import Main from "../layouts/Main";
import {
  Text,
  Heading,
  Image,
  Link,
  OrderedList,
  ListItem,
  HStack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";

const Index = () => (
  <Main description={"Julian is a founder, software engineer, and podcaster."}>
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
        {"    "}💥 I am a Co-Founder and the CEO at <InternalLink to="/Jungle">Jungle</InternalLink>
        .
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
      <Image
        src="/images/ITFCanvas.jpg"
        alt="Canvas of the Inventing The Future Podcast"
        margin="0 auto"
        mb="30px"
        width={"100%"}
        borderRadius="12px"
      />
      <Text>
        Check out the <InternalLink to="/story">Story page</InternalLink> to read about two defining
        stories from my life 1) How I discovered my purpose and 2) The biggest mistake I have made
        in my life.
        <br />
        <br />
        You can also learn more about my startup Jungle,{" "}
        <InternalLink to="/Jungle">here</InternalLink>, and my podcast, Inventing The Future,{" "}
        <InternalLink to="/Jungle">here</InternalLink>.
      </Text>
    </article>
  </Main>
);

export default Index;
