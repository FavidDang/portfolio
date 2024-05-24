function Projects() {
    return (
        <></>
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
        <></>
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