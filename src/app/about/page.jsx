import AboutBanner from "@/components/PageComponents/AboutSection/AboutBanner";
import MissionVision from "@/components/PageComponents/AboutSection/MissionVision";
import OurStory from "@/components/PageComponents/AboutSection/OurStory";
import OurTeam from "@/components/PageComponents/AboutSection/OurTeam";
import WhyChooseUs from "@/components/PageComponents/AboutSection/WhyChooseUs";
import React from "react";

function page() {
  return (
    <div className="w-full">
      <AboutBanner />
      <OurStory />
      <MissionVision />
      <OurTeam />
      <WhyChooseUs />
    </div>
  );
}

export default page;
