import { EmailButton, GithubButton, LinkedInButton } from "../smallComponents/Buttons";
import SectionTitle from "../smallComponents/SectionTitle";

const ContactBlock = () => {
    return (
        <section id="contact" className="bg-banner p-4">
            <SectionTitle text="Contact"/>
            <div className="mb-16 text-center">
                <EmailButton/>
            </div>
            <div className="mb-20 text-center">
                <LinkedInButton/>
                <GithubButton/>
            </div>
        </section>
    )
}

export default ContactBlock;