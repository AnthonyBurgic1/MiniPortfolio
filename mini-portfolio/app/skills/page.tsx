const skills = [
    {
        name: "HTML",
        description:
            "Creating semantic and accessible website structures.",
    },
    {
        name: "CSS",
        description:
            "Creating responsive layouts, animations, and professional designs.",
    },
    {
        name: "JavaScript",
        description:
            "Building interactive and dynamic web experiences.",
    },
    {
        name: "TypeScript",
        description:
            "Writing strongly typed and maintainable applications.",
    },
    {
        name: "React",
        description:
            "Creating reusable components and interactive user interfaces.",
    },
    {
        name: "Next.js",
        description:
            "Building modern React applications with routing and optimized pages.",
    },
    {
        name: "C#",
        description:
            "Developing applications using C# and ASP.NET Core.",
    },
    {
        name: "SQL",
        description:
            "Working with relational databases and structured data.",
    },
];

export default function Skills() {
    return (
        <section className="page-section">

            <div className="page-heading">

                <p className="section-label">
                    MY TOOLKIT
                </p>

                <h1>
                    Skills & Technologies
                </h1>

                <p>
                    Some of the technologies and concepts I have developed
                    experience with throughout my education and projects.
                </p>

            </div>


            <div className="skills-grid">

                {skills.map((skill, index) => (

                    <div
                        className="skill-card"
                        key={skill.name}
                    >

                        <span className="skill-number">
                            0{index + 1}
                        </span>

                        <h2>
                            {skill.name}
                        </h2>

                        <p>
                            {skill.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}