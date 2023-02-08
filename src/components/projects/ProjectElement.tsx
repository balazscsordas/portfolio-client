import Image, { StaticImageData } from 'next/image';
import SkillElement from '../aboutMe/SkillElement';
import { PrimaryButton } from '../smallComponents/Buttons';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface Props {
    image: StaticImageData;
    name: string;
    description: string;
    linkToSite: string;
    linkToCode1: string;
    linkToCode2?: string;
    functions?: string[];
    stackList: string[];
}

const ProjectElement = ({ image, name, description, linkToSite, linkToCode1, linkToCode2, functions, stackList }: Props) => {
    return (
        <section className="grid lg:grid-cols-2 gap-20 lg:gap-28 mb-32">
            <div className="flex justify-center items-center">
                <div>
                    <Image 
                        src={image}
                        alt="project-image"
                        width={600}
                        height={600}
                    />
                    <div className='flex flex-row justify-evenly flex-wrap'>
                        <PrimaryButton text='Frontend code' href={linkToCode1}/>
                        { linkToCode2 && <PrimaryButton text='backend code' href={linkToCode2}/> }
                        <PrimaryButton text='live site' href={linkToSite}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-3xl mb-8">{ name }</h3>
                <p>{ description }</p>
                {functions && <div className='mt-8'>
                    <h4 className='font-bold text-xl mb-6'>Functions:</h4>
                    {functions.map((listItem, index) => (
                        <div key={index}>
                            <p className='mt-2 inline-block'><ArrowRightAltIcon/> {listItem}</p>
                        </div>
                    ))}
                </div>}
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