import SkillElement from "./SkillElement";

const Skills = () => {
    return (
        <section>
            <h3 className="font-bold text-2xl mb-8">My Skills</h3>
            <div className="flex flex-row flex-wrap">
                <SkillElement name="React"/>
                <SkillElement name="Next.js"/>
                <SkillElement name="TypeScript"/>
                <SkillElement name="JavaScript"/>
                <SkillElement name="Node.js"/>
                <SkillElement name="Express.js"/>
                <SkillElement name="C#"/>
                <SkillElement name=".NET"/>
                <SkillElement name="SQL"/>
                <SkillElement name="MSSQL"/>
                <SkillElement name="MySQL"/>
                <SkillElement name="MongoDB"/>
                <SkillElement name="Mongoose"/>
                <SkillElement name="Tailwind"/>
                <SkillElement name="Bootstrap"/>
                <SkillElement name="Material UI"/>
                <SkillElement name="Git"/>
                <SkillElement name="REST API"/>
            </div>
        </section>
    )
}

export default Skills;