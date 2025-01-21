import Address from "../Component/Address";
import ContactHero from "../Component/ContactHero";
import CustomerSupport from "../Component/CustomerSupport";
import HowCanWeHelp from "../Component/HowCanWeHelp";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <HowCanWeHelp />
      <CustomerSupport />
      <Address />
    </>
  );
};

export default Contact;
