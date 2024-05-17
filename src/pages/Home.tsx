import Hero from '../components/Hero'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Download from '../components/Download'
import Donate from '../components/Donate'
import Footer from '../components/Footer'

function Home() {
    return (<>
        <Hero />
        <main>
            <Features />
            <Gallery />
            <Download />
            <Donate />
        </main>
        <Footer />
    </>);
}

export default Home;