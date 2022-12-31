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
import Main from "../layouts/Main";
import { Link as InternalLink } from "react-router-dom";

const Story = () => (
  <Main description={"Julian's podcast, Inventing The Future"}>
    <article className="post" id="podcast">
      <header>
        <div className="title">
          <h2 data-testid="heading">Story 📖</h2>
        </div>
      </header>
      <Text mb="12px">
        There are two stories from my life that in aggregate do a great job at communicating who I
        am, how I have transformed, what I have achieved, and what I care about.
      </Text>
      <Text>Story #1 is about the discovery of my purpose.</Text> <br />
      <Text>Story #2 is about the biggest mistake I have made in my life.</Text>
      <br />
      <Text>
        But before diving into the two stories, I'll give a brief overview of my background.
      </Text>
      <br />
      <br />
      <Heading as="h3" size="md" mb="12px">
        Overview
      </Heading>
      <Text>
        My parents were born and raised in Medellin, Colombia but I was born in San Antonio, Texas
        because they were studying there at the time. <br />
        <br />
        We moved back to Medellin a month later after my parents finished their studies and lived
        there for the first four years of my life until my parents decided to make the insane
        decision to move back to the US and leave behind everything and everyone they had ever know
        behind. A combination of push factors around violence in Colombia (Medellin is the city
        Pablo Escobar was from) and pull factors around better economic opportunities, led my
        parents to make this decision. <br />
        <br />
        We moved to McAllen, Texas, a small city in the southern tip of Texas (20 min from the
        border to Mexico). This is the city where I grew up until I went to college at Texas A&M
        University and studied computer science there. <br />
        <br />I am now living in Palo Alto, California (Silicon Valley).
      </Text>
      <br />
      <Image
        src="images/MedellinWithMe.jpg"
        alt="Photo of Julian in Medellin"
        margin="0 auto"
        borderRadius="12px"
        width={["100%", "70%", "70%"]}
      />
      <Text mb="30px" textAlign="center" fontSize="14px" color="rgba(117, 117, 117, 1)">
        Hanging out in the outskirts of Medellin (up in the mountains) or a recent trip during
        Christmas 2022
      </Text>
      <Image
        src="images/Medellin2.jpg"
        alt="Photo of Medellin"
        margin="0 auto"
        borderRadius="12px"
        width={["100%", "70%", "70%"]}
      />
      <Text mb="30px" textAlign="center" fontSize="14px" color="rgba(117, 117, 117, 1)">
        Picture of Medellin
      </Text>
      <br />
      <br />
      <Heading as="h3" size="md" mb="12px">
        #1: The Discovery of My Purpose
      </Heading>
      <Text>
        I’ve experienced what it is like to want more from life but not have the mindsets or roadmap
        needed to move in the right direction.
        <br />
        <br />
        Ever since I can remember, I have felt an intense ambition burning within me. However, this
        ambition initially manifested itself as a desire for wealth. For some reason, I just wanted
        to be incredibly rich and successful.
        <br />
        <br />
        What I hadn’t realized at the time is that this ambition was very self-centered and
        materialistic. My ambition lacked purpose and meaning. I have now learned that when you do
        things purely or mostly out of self-interest, your motivation to take action is severely
        limited.
        <br />
        <br />
        Unsurprisingly, my behaviors were not aligned with the ambition I felt: I never read a book
        unless I had to for school, I overdosed on video games, and I did not really care much about
        my health.
        <br />
        <br />
        I had the right intentions to work hard, but couldn’t get myself to consistently do what I
        needed to do to achieve my dreams. In other words, there was a powerful Titan living within
        me but he was deep asleep and locked by the chains of limiting beliefs.
        <br />
        <br />
        Feeling this misalignment between my soaring ambition and my failure to take consistent
        action was very painful. I have vivid memories of asking myself “Why am I not doing what I
        intend to do? Am I really just going to live an ordinary life?”
        <br />
        <br />
        But then one day, I discovered Tony Robbins and went to one of his live seminars,{" "}
        <Link href="https://www.upwnow.com" targe="_blank">
          Unleash The Power Within.
        </Link>{" "}
        I absorbed Tony’s wisdom on life like a sponge and felt that someone had finally given me a
        map for how to navigate my life and equipped me with the mindsets needed to manifest my
        potential and navigate challenging times. I grew exponentially during the seminar but the
        most profound breakthrough was that I discovered a purpose that extends far beyond myself.
        <br />
        <br />
        After the seminar, everything changed: I started reading a lot more, I started to journal, I
        stopped playing video games, I became extremely health conscious, and I worked harder than
        ever before. For the first time in my life, I finally felt aligned with the ambition that I
        had felt for so long. I had awakened the Titan within me and broken the chains that were
        holding him back.
        <br />
        <br />
        <Image
          src="images/HoldingTonyBook.jpg"
          alt="Julian holding a book of Tony Robbins"
          margin="0 auto"
          borderRadius="12px"
          height={["400px", "500px", "500px"]}
        />
        <br />
        <br />
        This experience taught me that we all have so much more potential than we could ever
        possibly imagine and that our potential is infinite. Here are a couple of different
        explanations for why I believe this… <br />
        <OrderedList ml="30px">
          <ListItem>
            The more of our potential we manifest (the more we grow)→ the more capable we become +
            the more confident we become → the more opportunities that are given to us + the greater
            the magnitude of the challenges we want to take on→ this creates space for our potential
            and growth to further expand. This is a never ending cycle.
          </ListItem>
          <ListItem>
            We can never be perfect, which means there will always be a gap between where you are
            (current state) and your best self (desired state). And where there is space, there is
            potential for growth. (Wisdom from Simon Sinek) Life is an infinite game. Our lives are
            finite but life itself is infinite. The game of life will continue with us or without
            us. This means that there’s no such thing as winning life or being the best human. In an
            infinite game, the pursuit of becoming better is better than the pursuit of becoming the
            best. And since the pursuit of becoming better is infinite, our potential for growth is
            infinite. Check out this video explanation from Simon for a deeper dive.
          </ListItem>
          <ListItem>
            (Wisdom from Simon Sinek) Life is an infinite game. Our lives are finite but life itself
            is infinite. The game of life will continue with us or without us. This means that
            there’s no such thing as winning life or being the best human. In an infinite game, the
            pursuit of becoming better is better than the pursuit of becoming the best. And since
            the pursuit of becoming better is infinite, our potential for growth is infinite. Check
            out{" "}
            <Link href="https://www.instagram.com/tv/CPQiFeOrvb4/?hl=en" target="_blank">
              this video
            </Link>{" "}
            explanation from Simon for a deeper dive.
          </ListItem>
        </OrderedList>
        <br />
        This claim on infinite potential can be disputed but I also like to think about this as more
        of a mindset. It doesn’t matter whether it’s true or not but whether you believe that it is
        true or not does matter. An Infinite Mindset is an incredibly potent catalyst for growth.
        Equip yourself with an Infinite Mindset.
        <br />
        <br />
        This understanding on potential revealed two critical and opposing personal truths.
        <OrderedList ml="30px">
          <ListItem>
            I believe that there is nothing more beautiful than to discover what you are capable of
            becoming, achieving, creating, and giving in this life.
          </ListItem>
          <ListItem>
            On the contrary, there is nothing more frightening than to leave your full potential
            untapped.
          </ListItem>
        </OrderedList>
        <br />
        After realizing that every person has a boundless potential and that no one is completely
        aware of the full nature of their potential (not even me), I became obsessed with figuring
        out how how I could empower myself and others to discover and manifest their infinite
        potential. And when I think about potential, I like to group it into the four buckets of
        becoming, achieving, creating, and giving. This is what I articulate my purpose in life to
        be.
        <br />
        <br />
        I have since been to 6 Tony Robbins seminars, consumed countless books and courses on
        personal growth, co-founded two companies (Mindflow & Vize), started a podcast (Inventing
        The Future), and worked as a Software Engineer at Meta (Facebook), LinkedIn, and Goldman
        Sachs. I did all of these things in the last 5 years.
        <br />
        <br />
        I don’t say this to impress you but rather to impress upon you that it’s likely none of
        these things would have been possible had I not fueled my relentless ambition with a
        massively transformative purpose.
        <br />
        <br />
        Currently my purpose has led me to start Mindflow, where our mission is to inspire a
        generation of life-long doers to take joy in becoming 1% better every day. <br />
        It also led me to start my podcast, Inventing The Future, where our mission is to inspire
        and empower young entrepreneurs to solve the world’s biggest problems. You can learn more
        about my podcast <InternalLink to="/podcast">here</InternalLink>.
      </Text>
      <br />
      <br />
      <Heading as="h3" size="md" mb="12px">
        #2: My Biggest Mistake
      </Heading>
      <Text>
        This story begins with learning how to code at the age of 13.
        <br />
        <br />
        McAllen, Texas is a small city with little to no presence in tech/startups. It was therefore
        a miracle that one of my Dad’s friends, Juan Carlos, happened to be a computer scientist.
        <br />
        <br />
        It was 2010 and the iPhone was starting to take the world by storm. Juan Carlos came up to
        me one day and told me that if I ever had an idea for an app, we could build something
        together and publish it on the App Store.
        <br />
        <br />
        The idea of building an app fascinated me, especially since I became interested in tech due
        to video games and because I strongly desired to be rich at that time and thought that this
        was the perfect opportunity to become a millionaire.
        <br />
        <br />
        After pitching several ideas, we decided to start with something simple so that we could
        both learn: building a calculator for the iPad, which for some reason, to this day, does not
        come with a calculator. We worked on the calculator and slowly over time the gibberish
        looking lines of code started to make a little more sense.
        <br />
        <br />
        After releasing the calculator, we did not become millionaires, but we did manage to get
        over 30,000 downloads. This experience had a profound impact on me because I got to
        experience the process identifying a problem/need, coming up with a solution to address the
        problem, building the tech with code, and publishing it on a platform that instantly made it
        available to millions of people around the world. This experience taught me that programming
        isn’t just a tool, it’s a platform for enacting meaningful change.
        <br />
        <br />
        <Image
          src="images/iCalculator.jpeg"
          alt="A screenshot of iCalculator on the App Store"
          margin="0 auto"
          borderRadius="12px"
          height={["450px", "600px", "600px"]}
        />
        <Text textAlign="center" fontSize="14px" color="rgba(117, 117, 117, 1)">
          Screenshot of iCalculator on the App Store
        </Text>
        <br />
        <br />
        I ended up developing a couple of other apps during high school and decided to study
        computer science at Texas A&M University.
        <br />
        <br />
        During college, I co-founded a startup named Vize and took on the role of being the CTO,
        where I led 5 other engineers. Vize is a Glassdoor for factory workers in Mexico, with the
        aim of improving the working conditions for low-income workers and lowering insanely high
        turnover rates for factories (important context for later).
        <br />
        <br />
        My junior year of college, I went hard preparing for technical interviews so that I could
        land a great internship as a Software Engineer. After many rejections, I finally managed to
        get an offer from Goldman Sachs. I spent the summer in NYC, loved the experience, and
        decided to accept the full time offer I was given.
        <br />
        <br />
        Now I was going into my final year of college with a great job lined up after graduation.
        Having secured a job, school didn’t feel that important anymore, especially since it was
        taking time away from working on Vize, which I felt was a much more valuable learning
        experience and had a much greater potential for impact (homework doesn’t impact anyone other
        than yourself).
        <br />
        <br />
        As a result, I made the unethical decision to hire freelancers to do some of my homework the
        last two semesters of college so that I could buy myself some time. Everything was going
        smoothly until I received an email from the Honor System Office on the day of my last final
        of my last semester (two weeks from graduation). They told me they wanted to speak with me
        🧐
        <br />
        <br />
        It turned out that one of the freelancers that saw my job post reported it to my university.
        And I was smart enough to do two things 1) keep the name of the university on the assignment
        2) use the same Upwork account with my real name that I had previously used for an eBay
        business I used to run. As a result, there was no way to get out of it, the evidence was far
        too compelling.
        <br />
        <br />
        I confessed to the cheating and after having a hearing with the university where they would
        decide my fate, I got suspended for a year and was given Fs in 6 classes, which dropped my
        GPA from a 3.9 to a 2.8.
        <br />
        <br />
        My parents could not believe what I had done and to say they were disappointed and
        frustrated is a huge understatement. For context, my parents are the most honest people that
        I know and to my knowledge, have never made an ethical mistake. Additionally, they both have
        PhDs and my mom is a professor at a University. In short, it was not a fun time.
        <br />
        <br />
        Then I ended up telling Goldman Sachs what happened and after two excruciating weeks of
        waiting to hear what their decision would be, they decided to rescind (retract) my full time
        offer.
        <br />
        <br />
        I ended up having to move back home with my parents and experience the full force of their
        furry every day. I felt like the only thing I had left was my startup, Vize. Yet at that
        time, things weren’t going well at all. We had been working on the startup for nearly two
        years and had gotten close to no results. We had just lost two of our best engineers and the
        others on the team weren’t investing much time into the startup. On top of that, my parents
        thought I was wasting my time with the startup since it hadn’t amounted to anything.
        <br />
        <br />
        This was by far the toughest period in my life but I also knew that tough times create
        incredible growth opportunities. This was also the perfect opportunity to put all the
        personal growth from Tony Robbins’ seminars into practice.
        <br />
        <br />I did a 5 day silent retreat the day after my university decided to suspend me and
        dove deep into my psyche, uncovering blind spots, reflecting on integrity and other values,
        questioning why I did why I did, and how I could prevent something like this from happening
        again in the future. If you'd like to hear more about my experiences and reflection from my
        silent retreat, you can check out{" "}
        <Link
          href="https://open.spotify.com/episode/2MtGgijDIPydjdfLZIsT8m?si=bce3a15845ae4650"
          target="_blank"
        >
          this podcast episode
        </Link>{" "}
        that I recorded on it.
        <br />
        <br />
        <Image
          src="images/SilentRetreat.jpg"
          alt="Picture from Julian's Silent Retreat"
          margin="0 auto"
          borderRadius="12px"
          height={["300px", "500px", "500px"]}
        />
        <Text
          textAlign="center"
          fontSize="14px"
          color="rgba(117, 117, 117, 1)"
          width={["90%", "60%", "60%"]}
          margin="0 auto"
        >
          Picture from my 5 day silent retreat, where I rented out an AirBnb out in the woods,
          disconnected from the world (no internet) so that I could reconnect with a deeper part of
          myself. I wrote day and night and learned a ton about who I am.
        </Text>
        <br />
        The major mindset shift happened when I realized that if I had to go back to school, this
        would mean that I would have the opportunity to do more internships.
        <br />
        <br />
        After 4 months of coding like a maniac and 38 interviews with 19 companies, I ended up
        getting offers from Meta (Facebook), LinkedIn, Google, and another company as a Software
        Engineer. I decided to accept Meta and LinkedIn’s offer and did two back to back
        internships. Both of these experiences were incredible and after receiving full time offers
        from both, I decided to accept Meta’s offer.
        <br />
        <br />
        I went back to college, finished my last semester, and then I moved to Palo Alto, California
        when I started working at Meta. I left Vize in January of 2022 when I decided to start
        Mindflow and after a whopping 9.5 months at Meta, I decided to leave to go all in on
        Mindflow.
        <br />
        <br />I reflected deeply on this experience and learned so many things that continue to have
        a significant impact in my life today. Here are the top three lessons I gained from this
        experience...
        <OrderedList ml="30px">
          <ListItem>
            <b>
              Integrity is the most important value and must never be sacrificed for other values.
            </b>{" "}
            In reflecting on why I did what I did, I realized that I valued growth and impact so
            much that I decided to sacrifice my integrity in place of these two values. However, I
            realized that integrity is a non-negotiable value because it is the most important value
            to preserve. I now think of integrity as the roots of a tree. It doesn’t matter how big
            or strong a tree is, if it doesn’t have strong roots, the tree will end up falling
            sooner or later when the wind blows strong enough. Similarly, it doesn’t matter how
            smart or accomplished you are, if you don’t have a strong foundation of integrity,
            people will lose trust in you and refuse to do business with you.
          </ListItem>
          <ListItem>
            <b>The only failure is a failure to learn.</b> In life, we are going to fuck up and do
            stupid shit. We’re going to get knocked down on our ass repeatedly. However, failure is
            not defined by getting knocked down. In my mind, failure happens when you fail to take
            the opportunity to reflect and learn from your mistakes and the things that went wrong.
            When we get a 50 on a test, it’s common to be so frustrated by the results that the last
            thing we want to do is look at what we did wrong. However, the biggest the mistake, the
            greater the opportunity for growth will be.
          </ListItem>
          <ListItem>
            <b>Most barriers in life are psychological, not technical.</b> I could have easily spent
            a lot of time feeling sorry for myself and even fallen into depression but I realized
            that even though I had lost control of the path I wanted to go on, I had all the power
            in the world to turn this new path I was now on into a golden path. With the right
            mindset, anything is possible. In fact, impossible is an opinion.
          </ListItem>
        </OrderedList>
        <br />
        <Image
          src="images/ANewEarth.jpg"
          alt="Picture of the book A New Earth by Eckhart Tolle"
          margin="0 auto"
          borderRadius="12px"
          height={["300px", "500px", "500px"]}
        />
        <Text
          textAlign="center"
          fontSize="14px"
          color="rgba(117, 117, 117, 1)"
          width={["90%", "60%", "60%"]}
          margin="0 auto"
        >
          I read this book by Eckhart Tolle shortly after my university decided to suspend me for a
          year. This book talks a lot about consciousness, awareness, and the ego. The book came at
          an instrumental time for me because it help me cope with the loss of identity I had
          experienced in losing my job and many other things. In many ways, this book helped me push
          the reset button on who I was.
        </Text>
      </Text>
      <br />
      <Text>
        Thanks for taking the time to read a snippet of my story. If there's anything that resonated
        with you from my story or are feeling courageous enough to be vulnerable I invite you to
        share your story & your mistakes with the world or with myself. Reach out at
        infinite@julian.ai
      </Text>
    </article>
  </Main>
);

export default Story;