import Header from "/components/Header"
import Body from "/components/Body"
import Footer from "/components/Footer"

export default function App() {
    return(
        <>
        <section className="main-container">
            <section>
                <Header />
            </section>
            <section className="body-container">
                <Body />
            </section>
            <section className="footer-container">
                <Footer />
            </section>
        </section>
        </>
    )
}