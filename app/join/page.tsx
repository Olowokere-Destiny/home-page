import JoinFaq from "@/components/JoinFaq";
import JoinHero from "@/components/JoinHero";
import JoinSteps from "@/components/JoinSteps";
import OurMission from "@/components/OurMission";
import WhatWeOffer from "@/components/WhatWeOffer";
import React from "react";

const page = () => {
  return (
    <>
      <JoinHero />
      <JoinSteps />
      <WhatWeOffer />
      <OurMission />
      <JoinFaq />
    </>
  );
};

export default page;
