import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { questions } from './data/questions';
import { mbtiResults, MBTIResult } from './data/results';

type Step = 'welcome' | 'quiz' | 'result';

export interface Answer {
  value: string;
  weight: number;
}

export interface ResultData {
  result: MBTIResult;
  percentages: {
    E: number; I: number;
    S: number; N: number;
    T: number; F: number;
    J: number; P: number;
  };
}

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultData(null);
  };

  const handleAnswer = (value: string, weight: number) => {
    const newAnswers = [...answers, { value, weight }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Answer[]) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    finalAnswers.forEach((ans) => {
      if (ans.weight > 0 && ans.value in scores) {
        scores[ans.value as keyof typeof scores] += ans.weight;
      }
    });

    const calcPercent = (a: number, b: number) => {
      const total = a + b;
      if (total === 0) return [50, 50];
      return [Math.round((a / total) * 100), Math.round((b / total) * 100)];
    };

    const [ePct, iPct] = calcPercent(scores.E, scores.I);
    const [sPct, nPct] = calcPercent(scores.S, scores.N);
    const [tPct, fPct] = calcPercent(scores.T, scores.F);
    const [jPct, pPct] = calcPercent(scores.J, scores.P);

    // If equal, default to INFP (common default) or just the second letter
    const type = `${scores.E > scores.I ? 'E' : 'I'}${scores.S > scores.N ? 'S' : 'N'}${scores.T > scores.F ? 'T' : 'F'}${scores.J > scores.P ? 'J' : 'P'}`;

    setResultData({
      result: mbtiResults[type],
      percentages: {
        E: ePct, I: iPct,
        S: sPct, N: nPct,
        T: tPct, F: fPct,
        J: jPct, P: pPct
      }
    });
    setStep('result');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <main className="container mx-auto">
        <AnimatePresence mode="wait">
          {step === 'welcome' && <Welcome key="welcome" onStart={handleStart} />}
          {step === 'quiz' && (
            <Quiz
              key="quiz"
              question={questions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}
          {step === 'result' && resultData && (
            <Result key="result" resultData={resultData} onRestart={handleStart} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
