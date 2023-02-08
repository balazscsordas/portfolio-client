import { DownloadCVButton } from "../smallComponents/Buttons";

const AboutMe = () => {
    return (
        <section>
            <h3 className="font-bold text-2xl mb-8">Get to know me!</h3>
            <p className="my-4 text-lg">I have worked 7 years as a FEM Simulation Engineer and I have been learning web development since August of 2022. I am highly motivated, reliable person, and I am eager to learn new things and improve my frontend and backend skills.</p>
            <p className="my-4 text-lg">I like playing football, going to the gym, spending time with my family and my friends, oh, and I am a fisherman as well.</p>
            <div className="mt-14 mb-16">
                <DownloadCVButton/>
            </div>
        </section>
    )
}

export default AboutMe;