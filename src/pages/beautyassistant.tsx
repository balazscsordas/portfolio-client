import Layout from "@/components/Layout";
import ProjectBanner from "@/components/projectDetails/ProjectBanner";
import ProjectDescription from "@/components/projectDetails/ProjectDescription";
import ProjectStack from "@/components/projectDetails/ProjectStack";

const BeautyAssistant = () => {
    return (
        <Layout>
            <ProjectBanner projectName="Beauty Assistant"/>
            <section className="max-w-5xl m-auto">
                <ProjectDescription/>
                <ProjectStack/>
            </section>
        </Layout>
    )
}

export default BeautyAssistant;