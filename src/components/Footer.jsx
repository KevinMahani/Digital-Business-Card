export default function Footer() {
    return (
        <>
            <img
                className="twitter-icon"
                src="/img/Twitter Icon.png"
                onClick={() => window.open("https://x.com/Kevin_mahani", "_blank")}
                alt="twitter-icon"
                style={{ cursor: "pointer" }}
            ></img>
            <img
                className="facebook-icon"
                src="/img/Facebook Icon.png"
                alt="facebook-icon"
                style={{ cursor: "pointer" }}
            ></img>
            <img
                className="instagram-icon"
                src="/img/Instagram Icon.png"
                alt="instagram-icon"
                onClick={() => window.open("https://www.instagram.com/keivanmahani/", "_blank")}
                style={{ cursor: "pointer" }}
            ></img>
            <img
                className="github-icon"
                src="/img/GitHub Icon.png"
                alt="github-icon"
                onClick={() => window.open("https://github.com/KevinMahani", "_blank")}
                style={{ cursor: "pointer" }}
            ></img>
        </>
    )
}