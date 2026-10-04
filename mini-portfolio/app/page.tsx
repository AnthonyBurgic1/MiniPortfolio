import Link from "next/link";

export default function Home() {
    return (
        <>

            {/* Hero Section */}
            <section className="hero">

                <div className="hero-content">

                    <p className="hero-label">
                        WEB DEVELOPER • DESIGNER • STUDENT
                    </p>

                    <h1>
                        Hello, I'm
                        <span> Anthony.</span>
                    </h1>

                    <p className="hero-description">
                        Welcome to my personal portfolio. I am a 3 Year Interactive Media Web Design 
                        Student attending at Georgian College in Barrie, Ontario Canada, who is passionate about web development, 
                        and creating new designs, and building modern digital experiences for users.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            href="/about"
                            className="button button-primary"
                        >
                            About Me
                        </Link>

                        <Link
                            href="/projects"
                            className="button button-secondary"
                        >
                            View My Projects
                        </Link>

                    </div>

                </div>

            </section>


            {/* Mission Section */}
            <section className="mission-section">

                <p className="section-label">
                    MY MISSION
                </p>

                <h2>
                    Turning ideas into meaningful digital experiences.
                </h2>

                <p>
                    My mission is to continue developing my technical skills and
                    creative skills while creating websites and applications
                    that are useful, accessible, visually appealing, and easy
                    to use. I would like to combine technology and creativity to
                    solve problems and create experiences that people enjoy.
                </p>

            </section>


            {/* Quick Links */}
            <section className="quick-section">

                <div className="quick-card">
                    <span>01</span>
                    <h3>About Me</h3>
                    <p>
                        Learn more about me and my background, interests, and goals!
                    </p>
                    <Link href="/about">Explore →</Link>
                </div>

                <div className="quick-card">
                    <span>02</span>
                    <h3>My Projects</h3>
                    <p>
                        Here you can explore some of the websites and project that I have
                        created.
                    </p>
                    <Link href="/projects">Explore →</Link>
                </div>

                <div className="quick-card">
                    <span>03</span>
                    <h3>My Skills</h3>
                    <p>
                        Here are all the programming languages and technologies that I have worked
                        with.
                    </p>
                    <Link href="/skills">Explore →</Link>
                </div>

            </section>

        </>
    );
}