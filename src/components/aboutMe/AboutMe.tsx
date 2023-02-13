import { DownloadCVButton } from "../smallComponents/Buttons";

const AboutMe = () => {
    return (
        <section>
            <h3 className="font-bold text-2xl mb-8">Get to know me!</h3>
            <p className="my-4 text-lg">I am a mechanical engineer with 7 years of work experience working as a FEM Engineer, and I want to transition to the software development field. I am motivated, enthusiastic, and passionate about technology, and I believe that my background in engineering, current knowledge of web development, and my willingness to learn will make me a valuable asset to a software developer team.</p>
            <p className="my-4 text-lg">Throughout my career, I have developed a strong foundation in problem-solving and critical thinking, skills that are essential to success in software development. I have been focusing on learning Full Stack web development since August of 2022. Besides the constant evolving, I have managed to create a few projects on my own, which are listed in the projects section below.</p>
            <p className="my-4 text-lg">I am now eager to take my skills and experience to the next level by pursuing a career as a full stack / frontend / backend software developer. I am confident that my background in engineering, constantly growing knowledge of modern technologies, and my strong work ethic will enable me to quickly adapt to the demands of this field. Furthermore, I am eager to learn new technologies and programming languages, and I am committed to continuously improving my soft and hard skills.</p>
            <p className="my-4 text-lg">Besides programming, I like playing football, going to the gym, spending time with my family and my friends, oh, and I am a fisherman as well.</p>
            <div className="mt-14 mb-16">
                <DownloadCVButton/>
            </div>
        </section>
    )
}

export default AboutMe;