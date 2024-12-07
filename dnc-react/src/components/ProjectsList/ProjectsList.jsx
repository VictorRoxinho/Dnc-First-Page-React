import './ProjectsList.css'

// ASSETS
import LikedFilled from '../../assets/like-filled.svg'
import LikedOutline from '../../assets/like.svg'
import { useEffect, useState, useContext } from 'react'

// COMPONENTS
import Button from '../Button/Button'

// UTILS
import { getApiData } from '../../services/ApiServices'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function ProjectsList () {
    const [projects, setProjects] = useState([]);
    const [favProjects, setFavProjects] = useState([])
    const appContext = useContext(AppContext)
    const handleSavedProjects = (id) => {
        setFavProjects((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => {projectId !== id})
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProjects(savedFavProjects)
        }
    }, [])

  return (
    <div className="projects-section">
        <div className="projects-hero">
            <h2>{appContext.languages[appContext.language].projects.title}</h2>
            <p>{appContext.languages[appContext.language].projects.subtitle}</p>
        </div>
        <div className="projects-grid">
            {
                projects.map((project) => (
                    <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                        <div 
                        className="thumb tertiary-background" 
                        style={{backgroundImage: `url(${project.thumb})`}}
                        ></div>
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                        <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                            <img src={favProjects.includes(project.id) ? LikedFilled : LikedOutline} height="20px"/>
                        </Button>
                    </div>
                ))
            }
        </div>
    </div>
        
  )
}

export default ProjectsList