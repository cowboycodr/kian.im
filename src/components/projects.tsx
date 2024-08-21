import Image from "next/image"

type ProjectProps = {
    key: number;
    title: string;
    description: string;
    src: string;
    href: string;
}

function Project({ key, title, description, src, href }: ProjectProps) {
    return (
        <a href={href} target="_blank">
            <div className="space-y-8">
                <img src={src} alt={title} className="rounded-xl border" />
                <div>
                    <h3 className="text-lg">
                        {title}
                    </h3>
                    <p className="text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default function Projects() {
    type Project = {
        title: string,
        description: string,
        src: string,
        href: string,
    }

    const projects: Project[] = [
        {
            title: 'KianKit',
            description:
                'Open-source SvelteKit + Supabase starter kit for rapid application development.',
            src: 'https://media.fromkian.com/Solo%20Banner.jpg',
            href: 'https://kit.kian.im'
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project: Project, index: number) => {
                return (<Project key={index} title={project.title} description={project.description} src={project.src} href={project.href}></Project>)
            })}
        </div>
    )
}