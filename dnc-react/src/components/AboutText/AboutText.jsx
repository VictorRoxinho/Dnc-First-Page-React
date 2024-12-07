import './AboutText.css'
import { useContext } from 'react'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function AboutText() {
    const appContext = useContext(AppContext)

    return (
        <div className="container">
            <div className="text-section d-flex">
                <div className="text-section-text">
                    <h2>ABC SER</h2>
                </div>
                <div className="text-section-text">
                    <p className='primary-color'>{appContext.languages[appContext.language].about.p1}</p>
                    <p>{appContext.languages[appContext.language].about.p2}</p>
                    <p>{appContext.languages[appContext.language].about.p3}</p>
                    <p>{appContext.languages[appContext.language].about.p4}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutText