const projects = [
    {
        title: "Local Business Directory",
        image: "/project1.jpg",
        technologies: "ASP.NET Core • C# • SQL • Bootstrap",
        description:
            "A web application designed to help users discover local businesses. The project includes authentication, database integration, CRUD functionality, and responsive styling.",
    },
    {
        title: "The Smoothie Machine",
        image: "/project2.jpg",
        technologies: "HTML • CSS • JavaScript",
        description:
            "A responsive smoothie ordering website featuring product selections, pricing, interactive forms, and a modern user-friendly design.",
    },
    {
        title: "Next.js Portfolio",
        image: "/project3.jpg",
        technologies: "React • Next.js • TypeScript",
        description:
            "A modern portfolio application demonstrating Next.js routing, reusable React components, TypeScript, responsive CSS, and professional web design.",
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