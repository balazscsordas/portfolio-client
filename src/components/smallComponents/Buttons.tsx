import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
    href: string;
    text: string;
}

export const PrimaryButton = ({ href, text }: Props) => {
    return (
        <div className="mt-14 mx-3">
            <Link href={href} className="px-8 py-3 md:py-4  bg-[#facf0f] rounded-md shadow-md" scroll={false}>
                <span className="uppercase font-bold tracking-[2px]">
                    {text}
                </span>
            </Link>
        </div>
    )
}


export const DownloadCVButton = () => {
    return (
        <a 
            href="/Balazs_Csordas_CV.pdf"
            download 
            className="px-8 py-3 md:py-4 bg-[#facf0f] rounded-md shadow-md uppercase font-bold tracking-[2px]">
            Download my CV
        </a>
    )
}

export const EmailButton = () => {
    return (
        <a 
            href="mailto:csordasbalu96@gmail.com"
            className="px-8 py-3 md:py-4 m-8 bg-[#facf0f] rounded-md shadow-md uppercase font-bold tracking-[2px]">
            <MailIcon className="mr-3 text-[21px] mb-[3px]"/>Send me an email
        </a>
    )
}

export const GithubButton = () => {
    return (
        <Link href="https://github.com/balazscsordas" passHref>
            <IconButton >
                <GitHubIcon className="text-[30px]"/> 
            </IconButton>
        </Link>
    )
}

export const LinkedInButton = () => {
    return (
        <Link href="https://www.linkedin.com/in/balazscsordas/" passHref>
            <IconButton >
                <LinkedInIcon className="text-[30px]"/> 
            </IconButton>
        </Link>
    )
}