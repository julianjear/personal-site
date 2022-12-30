import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import "./static/css/main.scss"; // All of our styles
import { ChakraProvider } from "@chakra-ui/react";

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import("./pages/About"));
const Story = lazy(() => import("./pages/Story"));
const Mindflow = lazy(() => import("./pages/Mindflow"));
const Contact = lazy(() => import("./pages/Contact"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Projects = lazy(() => import("./pages/Projects"));
const Podcast = lazy(() => import("./pages/Podcast"));

const App = () => (
  <ChakraProvider>
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/story" component={Story} />
          <Route path="/mindflow" component={Mindflow} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/podcast" component={Podcast} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
