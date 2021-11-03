import React, { useState, useEffect, MouseEvent } from 'react';

import { questions } from '../data'

function QuizTwo() {
  const [currQuestion, setCurrQuestion] = useState<string>('')
  const [rightAnswer, setRightAnswer] = useState<Array<string>>([])
  const [answerChoices, setAnswerChoices] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false)
  const [startClicked, setStartClicked] = useState<boolean>(false)
  const [questionNum, setQuestionNum] = useState<number>(20)


    function shuffleArray(question: Array<string>) {
        for (let i = question.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question[i], question[j]] = [question[j], question[i]];
        }
        return question
      }
    
     function nextQuestion(){
      setStartClicked(true)
      setClicked(false)
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
        let chosen: string | null = e.currentTarget.getAttribute('data-appMode')
        if(chosen?.match(rightAnswer[0]) !== null) {
        console.log("the right answer is: ", rightAnswer[0], "correct")     
        }
          if(chosen === rightAnswer[0]){
            setScore(score + 1)
            setClicked(true)
            console.log("our score", score)
           }
          else {
            setClicked(true)
             console.log("Wrong answer")
          }      
       }


  return (
    <div className="questions">
      {/* A. if not clicked start yet show start text */}
          {startClicked === false ?
        <h2 onClick={nextQuestion}>
          Start
        </h2>
      : 
      // A. else show questions
    <div>
      {/* B. Show finished text */}
        {questionNum === questions.length ?
    <h3>Finished!!!!</h3>
    :   
    // B. else show questions
      <div>
      <h3 className="question">{questionNum}. {currQuestion}</h3> 
      {answerChoices.map(answer => (
        // C. If not clicked show pink buttons
        clicked === false ?
        <button className="neutral-button" data-appMode={ answer } onClick={updateScore}>{answer}</button>
        :
        // C. else, once button clicked, show right and wrong answers
      [ clicked === true && answer === rightAnswer[0] ?
      <button className="rightAnswer" data-appMode={ answer } onClick={updateScore}>{answer}</button>
        :
        <button className="wrongAnswer" data-appMode={ answer } onClick={updateScore}>{answer}</button>
      ]
      ))}
      
      <button className="next-button" onClick={nextQuestion}>Next</button>
      </div>
}
      </div>
    }
    {/* D. If start clicked pressed show score */}
    {startClicked === true ?
    <h3>Your Score: {score}</h3>
    :
    // D. Else don't show score yet  but show goood luck text
    <h4>Good Luck!</h4>}

    </div>
  );
}

export default QuizTwo;