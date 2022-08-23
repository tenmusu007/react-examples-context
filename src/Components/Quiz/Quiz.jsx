<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import useQuiz from './hooks/useQuiz';
import axios from 'axios';
import { questionsData } from './data/questions';
export default function Quiz() {
  const {
    questions,
    question,
    currentIndex,
    updateQuestionAndScore,
    score,
    resetQuiz,
  } = useQuiz();
  useEffect(() => {
    // axios.get('https://the-trivia-api.com/api/questions').then((res) => {
    //   resetQuiz(res.data);
    // });
    resetQuiz(questionsData);
  }, []);

  const [userAnswer, setUserAnswer] = useState(undefined);
=======
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useQuiz from './hooks/useQuiz';
import { questionsData } from './questions';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState(undefined);
  //   const [data, setData] = useState(questionsData);
  const { currentIndex, score, handleSubmit, questions, initQuiz } = useQuiz();
  // useEffect(() => initQuiz(questionsData), []);
  useEffect(() => {
    axios
      .get('https://the-trivia-api.com/api/questions')
      .then((res) => initQuiz(res.data));
  }, []);
  const question = questions[currentIndex];
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  console.log('question', question);

  return (
    <div>
      <h1>Quiz</h1>
      <h2>
<<<<<<< HEAD
        Current Score: {score} / {currentIndex}
=======
        Score : {score} / {currentIndex}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      </h2>
      {question && (
        <>
          <h2>
<<<<<<< HEAD
            Question {currentIndex + 1}: {questions[currentIndex].question}
          </h2>
          <div onChange={(e) => setUserAnswer(e.target.value)}>
            {question.answers.map((answer) => (
              <div>
=======
            Question {currentIndex + 1}: {question.question}
          </h2>
          <div
            onChange={(e) => {
              console.log('userAnswer', e.target.value);
              setUserAnswer(e.target.value);
            }}>
            {question.answers.map((answer, index) => (
              <div key={index}>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
                <input type='radio' name='answer' value={answer} />
                <label htmlFor=''>{answer}</label>
              </div>
            ))}
<<<<<<< HEAD
            <button onClick={() => updateQuestionAndScore(userAnswer)}>
              Submit answer
=======

            <button onClick={() => handleSubmit(userAnswer, question)}>
              Submit answer!
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
            </button>
          </div>
        </>
      )}
    </div>
  );
}
