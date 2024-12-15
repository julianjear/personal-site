import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import Main from "../layouts/Main";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main title="Contact" description="Contact Julian Alvarez via email @ infinite@julian.ai">
    <Box className="post" id="contact" borderRadius="20px">
      <header>
        <Box className="title">
          <Heading as="h2" data-testid="heading">
            <Link to="/contact">Contact</Link>
          </Heading>
        </Box>
      </header>
      <div className="email-at">
        <p>
          Feel free to get in touch. You can email me at:{" "}
          <a href="mailto:infinite@julian.ai">infinite@julian.ai</a> or reach out to me on any of
          the social platforms. I'm especially active on Twitter, where I share growth and wisdom
          gathered from my journey as a founder.
        </p>
      </div>
      <ContactIcons />
    </Box>
  </Main>
);

export default Contact;
