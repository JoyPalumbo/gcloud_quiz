
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

    function updateScore(e: MouseEvent<HTMLButtonElement>){
      console.log("we're clicking",  e.currentTarget.getAttribute('data-appMode'))
        for(let i = 0; i < rightAnswer.length; i++){
          console.log("right answer", rightAnswer[i])
          if(e.currentTarget.getAttribute('data-appMode') == rightAnswer[i]){
            setScore(score + 1)
            console.log("our score", score)
           }
          else {
             console.log("Wrong answer")
          }
        }
    }

    useEffect(() => {
  
    }, [])

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
