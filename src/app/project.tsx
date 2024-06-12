import Image from 'next/image'

export function ProjectCardLink({name, img_src, desc, alt, link} : {name: string, img_src: string, desc: string, alt: string, link: string}) {
    return (
        <div className="flex justify-between gap-3 p-3 bg-neutral-900 rounded-md mx-2">
            <Image src={img_src} alt={alt} width="200" height="200" />
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-xl"><a href={link}>{name}</a></h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default function ProjectCard({name, img_src, desc, alt} : {name: string, img_src: string, desc: string, alt: string}) {
    return (
        <div className="flex justify-between gap-3 p-3 bg-neutral-900 rounded-md mx-2">
            <Image src={img_src} alt={alt} width="200" height="200" />
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-xl">{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}