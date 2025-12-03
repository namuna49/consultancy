import ContactForm from "@/components/PageComponents/Contact/ContactForm";
import ContactHero from "@/components/PageComponents/Contact/ContactHero";
import VisitOurOffice from "@/components/PageComponents/Contact/VisitOurOffice";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-10">
      <ContactHero />
      <ContactForm />
      <VisitOurOffice />
    </div>
  );
};

export default page;
