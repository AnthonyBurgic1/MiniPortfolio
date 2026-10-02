import Link from "next/link";

export default function Header() {
    return (
        <header className="site-header">
            <div className="nav-container">

                <Link href="/" className="logo">
                    AB<span>.</span>
                </Link>

                <nav className="navigation">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Me</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

            </div>
        </header>
    );
}