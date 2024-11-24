import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    saveAnswer,
  } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    saveAnswer(currentQuestion.id, selectedAnswer);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="quiz-container max-w-xl mx-auto p-4">
      {/* Display the question */}
      <h1 className="text-2xl font-bold mb-4">
        Question {currentQuestionIndex + 1}/{questions.length}
      </h1>
      <p className="text-lg">{currentQuestion.question}</p>

      {/* Display the options */}
      <div className="mt-4 space-y-2">
        {currentQuestion.options.map((answer, index) => (
          <label
            key={index}
            className={`block border p-2 rounded cursor-pointer ${
              selectedAnswer === answer ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerChange(answer)}
              className="mr-2"
            />
            {answer}
          </label>
        ))}
      </div>

      {/* Display the Next button */}
      <button
        className={`mt-4 px-4 py-2 rounded text-white ${
          selectedAnswer
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable if no option is selected
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}

export default Quiz;
