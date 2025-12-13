import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is an apostille?",
    options: [
      "A type of notary seal",
      "A certificate that authenticates the origin of a document for international use",
      "A French dessert",
      "An international treaty"
    ],
    correctAnswer: 1,
    explanation: "An apostille is a certificate that authenticates the origin of a public document for use in another country that is a member of the Hague Apostille Convention."
  },
  {
    id: 2,
    question: "If you're in Texas and need to authenticate a document for use in Brazil, which statement is true?",
    options: [
      "Your local notary can directly issue an apostille",
      "You need to get the document notarized first, then send it to the Texas Secretary of State",
      "You need to get the document notarized first, then send it to the US Department of State",
      "Brazil doesn't accept apostilles, so you need embassy legalization instead"
    ],
    correctAnswer: 1,
    explanation: "Documents must first be properly notarized, then sent to the Texas Secretary of State for apostille. Local notaries cannot issue apostilles directly."
  },
  {
    id: 3,
    question: "Which type of document will likely be rejected when applying for an apostille?",
    options: [
      "An original birth certificate issued by a state vital records office",
      "A properly notarized copy of a diploma",
      "A photocopy of a passport that hasn't been certified",
      "A court judgment with a clerk's certification"
    ],
    correctAnswer: 2,
    explanation: "Uncertified photocopies are routinely rejected for apostille. Documents must be either originals or properly certified/notarized copies."
  },
  {
    id: 4,
    question: "Your document needs to be used in China, but you learn China is not part of the Hague Apostille Convention. What should you do?",
    options: [
      "Get an apostille anyway - they'll probably accept it",
      "Just have the document notarized locally",
      "Obtain a different authentication process called 'legalization' through the Chinese embassy/consulate",
      "Translate the document to Chinese and that's sufficient"
    ],
    correctAnswer: 2,
    explanation: "For non-Hague countries like China, documents require 'legalization' through the country's embassy or consulate, not an apostille. This is a different, often more complex process."
  },
  {
    id: 5,
    question: "A real estate closing is happening in Mexico using your Texas property documents. When is the worst time to discover you need apostilles?",
    options: [
      "1-2 weeks before closing",
      "3-4 days before closing",
      "The day of closing",
      "After the closing fails and you lose the deal"
    ],
    correctAnswer: 2,
    explanation: "Discovering apostille requirements at the last minute is a common disaster scenario. Standard apostille processing typically takes 3-15 business days, with rush options often limited and expensive."
  },
  {
    id: 6,
    question: "Your university diploma needs an apostille for a job abroad. Which approach could lead to costly delays?",
    options: [
      "Getting a notarized copy of your original diploma",
      "Requesting an official transcript directly from your university",
      "Sending your only original diploma through regular mail to the Secretary of State",
      "Having your diploma authenticated by the university registrar first"
    ],
    correctAnswer: 2,
    explanation: "Sending your only original diploma through mail is extremely risky. Documents can be lost, damaged, or significantly delayed, potentially jeopardizing your job opportunity."
  },
  {
    id: 7,
    question: "Which statement about apostille rejection is FALSE?",
    options: [
      "Documents with expired notary commissions will be rejected",
      "Documents with incomplete notary information will be rejected",
      "Documents notarized in Texas can receive an apostille from any US state",
      "Documents with alterations or correction fluid will likely be rejected"
    ],
    correctAnswer: 2,
    explanation: "Documents notarized in Texas must receive an apostille from the Texas Secretary of State, not from other states. Each state can only apostille documents executed or notarized within its jurisdiction."
  },
  {
    id: 8,
    question: "Your adoption documents need apostilles for multiple countries. What's a potential pitfall?",
    options: [
      "You'll need a separate apostille certificate for each country and each document",
      "Some countries in your adoption process may not accept apostilles at all",
      "International adoptions typically require embassy legalization instead of apostilles",
      "All of these are potential pitfalls"
    ],
    correctAnswer: 3,
    explanation: "International adoptions face multiple challenges: separate apostilles needed for each document and country, some countries not accepting apostilles, and some requiring embassy legalization instead. Professional guidance is strongly recommended."
  },
  {
    id: 9,
    question: "After receiving your apostille, you notice a spelling error in your document. What's true?",
    options: [
      "The apostille automatically corrects minor errors in the underlying document",
      "You can correct the error yourself and still use the same apostille",
      "You'll need to correct the document and obtain a completely new apostille",
      "Spelling errors don't matter as long as the apostille itself is correct"
    ],
    correctAnswer: 2,
    explanation: "Any changes to the document after apostille invalidate the apostille. You must correct the document and go through the entire apostille process again, including notarization if applicable."
  },
  {
    id: 10,
    question: "Which might NOT be accepted for apostille in Texas?",
    options: [
      "A document notarized by a Texas notary whose commission expired yesterday",
      "A document signed and notarized in Florida",
      "A document in Spanish with no English translation",
      "A document with a digital notary seal instead of a physical impression"
    ],
    correctAnswer: 1,
    explanation: "Texas can only apostille documents executed or notarized within Texas. Documents from Florida must receive an apostille from Florida's Secretary of State, not from Texas."
  }
];

