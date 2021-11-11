
import Questions from './Questions'
import gcloud from '../gcloud.png'

const Home = (props: any) => {
    // const Navbar = ({icon, title}) => {
    // function setBodyColor() {
    //     // props.propColor
    // }
    return (
        // <header className="App-header">
        <div className="home"> 
        <img src={gcloud} className="App-logo" alt="logo" />
        <h2>Google Associate Cloud Certification Practice Quiz</h2>
  
        <Questions />
        </div>
    //   </header>
    )
}
export default Home

