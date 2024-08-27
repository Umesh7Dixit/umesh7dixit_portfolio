import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <section className="p-8 mt-20 mb-20" id="projects" >
        <h1 className="my-10 text-center text-3xl lg:text-8xl" >My Work</h1>
        <div className="columns-1 gap-16 md:columns-2 lg:columns-3" >
            {
                PROJECTS.map( (project)=> (
                    <a key={project.id} href={project.link} target="_blank" >
                        <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg" >
                            <img src={project.imgSrc} alt={project.title} className=" object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md" >
                                <h3 className="text-3xl" >{project.title}</h3>
                                <p className=" text-lg  max-w-xs " >{project.description}</p>
                            </div>
                        </div>
                    </a>
                ) )
            }
        </div>
    </section>
  )
}

export default Projects