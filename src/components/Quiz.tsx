import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Question } from '../data/questions';

interface QuizProps {
  key?: string;
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (value: string, weight: number) => void;
  onPrevious: () => void;
}

export function Quiz({ question, currentIndex, totalQuestions, onAnswer, onPrevious }: QuizProps) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  // Determine ambient color based on the current question's dimension
  const ambientColor = useMemo(() => {
    switch (question.dimension) {
      case 'E/I': return 'bg-blue-400/20';
      case 'S/N': return 'bg-emerald-400/20';
      case 'T/F': return 'bg-purple-400/20';
      case 'J/P': return 'bg-amber-400/20';
      default: return 'bg-indigo-400/20';
    }
  }, [question.dimension]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 min-h-[80vh] flex flex-col relative">
      
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={ambientColor}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute w-[120vw] h-[120vw] md:w-[50vw] md:h-[50vw] rounded-full ${ambientColor} blur-[80px] md:blur-[120px]`}
          />
        </AnimatePresence>
      </div>

      {/* Top Navigation / Progress */}
      <div className="mb-8 flex items-center justify-between relative z-10">
        <div className="w-12">
          {currentIndex > 0 && (
            <button 
              onClick={onPrevious}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 transition-colors shadow-sm"
              aria-label="上一题"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <div className="flex-1 px-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">
            <span>Progress</span>
            <span>{currentIndex + 1} / {totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-indigo-600 h-2 rounded-full"
              initial={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Question Area */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                {question.text}
              </h2>
              {question.guide && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center bg-indigo-50/80 text-indigo-600/80 text-sm md:text-base py-2.5 px-5 rounded-2xl border border-indigo-100/50"
                >
                  <span className="mr-2">💡</span>
                  <span className="italic">{question.guide}</span>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col space-y-10">
              <div className="text-center text-lg font-medium text-indigo-600 px-4">
                {question.optionA.text}
              </div>
              
              <div className="flex justify-center items-center gap-4 sm:gap-8">
                <button 
                  onClick={() => onAnswer(question.optionA.value, 2)}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-indigo-500 hover:bg-indigo-500 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  aria-label="非常同意A"
                />
                <button 
                  onClick={() => onAnswer(question.optionA.value, 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-indigo-400 hover:bg-indigo-400 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  aria-label="比较同意A"
                />
                <button 
                  onClick={() => onAnswer('neutral', 0)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-gray-300 hover:bg-gray-300 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  aria-label="中立"
                />
                <button 
                  onClick={() => onAnswer(question.optionB.value, 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-teal-400 hover:bg-teal-400 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  aria-label="比较同意B"
                />
                <button 
                  onClick={() => onAnswer(question.optionB.value, 2)}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-teal-500 hover:bg-teal-500 hover:scale-110 transition-all shadow-sm flex-shrink-0"
                  aria-label="非常同意B"
                />
              </div>

              <div className="text-center text-lg font-medium text-teal-600 px-4">
                {question.optionB.text}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
