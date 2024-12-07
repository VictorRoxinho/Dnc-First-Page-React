import './LoadingSpinner.css'
import LoadingSpinnerSvg from '../../assets/loading-spinner.svg'

function LoadingSpinner () {
  return (
    <div className="loading-overlay-container d-flex al-center jc-center">
        <img src={LoadingSpinnerSvg} alt="Loading Spinner" height="80px" />
    </div>
        
  )
}

export default LoadingSpinner