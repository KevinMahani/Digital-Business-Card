export default function Body() {
    return(
        <>
            <section className="button-container">
                <button
                    className="email-button"
                    onClick={() => window.open("mailto:kayvanmahani@gmail.com", "_blank")}
                    style={{ cursor: "pointer" }}
                 >
                    <img
                        className="email-icon"
                        src="/img/Mail.png"
                        alt="email-icon"
                    />
                    <span>Email</span>
                </button>
                <button 
                className="linkedin-button"
                onClick={() => window.open("https://www.linkedin.com/in/keivan-mahani-b5b70576/", "_blank")}
                style={{ cursor: "pointer" }}
                >
                    <img
                        className="linkedin-icon"
                        src="/img/linkedin.png"
                        alt="linkedin-icon"
                    />
                    <span>LinkedIn</span>
                </button>
            </section>
            <section className="details-container">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                    I am a passionate frontend developer focused on building clean, user-friendly interfaces and seamless digital experiences. With a strong foundation in React and modern web technologies, I enjoy solving problems, optimizing performance, and continuously learning new tools and best practices to deliver high-quality solutions.
                </p>
                <h2 className="interests-title">Interests</h2>
                <p className="interests-text">
                    Basketball, serials, books, design, programming, computers, sports, video games, coffee, swimming
                </p>
            </section>
        </>
    )
}