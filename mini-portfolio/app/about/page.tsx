export default function About() {
    return (
        <section className="page-section">

            <div className="page-heading">

                <p className="section-label">
                    ABOUT ME
                </p>

                <h1>
                    Get to know me.
                </h1>

                <p>
                    A little bit about my background, interests, and goals.
                </p>

            </div>


            <div className="about-grid">

                <div className="profile-container">

                    <img
                        src="/profile.jpg"
                        alt="Anthony Burgic"
                        className="profile-image"
                    />

                </div>


                <div className="about-text">

                    <h2>
                        Hello, I'm Anthony.
                    </h2>

                    <p>
                        I am a technology student with a strong interest in
                        web development, software development, and digital
                        design. I enjoy learning new technologies and using
                        them to turn ideas into functional applications.
                    </p>

                    <p>
                        During my studies, I have worked with HTML, CSS,
                        JavaScript, TypeScript, React, Next.js, C#, ASP.NET
                        Core, and SQL. These projects have helped me develop
                        my programming, problem-solving, and design skills.
                    </p>

                    <p>
                        I also enjoy creative projects and automotive design.
                        My interests outside of programming have helped me
                        understand the importance of visual presentation,
                        branding, and user experience.
                    </p>

                    <p>
                        My personal mission is to continue learning and
                        challenging myself while creating professional digital
                        experiences that combine creativity, functionality,
                        and technology.
                    </p>

                </div>

            </div>

        </section>
    );
}