export interface QuizResults {
  score: number;
  totalQuestions: number;
  percentage: number;
  incorrectQuestions: number[];
}

const ApostilleQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<number[]>([]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextQuestion = () => {
    // Check if answer is correct and update score
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      // Track incorrect questions for later review
      setIncorrectQuestions([...incorrectQuestions, currentQuestion]);
    }
    
    setShowExplanation(false);
    setSelectedOption(null);
    
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is complete, calculate percentage
      const percentage = ((score + (selectedOption === quizQuestions[currentQuestion].correctAnswer ? 1 : 0)) / quizQuestions.length) * 100;
      
      // Navigate to results page with quiz data
      navigate('/apostille/quiz-results', { 
        state: { 
          score: score + (selectedOption === quizQuestions[currentQuestion].correctAnswer ? 1 : 0),
          totalQuestions: quizQuestions.length,
          percentage: percentage,
          incorrectQuestions: selectedOption === quizQuestions[currentQuestion].correctAnswer 
            ? incorrectQuestions 
            : [...incorrectQuestions, currentQuestion]
        } 
      });
    }
  };
  
  const handleShowExplanation = () => {
    setShowExplanation(true);
  };
  
  const currentQ = quizQuestions[currentQuestion];
  
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-proof">Apostille Knowledge Quiz</h2>
          <span className="text-neutral-600 font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">{currentQ.question}</h3>
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded border transition-all ${
                  selectedOption === index 
                    ? 'border-electric-blue bg-electric-blue/5' 
                    : 'border-neutral-200 hover:border-electric-blue/50 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 mr-3 rounded-full flex items-center justify-center border ${
                    selectedOption === index 
                      ? 'border-electric-blue bg-electric-blue text-white' 
                      : 'border-neutral-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={selectedOption === index ? 'font-medium' : ''}>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {showExplanation && (
          <div className="bg-neutral-50 p-4 rounded mb-6">
            <p className="font-medium mb-1">Explanation:</p>
            <p className="text-neutral-700">{currentQ.explanation}</p>
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          {selectedOption !== null && !showExplanation ? (
            <button 
              onClick={handleShowExplanation}
              className="button-outline"
            >
              Show Explanation
            </button>
          ) : (
            <div></div>
          )}
          
          <button 
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className={`button-primary ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {currentQuestion + 1 === quizQuestions.length ? 'Complete Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded p-5 border border-neutral-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-proof" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-neutral-600">
              This quiz covers common apostille scenarios and pitfalls. Requirements can vary by country and document type. When in doubt, consult with our experts for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { quizQuestions };
export default ApostilleQuiz;
