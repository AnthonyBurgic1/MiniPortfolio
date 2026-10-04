const projects = [
    {
        title: "Elmvale Garden Club",
        image: "/elmvalegardenclub.png",
        technologies: "ASP.NET Core • C# • SQL • Bootstrap",
        description:
            "this website I help design it as a group project in my second year of my program (Interactive Media Web Design)",
    },
    {
        title: "XR Emerging Technologies Project",
        image: "/XRTECH project1.png",
        technologies: "HTML • CSS • JavaScript",
        description:
            "I built a spider-Mech in my XR emerging tech technologies class last semester. This is probably one of my most favourite projects they ever worked on!",
    },
    {
        title: "Exp Web-Design (Colors)",
        image: "/exp.png",
        technologies: "React • Next.js • TypeScript",
        description:
            "this is a company called EXP, I currently work for this company, It's an infrastructure, environmental company. They also have a lab where they do soil, asphalt, and concrete testing. This company has been in so many major projects all over the GTA.",
    },
];

export default function Projects() {
    return (
        <section className="page-section">

        <div className="page-heading">

        <p className="section-label">
            MY WORK
        </p>

        <h1>
            Featured Projects
        </h1>

        <p>
            A collection of projects that demonstrate my technical
            abilities and creativity.
        </p>

        </div>


        <div className="projects-grid">

            {projects.map((project) => (

        <article
            className="project-card"
            key={project.title}
        >

        <img
            src={project.image}
            alt={project.title}
        />

        <div className="project-content">

        <p className="project-technologies">
            {project.technologies}
        </p>

        <h2>
            {project.title}
        </h2>

        <p>
            {project.description}
        </p>

        </div>

        </article>

             ))}

        </div>

        </section>
    );
}