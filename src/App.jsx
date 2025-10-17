import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
    return (
        <>
            <Sidenav />
            <Main />
            <Projects />
            <Skills />
            <Contact />
            <Work />
        </>
    );
}

export default App;
