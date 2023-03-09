import { DownloadCVButton } from "../smallComponents/Buttons";

const AboutMe = () => {
    return (
        <section>
            <h3 className="font-bold text-2xl mb-8">Get to know me!</h3>
            <p className="my-4 text-lg">I am a mechanical engineer with 7 years of work experience in the automotive industry, and I want to transition to the software development field. I am motivated, enthusiastic, and passionate about technology, and I believe that my background in engineering, current knowledge of modern technologies in the field of full stack development, and my willingness to learn will make me a valuable asset to a software developer team.</p>
            <p className="my-4 text-lg">Throughout my career, I have developed a strong foundation in problem-solving and critical thinking, skills that are essential to success in every industry. I have been focusing on learning Full Stack web development since August of 2022. I have built websites and web apps with: React, Next.js, Redux, TypeScript, Tailwind CSS, and RESTful web API-s with database integrations: Node.js, Express.js, C#, ASP.NET Core Web API, Entity, MSSQL, MongoDB. I can also work with Git version control system.</p>
            <p className="my-4 text-lg">I am confident that my background in engineering, constantly growing knowledge of modern technologies, and my strong work ethic will enable me to quickly adapt to the new challanges. I am eager to learn new technologies and programming languages, and I am committed to continuously improving my soft and hard skills.</p>
            <p className="my-4 text-lg">My main goal is to work as a Full Stack / Frontend / Backend developer and be part of a team where I can improve my skills, while I am providing value to the company.</p>
            <p className="my-4 text-lg">I am open to relocation and remote work as well, so if you are looking for someone who truly wants to learn and evolve, feel free to contact me.</p>
            <div className="mt-14 mb-16">
                <DownloadCVButton/>
            </div>
        </section>
    )
}

export default AboutMe;