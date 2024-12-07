import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import ProjectsList from "../components/ProjectsList/ProjectsList"

const Projects = () => {
  return (
    <>
    <Header />
    <Banner title="Projects" image="projects.svg"/>
    <div className="container">
        <ProjectsList />
    </div>
    <Footer />
    </>
)
}

export default Projects