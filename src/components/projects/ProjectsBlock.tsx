import SectionTitle from "../smallComponents/SectionTitle";
import ProjectElement from "./ProjectElement";
import ProjectImage from "../../../public/dopefolio.jpeg";

const ProjectsBlock = () => {
    return (
        <section id="projects" className="max-w-7xl m-auto p-4">
            <SectionTitle text="Projects"/>
            <ProjectElement 
                image={ProjectImage}
                name="Beauty Assistant"
                description="Web application for small beauty businesses which can help them to store all of their appointments, informations about their clients, showcase their provided services, keep record of their sold giftcards."  
                linkToCode=""
                linkToSite=""
                functions={[
                    "Authentication + JWT Authorization",
                    "Create, Read, Update, Delete clients",
                    "Create, Read, Update, Delete services",
                    "Create, Read, Update, Delete giftcards",
                    "Create, Read, Update, Delete appointments",
                    "Display appointments in a great visual way sorted by week",
                    "Provide useful statistics about their clients, services, income etc.",
                    "Multilangual platform ( English + Hungarian )"
                ]}
                stackList={[
                    "Next.js", "Node.js", "Express.js", "Tailwind", "TypeScript", "MongoDB", "Material UI"
                ]}
            />
        </section>
    )   
}

export default ProjectsBlock;