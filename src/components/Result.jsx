import React from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Result() {
  const { questions, userAnswers, resetQuiz } = useQuiz();

  const score = userAnswers.reduce((total, answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question.correctOption === answer.selectedOption) {
      return total + 1;
    }
    return total;
  }, 0);

  const navigate = useNavigate();

  const reset = () => {
    resetQuiz();
    navigate("/");
  };

  const { width, height } = useWindowSize();

  return (
    <div className="results-container max-w-xl mx-auto p-4 text-center">
      {/* Confetti component */}
      {score === questions.length && (
        <Confetti width={width - 20} height={height} />
      )}
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <p className="text-xl">
        You scored {score}/{questions.length}!
      </p>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Answers:</h2>
        <ul className="mt-2 space-y-2">
          {userAnswers.map((answer, index) => {
            const question = questions.find((q) => q.id === answer.questionId);
            const isCorrect = question.correctOption === answer.selectedOption;

            return (
              <li
                key={index}
                className={`p-2 rounded ${
                  isCorrect ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <strong>{question.question}</strong>
                <br />
                Your answer: {answer.selectedOption} {isCorrect ? "✅" : "❌"}
                <br />
                Correct answer: {question.correctOption}
                <br />
                Explanation: {question.explanation}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={reset}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
