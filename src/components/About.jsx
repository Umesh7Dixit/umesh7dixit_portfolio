// import { ABOUT } from "../constants"

const About = () => {
  return (
    <section id="about" className="mt-20 mb-20" >
        <h2 className="mt-9 my-5 text-center text-3xl lg:text-8xl" >About Me</h2>
        <div className="flex items-center justify-center" >
            {/* <p className="m-8 max-w-6xl text-3xl lg:text-6xl" >{ABOUT}</p> */}
            <p className="m-8 max-w-6xl text-3xl lg:text-6xl" >
            As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences <br/> <br/>With a strong foundation in both front-end and back-end technologies <br/> <br/> My expertise includes working with JavaScript frameworks such as React and Node.js, <br/> as well as proficiency in databases like MongoDB and SQL<br/> <br/>I am passionate about continuous learning and keeping up-to-date with the latest industry trends<br/> which allows me to implement modern practices and tools in my projects.
            </p>
        </div>
    </section>
  )
}

export default About