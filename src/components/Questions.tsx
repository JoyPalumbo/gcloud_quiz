
import React, { useState, useEffect, MouseEvent } from 'react';
// import './App.css';
import { questions } from '../data'

function Questions() {
  const [currQuestion, setCurrQuestion] = useState<string>('')
  const [rightAnswer, setRightAnswer] = useState<Array<string>>([])
  // const [wrongAnswer1, setWrongAnswer1] = useState('')
  // const [wrongAnswer2, setWrongAnswer2] = useState('')
  // const [wrongAnswer3, setWrongAnswer3] = useState('')
  const [answerChoices, setAnswerChoices] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false)
  const [questionNum, setQuestionNum] = useState<number>(0)



    function shuffleArray(question: Array<string>) {
        for (let i = question.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question[i], question[j]] = [question[j], question[i]];
        }
        return question
      }
    
     function nextQuestion(){
      setClicked(true)
      setQuestionNum(questionNum + 1)
      if(questionNum <= questions.length - 1) {
        console.log(questionNum)
        setCurrQuestion(questions[questionNum].question)
        setRightAnswer(questions[questionNum].correctAnswer)
        setAnswerChoices(shuffleArray([questions[questionNum].answer1, questions[questionNum].answer2, questions[questionNum].answer3, questions[questionNum].answer4]))
        console.log(currQuestion)
      }
      else {
        console.log("finished!")
       }
    }

      // function updateScore(e: MouseEvent<HTMLButtonElement>){
      //   if(typeof rightAnswer === 'string'){
      //     console.log("string")
      //   }
      // }

    function updateScore(e: MouseEvent<HTMLButtonElement>){
      console.log("we're clicking",  e.currentTarget.getAttribute('data-appMode'))
      // if(rightAnswer.length === 1) {
      //   console.log("right answer:", rightAnswer[0], "answer chosen:", e.currentTarget.getAttribute('data-appMode'))
        let chosen: string | null = e.currentTarget.getAttribute('data-appMode')
      //   console.log("our choice", chosen)
        if(chosen?.match(rightAnswer[0]) !== null) {
        // if(chosen.localeCompare(rightAnswer[0])){
        console.log("the right answer is: ", rightAnswer[0], "correct")
      
        }
          if(chosen === rightAnswer[0]){
            setScore(score + 1)
            console.log("our score", score)
           }
          else {
             console.log("Wrong answer")
          }
        
       }
      //  else {
      //   let chosenArr = []
      //   for(let i = 0; i < rightAnswer.length; i++){
      //     console.log("Inside loop", "right answer", rightAnswer[i], "answer chosen", e.currentTarget.getAttribute('data-appMode'))
      //     let chosen: string | null = e.currentTarget.getAttribute('data-appMode')
          
      //     if(chosen?.match(rightAnswer[i]) !== null){
      //       chosenArr.push(chosen);
      //      }
      //     else {
      //        console.log("Wrong answer inside loop")
      //     }
      //   }
         
      //    if(chosenArr.length === rightAnswer.length) {
      //     setScore(score + 1)
      //     console.log("our score", score)
      //     }
      //   else {
      //     console.log("sorry")
      //   }
      // }
    // }

    // useEffect(() => {
  
    // }, [])

  return (
    <div className="questions">
          {clicked === false ?
        <h2 onClick={nextQuestion}>
          Start
        </h2>
      :
      <div>
      <h3 >{questionNum}: {currQuestion}</h3> 
      {answerChoices.map(answer => (
        <button data-appMode={ answer }onClick={updateScore}>{answer}</button>
      ))}
      <button onClick={nextQuestion}>Next</button>
      </div>
    }
    <h4>Your Score: {score}</h4>
    </div>
  );
}

export default Questions;
