import SectionTitle from "../smallComponents/SectionTitle";
import ContactData from "./ContactData";

const ContactBlock = () => {
    return (
        <section id="contact" className="bg-banner h-screen">
            <SectionTitle text="Contact"/>
            <ContactData/>
        </section>
    )
}

export default ContactBlock;