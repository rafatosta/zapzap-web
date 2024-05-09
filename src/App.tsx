import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Element } from "react-scroll";

function App() {

  return (
    <>
      <Element name={"Home"} id="home">
        <NavBar />
      </Element >
      <Home />
    </>
  )
}

export default App
