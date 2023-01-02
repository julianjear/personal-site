import React from "react";
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
import { FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Main from "../layouts/Main";

const url =
  "https://infinitemindspodcast.us18.list-manage.com/subscribe/post?u=7ef744c2b21b96acce8b69ac1&amp;id=0d2a0588ee";

const SimpleForm = () => <MailchimpSubscribe url={url}> asdf </MailchimpSubscribe>;

const Podcast = () => (
  <Main description={"Julian's podcast, Inventing The Future"}>
    <article className="post" id="podcast">
      <header>
        <div className="title">
          <h2 data-testid="heading">Inventing The Future Podcast 🎙</h2>
        </div>
      </header>

      <Text mb="20px" fontWeight={700} fontSize="20px" textAlign="center">
        In January 2021, I launched the Inventing The Future podcast
      </Text>

      <Link
        href="https://inventingthefuture.ai/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", borderBottomStyle: "none" }}
        mb="30px"
      >
        <Image
          src="/images/ITFCover.jpg"
          alt="Inventing The Future Cover"
          margin="0 auto"
          mb="30px"
          borderRadius="12px"
        />
      </Link>

      <Heading as="h3" size="md" mb="12px">
        What is it?
      </Heading>
      <Text>
        I highlight the stories & minds of visionary tech entrepreneurs that are solving the world's
        biggest problems 🚀
      </Text>
      <Text mb="24px">
        Every episode features the story of the guest, what they're building, and the mindsets,
        tools, & habits that enable them to thrive.
      </Text>

      <Heading as="h3" size="md" mb="12px">
        Why did I start it?
      </Heading>

      <OrderedList mb="24px">
        <ListItem>
          "The world's biggest problems are the world's biggest opportunities" - Peter Diamandis.
          After acquiring this sage wisdom from Peter, I became interested in learning about the
          world's biggest problem and increasing the awareness of these problems to young entreneurs
          that want to make a dent in the universe.
        </ListItem>
        <ListItem>
          There are several great podcast on entrepreneurship (such as How I Built This) but I
          personally wanted a podcast that 1) focused specifically on tech entrepreneurship and 2)
          was hosted by someone that was an entrepreneur themselves. I couldn't find a podcast like
          this so I decided to do it myself!
        </ListItem>
        <ListItem>
          <b>Super Networking Tool:</b> Having a podcast is a good excuse to talk to incredible
          people and the people I was most interested in connecting with is tech founders.
        </ListItem>
        <ListItem>
          <b>Mastering Communication:</b> I came to realize that the ability to community well and
          ask good questions are two of the most important skills to master in life. Having a
          podcast is a great way to exercise and nuture these skills. The reason a podcast is such a
          good tool for improving these skills is because when you are having a conversation with
          someone, you are so focused on trying to figure out WHAT to say, that you pay little
          attention to HOW you are saying it. But when you hear back the recording of your own
          voice, you can pay full attention to HOW you communicated.
        </ListItem>
        <ListItem>
          <b>Building a Personal Brand:</b> I've learned to value the importance of building a
          personal brand because everything becomes easier with a better personal brand. Any time
          you launch something new (product, book, podcast, etc.) the first people that are going to
          check it out and support you is the people in your personal and professional network. A
          podcast is a great way to gain an audience and build credibility.
        </ListItem>
      </OrderedList>

      <Heading as="h3" size="md" mb="12px">
        Where to Listen?
      </Heading>

      <OrderedList mb="24px">
        <ListItem>
          <Link href="https://www.youtube.com/@inventing.the.future" target="_blank">
            YouTube (high quality video production recorded in a studio)
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://bit.ly/itf-apple" target="_blank">
            Apple Podcasts
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://bit.ly/itf-spotify" target="_blank">
            Spotify
          </Link>
        </ListItem>
      </OrderedList>

      <Heading as="h3" size="md" mb="12px">
        Socials
      </Heading>
      <Text mb="6px">
        Follow our socials for content on startup & tech wisdom + news, including but not
        exclusively snippets from podcast interviews
      </Text>
      <HStack mb="30px">
        <Button
          as="a"
          leftIcon={<FaTiktok />}
          href="https://tiktok.com/@inventing.the.future"
          target="_blank"
        >
          TikTok
        </Button>
        <Button
          as="a"
          leftIcon={<FaInstagram />}
          href="https://www.instagram.com/inventing.the.future"
          target="_blank"
        >
          Instagram
        </Button>
        <Button as="a" leftIcon={<FaTwitter />} href="https://twitter.com/ITFpod" target="_blank">
          Twitter
        </Button>
        <Button
          as="a"
          leftIcon={<FaYoutube />}
          href="https://www.youtube.com/@inventing.the.future"
          target="_blank"
        >
          YouTube
        </Button>
        <Button
          as="a"
          leftIcon={<FaLinkedin />}
          href="https://www.linkedin.com/company/inventingthefuture"
          target="_blank"
        >
          LinkedIn
        </Button>
      </HStack>

      {/* <Heading as="h3" size="md" mb="12px">
        Newsletter
      </Heading>
      <p>
        Subscribe to my newsletter to recieve updates on new episodes. I'll also share notes,
        insights, wisdom, tools, and resources that are designed to help you become a better
        entrepreneur.{" "}
      </p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <Input onSubmitted={(formData) => subscribe(formData)} />
            <Button onClick={() => subscribe("infinite@julian.ai")}>Submit</Button>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
              <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          </div>
        )}
      />
      <br /> */}

      <Heading as="h3" size="md" mb="12px">
        Other Podcasts I Have Been Featured In...
      </Heading>

      <OrderedList mb="24px">
        <ListItem>
          <Link
            href="https://open.spotify.com/episode/5GgWh0UKGTa9rNzMKr7kss?si=ed3546217df14ef5"
            target="_blank"
          >
            "Wish I Knew..." Podcast with Gary Nowak — A reflection on my time at Meta as a Software
            Engineer and at Vize as the CTO - Released July, 2022
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://open.spotify.com/episode/2zf8M1synRribYMTpsul7V?si=a29b928170b34f00"
            target="_blank"
          >
            Inventing The Future Solo Episode — Telling three stories of the most impactful turning
            points in my life 1) recognition of my privilege 2) the discovery of my purpose 3) my
            biggest mistake — Released January, 2022
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://open.spotify.com/episode/6K3xFCreMFm61poGGua1IF?si=l43O1o6ASASvDewzWC3oJQ"
            target="_blank"
          >
            "The Captain's Lifestyle" with Taylor Morgan — Speaking about the importance of health
            and vitality to maximize productivity and avoid burnout — Released June, 2021
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://open.spotify.com/episode/6hjRu1RrZCU3hOLxcNfWQT?si=c1653f0a15a04f9a"
            target="_blank"
          >
            "Radically Honest" Podcast with Dasom Lee — Being vulnerable and talking about my
            biggest mistake and the challenges of being a founder — Released July, 2020
          </Link>
        </ListItem>
      </OrderedList>
    </article>
  </Main>
);

export default Podcast;
