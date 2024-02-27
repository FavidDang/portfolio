function Projects() {
    return (
        <></>
    );
}

function About() {
    return (
        <div>
            I'm David, a third-year computer science student at the University of Waterloo.
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