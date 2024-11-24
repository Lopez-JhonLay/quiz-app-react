import React, { createContext, useState, useContext } from "react";
import questions from "../data/questions";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const saveAnswer = (questionId, selectedOption) => {
    setUserAnswers((prev) => [...prev, { questionId, selectedOption }]);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        userAnswers,
        saveAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
