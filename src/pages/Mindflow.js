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
import { Link as InternalLink } from "react-router-dom";
import Main from "../layouts/Main";

const Mindflow = () => (
  <Main description={"The mission and journey of Julian's startup, Mindflow"}>
    <article className="post" id="mindflow">
      <header>
        <div className="title">
          <h2 data-testid="heading">The Mindflow Story 🌱</h2>
        </div>
      </header>

      <Text>
        I co-founded Mindflow in January 2022. Our mission is to inspire a generation of life-long
        doers to take joy in becoming 1% better every day.
        <br />
        <br />
        This mission directly connects with my massively transformative purpose to empower myself
        and others to discover and manifest their infinite potential.
        <br />
        <br />
        I’m grateful to be on this journey with my brilliant co-founder, David Glass.
        <br />
        <br />
        <Image
          src="/images/DavidAndMe.jpg"
          alt="David and Julian"
          margin="0 auto"
          mb="30px"
          width={["100%", "70%", "70%"]}
          borderRadius="12px"
        />
        Since we started Mindflow, we have tested out 5 different ideas. I’ll tell the story of
        Mindflow by giving a brief overview on each of the ideas, why we pivoted, and the lessons we
        gathered from each of them.
        <br />
        <br />
      </Text>

      <Heading as="h3" size="md" mb="12px">
        Idea #1: Learn-to-Earn — The Genesis of Mindflow
      </Heading>
      <Text>
        Mindflow was born out of an idea around a concept named learn-to-earn, which was inspired
        from the boom of play-to-earn games, such as Axie Infinity.
        <br />
        <br />
        In a play to earn game like Axie Infinity, you can buy Axie NFTs and use them to play the
        game and from playing the game, you earn a cryptocurrency named SLP. I invested in Axie by
        sponsoring 20 people across the Philippines and Venezuela. This means that I bought the Axie
        NFTs and let the scholars use them to play the game and in exchange we would split earnings.
        In the beginning, this was very lucrative and these scholars in the Philippines and
        Venezuela were making more money playing this game compared to almost any job they could
        get.
        <br />
        <br />
        I was mind blow by the economic opportunity this was creating but hated the fact that they
        were playing video games. What if we could apply this same concept to something a bit more
        productive, such as learning? Thus, the idea for learn-to-earn was born.
        <br />
        <br />
        We launched our MVP for the learn-to-earn platform in March of 2022. The basic idea is that
        you read text from a learning lesson, respond to a reflection question based on what you
        learned and if we approve your response (based on it not being spam), you will earn 100
        points, which equates to $0.50 worth of the MATIC cryptocurrency.
        <br />
        <br />
        In this MVP, we were paying users out of pocket and losing money but we were only doing this
        while testing the initial idea and our plan was to eventually adopt an economic model
        similar to that of Axie Infinity. The platform is still live and you can{" "}
        <Link href="https://www.learn.mindflow.gg" target="_blank">
          check it out here
        </Link>
        . You can also check out a demo of the product{" "}
        <Link href="https://www.loom.com/share/c655df3090ad4728a363aeabe9b99ed4" target="_blank">
          here
        </Link>
        .
        <br />
        <br />
        We got over 200 users in the first month and had some strong early interest from a couple
        low-income users. However, these are some of the reasons as to why we decided to pivot.
        <OrderedList>
          <ListItem>
            <b>Uncertainty in the Economic Model:</b> Our economic model was very similar to Axie
            Infinity’s but Axie Infinity was crashing at the moment and it’s long term
            sustainability was uncertain (Axle’s crypto SLP has dropped more than 99% since its
            peak).
          </ListItem>
          <ListItem>
            <b>Intrinsic {">"} Extrinsic Motivation:</b> Paying people to learn is an extrinsic
            motivation to learn. We ended up reading research on how extrinsic motivators, such as
            money, can often get in the way of someone’s intrinsic motivation to want to do
            something. In other words, if you are being paid to do something, you are likely to
            believe that you are doing that thing for money rather than because you actually enjoy
            it. As a result, we were afraid that creating extrinsic motivations around learning
            could be harmful. You can check out a brief overview of our findings{" "}
            <Link
              href="https://mindflowgg.notion.site/Intrinsic-and-Extrinsic-Motivators-on-Mindflow-7f691518794b4778ae908da4218ee803"
              target="_blank"
            >
              here
            </Link>
            .
          </ListItem>
          <ListItem>
            <b>Action {">"} Consumption:</b> We came to realize that the real growth happens when
            you take action, not when you consume content. We therefore wanted to build something
            that had a greater emphasis on taking action.
          </ListItem>
          <ListItem>
            <b>Low-Income People:</b> The people that resonated with this product the most were
            low-income people in developing countries. I care deeply about serving these people but
            the problem with serving this demographic is that we are not those people and don’t know
            almost any people that are low-income so there would be a lot of cultural differences
            and pain points that would be easy to miss. We thought it would be better to start by
            solving problems our own problem or the problems of people we know.
          </ListItem>
        </OrderedList>
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Idea #2: The Mindflow Games
      </Heading>
      <Text>
        The Mindflow Games was a multi-day competition where participants paid $25 to compete for
        the chance to win prizes.
        <br />
        <br />
        Once the Mindflow Games began, you would receive daily quests in the categories of Learning,
        Reflection, Seek Discomfort, Relationships, and Wellness. You get points for completing
        quests and when the competition ends, the participants at the top of the leaderboard would
        earn different amounts of money. The main idea was to make it fun and easy for growth-driven
        people to take action and become a better version of themselves, with a community of other
        like-minded individuals.
        <br />
        <br />
        After running 2 seasons of the Mindflow Games (which we ran using Notion) with 48
        participants that paid $25 to participate and completed an aggregate of over 400 quests, we
        learned that the convenience and social elements were both the most impactful motivators in
        taking action and the most enjoyable parts of the experience.
        <br />
        <br />
        Therefore, when we decided to dial up the social and convenience factors of the experience
        by creating a social app that gave users daily quests.
        <br />
        <br />
        This pivot, just like the last, did not happen because what we were doing was not working
        but rather because we identified what we believed to be a much bigger and better
        opportunity.
        <br />
        <br />
        You can check out a demo of how the Mindflow Games works{" "}
        <Link href="https://www.loom.com/share/33b003feb3184bd9b6d91dcfdd0497e6" target="_blank">
          here
        </Link>
        .
        <br />
        <br />
        We also managed to raise $220k for our pre-seed round around this time.
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Idea #3: Growth Made Social — The Mindflow App
      </Heading>
      <Text>
        After going into full build mode, we ended up launching the Mindflow app in August 2022. You
        can check out the app{" "}
        <Link href="https://apple.co/3QFdPlE" target="_blank">
          here
        </Link>
        .
        <br />
        <br />
        The initial idea behind the Mindflow App was to create a social app where users receive
        daily bite-sized quests that make it fun and easy to take action and grow alongside their
        friends.
        <br />
        <br />
        After a couple of weeks, we realized that people enjoyed getting daily quests but they
        weren’t always relevant to what was interesting / valuable to them so they either
        deprioritized them or stopped checking quests altogether and eventually churned. When we
        spoke with users, many mentioned they wanted the flexibility to grow in the ways that were
        meaningful to them.
        <br />
        <br />
        As a result, we launched Growth Journeys within the Mindflow App
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Idea #4: Growth Journeys
      </Heading>
      <Text>
        Growth Journeys is a feature within the Mindflow app that enables you to create a growth
        journey for anything you want to grow in, such as Running, Weightlifting, Reading, Learning
        Spanish, etc. The idea is to have a space for you to document your hobbies, track your
        progress, learning efforts, and mental growth all in one spot and share the journey of
        becoming better every day with friends.
        <br />
        <br />
        We launched Growth Journeys in Oct 2022 and after 3 months, it still hasn't generated good
        traction.
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Mini retrospective on the Mindflow App
      </Heading>
      <Text>
        We launched Mindflow on August 20th, 2022 (4 months from time of writing) and since then,
        there has been over over 700 downloads and 500 posts created. Retention is only good (1+
        month) for a very small percentage of users and almost all users churn after 2 months. And
        perhaps worst of all for a social app, users were not inviting their friends.
        <br />
        <br />
        When we talked to users, there are things that they found valuable from the experience but
        overall, it appears that what we have built is a vitamin rather than a pain killer (our
        product is a nice to have).
        <br />
        <br />
        There’s a lot of mistakes we have made that led to this result but perhaps one of the
        biggest one is that we failed to nail down on a specific pain point and build a solution
        that does an exceptional job of tackling that pain point. This mistake is a painful one
        because it’s a failure to apply and internalize one of the most fundamental startup
        principles.
        <br />
        <br />
        As a result, we decided to take a step back and brainstorm different potential directions we
        could take and ideas we could test out. If you’d like an overview of the creative process
        behind how my co-founder and I came up with 240 different ideas and narrowed it down to one
        idea to test out,{" "}
        <Link
          href="https://twitter.com/InfiniteJuliaan/status/1602400809987149824?s=20"
          targe="_blank"
        >
          check out this thread on Twitter
        </Link>
        .
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Idea #5: Sparkin Joy — Connecting the World Through Gratitude
      </Heading>
      <Text>
        The first idea we decided to test out after brainstorming a lot of different ideas is called
        Sparkin Joy. The idea here is that you can write a gratitude letter to someone you care
        about and when you do so, a “gratitude chain” is created. If you receive a gratitude letter,
        you have 48 hours to send a gratitude letter to someone new before the chain breaks. The
        goal is to keep the chain alive for as long as possible.
        <br />
        <br />
        The core assumption here is that if you receive a gratitude letter, you’ll feel so grateful
        that you will want to pay it forward and send a gratitude letter to someone else
        (reciprocity).
        <br />
        <br />
        Additionally, we think there is power in creating the space and inviting someone to express
        gratitude to someone else. Often times we feel grateful but we don’t express it. And feeling
        gratitude for someone but not expressing it is like wrapping a present and not giving it to
        someone
        <br />
        <br />
        We launched Sparkin Joy in late Dec 2022 (few days as of this writing) and are currently
        testing our initial MVP to see how likely people are to keep gratitude chains alive. If more
        than 25% of chains are still alive after 10 days, we’ll invest further into this idea.
        Otherwise, we’ll go back to the drawing board and experiment with another idea.
        <br />
        <br />
        You can check out the live MVP of SparkinJoy and write a gratitude letter to someone at
        <Link href="https://sparkinjoy.com" targe="_blank">
          https://sparkinjoy.com
        </Link>
        .
      </Text>
      <br />
      <br />

      <Heading as="h3" size="md" mb="12px">
        Closing Thoughts
      </Heading>
      <Text>
        This is the beauty and challenge of the 0 to 1 journey!
        <br />
        <br />
        One of my biggest lessons along this journey has been that it often takes many iterations to
        find product-market fit. This means that it’s important to minimize your burn rate so that
        you can survive long enough to have enough shots on goal until you manage to score. The more
        you experiment and iterate, the more you learn, and the more likely you are to succeed. In
        my mind, it’s only a matter of when not if we hit a home run.
        <br />
        <br />
        If you’d like to follow along my startup journey and learn from my experiences, I invite you
        to{" "}
        <Link href="https://twitter.com/InfiniteJuliaan" target="_blank">
          follow me on Twitter
        </Link>
        .
        <br />
        <br />
        If you’d like to get to know my co-founder, David, better and hear more about the Mindflow
        journey,{" "}
        <Link href="https://www.youtube.com/watch?v=kqhTV7vI-ww" target="_blank">
          check out this interview I did with him on my podcast
        </Link>
        .
        <br />
        <br />
        Feel free to reach out if you’d like to learn more about Mindflow or have any thoughts on
        what I shared here: infinite@julian.ai.
      </Text>
      <br />
      <br />

      <Image
        src="/images/MindflowLogo.jpg"
        alt="The Mindflow Logo"
        margin="0 auto"
        mb="30px"
        width={["100%", "40%", "40%"]}
        borderRadius="12px"
      />
    </article>
  </Main>
);

export default Mindflow;
