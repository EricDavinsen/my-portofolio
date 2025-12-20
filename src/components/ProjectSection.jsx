import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "SIDAPUS PUSDALOPS-PB",
        description: "SIDAPUS is a web application designed to store and manage official correspondence handled by PUSDALOPS-PB. Additionally, this web app manages employee data of PUSDALOPS-PB to facilitate efficient human  resource management.",
        image: "/projects/pusdalops.png",  
        tags: ["PHP", "Laravel"],
        link: "https://sidapus.com/",
    },

    {
        id: 2,
        title: "JelajahJogja",
        description: "JelajahJogja is a website designed to help tourists choose attractions in Yogyakarta. It includes a tracking feature that can detect the nearest attractions during their trip.",
        image: "/projects/jelajahjogja.png",
        tags: ["Node.Js", "Express.js"],
        link: "https://jejalahjogjakarta.netlify.app",
    },

    {
        id: 3,
        title: "Yogyakarta Profile",
        description: "Yogyakarta Profile is a website that introduces Yogyakarta, a city rich in culture, history, and tradition. Known as the cultural heart of Java, it offers a unique blend of heritage, education, natural beauty, and a modern lifestyle, making it one of Indonesia’s most iconic destinations.",
        image: "/projects/profilyogyakarta.png",
        tags: ["HTML","CSS","JavaScript"],
        link: "https://yogyakarta-profile.vercel.app/",
    }

]

export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                        <div className="h-48 overflow-hidden">
                            <img src= {project.image} alt= {project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                        
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.link} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"> 
                                        <ExternalLink  size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/EricDavinsen">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
    )
}