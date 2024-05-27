import ProjectCard from "./project";
import Image from 'next/image'
import { prefix } from '../prefix'

function Projects() {
    return (
        <ProjectCard name="Chess" img_src={`${prefix}/portfolio/chess.png`} desc="Fully implemented chess with check, checkmate, stalemate, and chess mechanics. Also includes 4 different levels of bots. Made using C++." alt="Sample image of chess" />
    );
}

function About() {
    return (
        <div className="text-xl">
            I&apos;m David, a third-year computer science student at the University of Waterloo. In my free time, I like to work out, play video games, and dabble in whatever niche interest captures my attention in the moment.
        </div>
    );
}

function Contact() {
    return (
        <div className="self-center">
            <ul>
                <li className="py-2">
                    <a className="flex items-center gap-3" href="https://github.com/FavidDang">
                        <Image alt="GitHub Logo" src={`${prefix}/portfolio/github-original.svg`} width="50" height="50" unoptimized/>
                        <span className="font-bold text-xl">Github</span>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center gap-3" href="https://www.linkedin.com/in/david-fang08/">
                        <Image alt="LinkedIn Logo" src={`${prefix}/portfolio/linkedin-plain.svg`} width="50" height="50" unoptimized/>
                        <span className="font-bold text-xl">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default function Content({type} : {type : string}) {

    if (type === 'projects') {
        return Projects();
    } else if (type === 'about') {
        return About();
    } else if (type === 'contact') {
        return Contact();
    }

    return(
        <></>
    );

}