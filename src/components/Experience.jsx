import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <section id="experience" className="mt-40 mb-40" >
        <h2 className="my-10 text-center text-3xl lg:text-8xl" >Work Experience</h2>
        <div className="mx-auto max-w-6xl" >
            {EXPERIENCES.map( (exp, id) => (
                <div key={id} className="mx-4 mb-20" >
                    <h2 className="font-medium lg:text-2xl" > {exp.company} </h2>
                    <div className="flex justify-between" >
                        <p className="py-4 tracking-wide lg:text-xl" > {exp.role} </p>
                        <p className="py-4 lg:text-xl" > {exp.year} </p>
                    </div>

                    <p className="font-sans text-gray-400" > {exp.description} </p>
                </div>
            ) )}
        </div>
    </section>
  )
}

export default Experience