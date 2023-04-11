import "./index.scss";
import { useState } from "react";
const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({answer,onRestart}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {answer} ответа из ${questions.length}</h2>
      <button onClick={onRestart}>Попробовать снова</button>
    </div>
  );
}

function Game({ question, currentQuestion ,onClickVariant }) {
const procent = Math.round(currentQuestion / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>  
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
  const [answer, setAnswer] = useState(0);

  const onRestart = () => {
    setCurrentQuestion(0);
    setAnswer(0);
  }
  
  const onClickVariant = (index) => {
    setCurrentQuestion(currentQuestion + 1);   
    if(index === question.correct) {
      setAnswer(answer + 1)
    }
  }


  return (
    <div className="App">
      {
        currentQuestion !== questions.length ? <Game
        question={question}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setAnswer={setAnswer}
        onClickVariant={onClickVariant}

      /> : <Result answer={answer} onRestart={onRestart}/>
      }
      
    </div>
  );
}

export default App;
