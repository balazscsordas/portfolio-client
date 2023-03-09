import SectionTitle from "../smallComponents/SectionTitle";
import ProjectElement from "./ProjectElement";
import BeautyAssistantImage from "../../../public/beautyassistantlaptop.jpg";
import DorinKozmetikaImage from "../../../public/dorinkozmetikalaptop.jpg";

const ProjectsBlock = () => {
    return (
        <section id="projects" className="max-w-7xl m-auto p-4">
            <SectionTitle text="Projects"/>
            <ProjectElement 
                image={BeautyAssistantImage}
                name="Beauty Assistant"
                description="Web application for small beauty businesses packed with useful features, such as online appointment booking, stats and graphs about their business, internal appointment management (CREATE, UPDATE, DELETE), service, client list. With the help of the application, they can save time, check their appointments and other important informations about their clients online."  
                linkToCode1="https://github.com/balazscsordas/Beauty-Assistant-client"
                linkToCode2="https://github.com/balazscsordas/Beauty-Assistant-server"
                linkToSite="https://beautyassistant.hu/"
                functions={[
                    "Authentication + JWT Authorization",
                    "Online appointment booking",
                    "Create, Read, Update, Delete clients, store important information about them in 5 unique fields, which can be renamed",
                    "Create, Read, Update, Delete services",
                    "Create, Read, Update, Delete giftcards with start, end date and price",
                    "Create, Read, Update, Delete appointments",
                    "Display appointments in a great visual way sorted by week",
                    "Provide useful statistics, graphs about their clients, services, income etc.",
                    "Multilangual platform ( English + Hungarian )"
                ]}
                stackList={[
                    "Next.js", "Node.js", "Express.js", "Tailwind", "TypeScript", "MongoDB", "Mongoose", "Material UI"
                ]}
            />
            <ProjectElement 
                image={DorinKozmetikaImage}
                name="Website for client"
                description="I was responsible for building the website based on the client's requirements and hosting it."  
                linkToCode1="https://github.com/balazscsordas/website-for-client-cosmetics-"
                linkToSite="https://dorinkozmetika.hu/"
                stackList={[
                    "Gatsby.js", "JavaScript", "Sass", "HTML", "Bootstrap", "Neflify"
                ]}
            />
        </section>
    )   
}

export default ProjectsBlock;