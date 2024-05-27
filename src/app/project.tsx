export default function ProjectCard({name, img_src, desc, alt} : {name: string, img_src: string, desc: string, alt: string}) {
    return (
        <div className="flex justify-between gap-3 p-3 bg-neutral-900 rounded-md mx-2">
            <img src={img_src} alt={alt} width="225rem" />
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-xl">{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}