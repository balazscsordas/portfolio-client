import { DownloadCVButton } from "../smallComponents/Buttons";

const AboutMe = () => {
    return (
        <section>
            <h3 className="font-bold text-2xl mb-8">Get to know me!</h3>
            <p className="my-4 text-lg">I have worked 7 years as a FEM Simulation Engineer and I have been learning web development since August of 2022. I am highly motivated, reliable person, and I am eager to learn new things and improve my frontend and backend skills.</p>
            <p className="my-4 text-lg">I have been learning web developement since August of 2022. Things started with a course from Udemy, which laid down my fundamental knowledge of frontend and backend technologies.</p>
            <p className="my-4 text-lg">Since I finished the course, I have been constantly improving my skills as a web developer, by creating web based projects on my own, using mainly React, Node.js, MongoDB, Bootstrap and Sass.</p>
            <div className="mt-14 mb-16">
                <DownloadCVButton/>
            </div>
        </section>
    )
}

export default AboutMe;