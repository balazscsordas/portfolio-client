import { GithubButton, LinkedInButton } from "./smallComponents/Buttons";

const Footer = () => {
    return (
        <section className="text-center p-4">
            <div>
                <LinkedInButton/>
                <GithubButton/>
            </div>
            <p className="mt-2">Balazs Csordas</p>
        </section>
    )
}

export default Footer;