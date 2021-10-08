
import React, { useState, useEffect } from 'react';
// import './App.css';
import { questions } from '../data'

function Questions() {

    // function shuffleArray(questions: string[]) {
    //     for (let i = questions.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [questions[i], questions[j]] = [questions[j], questions[i]];
    //     }
    //     console.log("here is our shuffled array", questions)
    //     return questions
    //   }

  return (
    <div className="questions">
      {questions.map((question: any) => {
          return (
          <div>
          <h3>{question.question}</h3>
          <h3>{question.answer1}</h3>
          <h3>{question.answer2}</h3>
          <h3>{question.answer3}</h3>
          <h3>{question.answer4}</h3>
          </div>
      )})}
    </div>
  );
}

export default Questions;
