
import gcloud from '../gcloud.png'
import QuizOne from './QuizOne'
import QuizTwo from './QuizTwo'

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
        <QuizOne />
        <QuizTwo />

        </div>
    //   </header>
    )
}
export default Home

