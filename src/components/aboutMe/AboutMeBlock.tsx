import SectionTitle from "../smallComponents/SectionTitle";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

const AboutMeBlock = () => {
    return (
        <section id="about-me" className="bg-[#fafafa]">
            <div className="max-w-7xl m-auto p-4">
                <SectionTitle text="About Me"/>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-28">
                    <AboutMe/>
                    <Skills/>
                </div>
            </div>
        </section>
    )
}

export default AboutMeBlock;