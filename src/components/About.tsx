const About = (props: any) => {
    // const Navbar = ({icon, title}) => {
    // function setBodyColor() {
    //     // props.propColor
    // }
    return (
        // <header className="App-header">
        <div className="about"> 
       
        <h2>About this application and quiz</h2>

        <h4>Why I created this application:</h4>
        <h5>I created this application because I needed a quiz to study for the Google Associate Cloud Certification.
            I was having a hard time finding free quizes on line in the format I wanted so I created my own.
            I also took this opportunity to learn Typescript and to practice css. I usually rely on CSS libraries 
            such as Bootstrap, Vuetify, etc so I thought this would be a good oppotunity to re-learn CSS. 
        </h5>
        <h4>About the questions included in this quiz:</h4>
        <h5>I have gathered these questions from various sources such as the Google practice exam, Google Cloud Skills Boost course and other on-line quizes. 
            I did not write any of these questions and do not take credit for of them. Also, there is no guarantee that any of these questions
            will be on the Google Associate Cloud Certificatione exam. They might be similar to the questions on the exam but are not exact questions.
            But these questions should be helpful in becoming familiar with the topics covered on Google's exam.
        </h5>
        <h4>Is this application project open source?</h4>
        <h5>Yes! I am setting this application as open source.  I am open to any modifations, as long as it doesn't completely disrupt the format/functionality of the quiz
            I am still creating the foundation of the application so I have not yet set up the open source instructions but will be updating the read me file with guidelines soon. 
            But in the mean time I am still open to pull requests.  
        </h5>
        {/* <br></br> */}
        <h5>The Repo can be found at:</h5>
        <a href="https://github.com/JoyPalumbo/gcloud_quiz" >Gcloud Github Repo</a>
      
        </div>
  
    )
}
export default About