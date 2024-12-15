import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

import Main from "../layouts/Main";

// uses babel to load contents of file
const markdown = raw("../data/about.md");

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main title="About" description="Learn about Julian Alvarez ">
    <Box className="post markdown" id="about" borderRadius="20px">
      <header>
        <Box className="title">
          <Heading as="h2" data-testid="heading">
            <Link to="/about">About Me</Link>
          </Heading>
        </Box>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </Box>
  </Main>
);

export default About;
