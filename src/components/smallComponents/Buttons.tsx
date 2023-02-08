import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
    href: string;
    text: string;
}

export const PrimaryButton = ({ href, text }: Props) => {
    return (
        <div className="mt-14">
            <Link href={href} className="px-10 py-4 bg-[#facf0f] rounded-md shadow-md" scroll={false}>
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
            className="px-10 py-4 bg-[#facf0f] rounded-md shadow-md uppercase font-bold tracking-[2px]">
            Download my CV
        </a>
    )
}

export const GithubButton = () => {
    return (
        <Link href="https://github.com/balazscsordas" passHref>
            <IconButton >
                <GitHubIcon/> 
            </IconButton>
        </Link>
    )
}

export const LinkedInButton = () => {
    return (
        <Link href="https://www.linkedin.com/in/balazscsordas/" passHref>
            <IconButton >
                <LinkedInIcon/> 
            </IconButton>
        </Link>
    )
}