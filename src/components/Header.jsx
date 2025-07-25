export default function Header() {
    return (
        <>
            <img
                className="card-photo"
                src="/img/profile.JPG"
                alt="digital-img"
            />
            <h1>
                Keivan Mahani
            </h1>
            <p className="post">
                Frontend Developer
            </p>
            <a
                className="website"
                href="https://www.behance.net/kayvanmahani"
                target="_blank"
                rel="noopener noreferrer"
            >
                behance.net/keivanmahani
            </a>
        </>
    )
}