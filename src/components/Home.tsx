
import Questions from './Questions'
import Navbar from './Navbar'
import gcloud from '../gcloud.png'

const Home = () => {
    // const Navbar = ({icon, title}) => {
    return (
        // <header className="App-header">
        <div className="home"> 
        <Navbar />
        <img src={gcloud} className="App-logo" alt="logo" />
        <h2>Google Associate Cloud Certification Practice Quiz</h2>
  
        <Questions />
        </div>
    //   </header>
    )
}
export default Home

