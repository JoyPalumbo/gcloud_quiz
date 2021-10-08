
import React, { useState, useEffect } from 'react';
// import './App.css';
import { questions } from '../data'

function Questions() {
  const [question, setQuestion] = useState('')
  const [rightAnswer, setRightAnswer] = useState('')
  const [wrongAnswer1, setWrongAnswer1] = useState('')
  const [wrongAnswer2, setWrongAnswer2] = useState('')
  const [wrongAnswer3, setWrongAnswer3] = useState('')
  const [answerChoices, setAnswerChoices] = useState([])
  const [score, setScore] = useState(0)
  const [clicked, setClicked] = useState(false)

   // const [user, setQuestion] = React.useState<IQuestion | null>(null);

    function shuffleArray(questions: Array<string>) {
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        console.log("here is our shuffled array", questions)
        return questions
      }

    useEffect(() => {
      shuffleArray([questions[1].answer1, questions[2].answer2, questions[3].answer3, questions[4].answer4])
    }, [])

  return (
    <div className="questions">
      {/* {questions.map((question: any) => {
          return (
          <div>
          <h3>{question.question}</h3>
          <h3>{question.answer1}</h3>
          <h3>{question.answer2}</h3>
          <h3>{question.answer3}</h3>
          <h3>{question.answer4}</h3>
          </div>
      )})} */}
    </div>
  );
}

export default Questions;
