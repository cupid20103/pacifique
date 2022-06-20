import React from "react";
// @import layouts
import { LandingLayout } from "../../layouts";
// @import pages
import Essential from "./essential";
import Fondation from "./fondation";
import Hero from "./hero";
import Hospital from "./hospital";
import Inspire from "./inspire";
import Intro from "./intro";
import MemberShip from "./membership";
import Nature from "./nature";
import Vision from "./vision";
import Roadmap from "./roadmap";
import FAQ from "./faq";
import Microcosm from "./microcosm";
import Mint from "./mint";
import Unique from "./unique";
import Friend from "./friend";

const Landing = () => {
  return (
    <LandingLayout>
      <Hero />
      <Vision />
      <Nature />
      <MemberShip />
      <Unique />
      <Mint />
      <Inspire />
      <Intro />
      <Hospital />
      <Fondation />
      <Essential />
      <Roadmap />
      <Friend />
      <FAQ />
      <Microcosm />
    </LandingLayout>
  );
};

export default Landing;
