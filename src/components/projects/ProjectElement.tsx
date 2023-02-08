import Image, { StaticImageData } from 'next/image';
import SkillElement from '../aboutMe/SkillElement';
import { PrimaryButton } from '../smallComponents/Buttons';

interface Props {
    image: StaticImageData;
    name: string;
    description: string;
    linkToSite: string;
    linkToCode: string;
    functions: string[];
    stackList: string[];
}

const ProjectElement = ({ image, name, description, linkToSite, linkToCode, functions, stackList }: Props) => {
    return (
        <section className="grid lg:grid-cols-2 gap-28 my-28">
            <div className="flex justify-center items-center">
                <div>
                    <Image 
                        src={image}
                        alt="project-image"
                        width={600}
                        height={600}
                    />
                    <div className='flex flex-row justify-evenly'>
                        <PrimaryButton text='Live site' href={linkToCode}/>
                        <PrimaryButton text='Codebase' href={linkToSite}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-3xl mb-8">{ name }</h3>
                <p>{ description }</p>
                <div className='mt-8'>
                    <h4 className='font-bold text-xl mb-6'>Functions:</h4>
                    {functions.map((listItem, index) => (
                        <p className='mt-2' key={index}><span> - </span>{listItem}</p>
                    ))}
                </div>
                <div className='mt-8'>
                    <h4 className='font-bold text-xl mb-6'>Stack:</h4>
                    <div className='flex-wrap flex'>
                    {stackList.map((technology, index) => (
                        <SkillElement name={technology} key={index}/>
                    ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ProjectElement;