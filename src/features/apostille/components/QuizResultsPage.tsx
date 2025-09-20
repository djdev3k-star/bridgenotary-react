import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuizResults, quizQuestions } from './ApostilleQuiz';
import Layout from '@/components/layout/Layout';

const QuizResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state as QuizResults;
  
  useEffect(() => {
    // If the user navigated here directly without quiz results, redirect to quiz
    if (!results) {
      navigate('/apostille/quiz');
    }
  }, [results, navigate]);
  
  if (!results) {
    return null; // Will redirect via the useEffect
  }
  
  const getFeedbackMessage = (percentage: number): { title: string; message: string } => {
    if (percentage >= 90) {
      return {
        title: "Apostille Expert!",
        message: "Impressive! You have an excellent understanding of apostilles and international document authentication. You're well-prepared to handle complex document scenarios."
      };
    } else if (percentage >= 70) {
      return {
        title: "Well Informed!",
        message: "Good job! You have a solid grasp of apostille basics. Review the questions you missed to become even more knowledgeable."
      };
    } else if (percentage >= 50) {
      return {
        title: "Getting There!",
        message: "You have some understanding of apostilles, but could benefit from learning more about the process and requirements to avoid potential issues."
      };
    } else {
      return {
        title: "Learning Opportunity!",
        message: "This is a great opportunity to learn more about apostilles. Review the questions you missed and consider consulting with our experts for your specific needs."
      };
    }
  };
  
  const feedback = getFeedbackMessage(results.percentage);
  
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-proof mb-6">Apostille Quiz Results</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-electric-blue/10 mb-4">
                  <span className="text-4xl font-bold text-electric-blue">{Math.round(results.percentage)}%</span>
                </div>
                <h2 className="text-2xl font-bold text-proof mb-2">{feedback.title}</h2>
                <p className="text-neutral-700">{feedback.message}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-neutral-200 py-4 my-6">
                <div className="text-center mb-4 sm:mb-0">
                  <p className="text-sm text-neutral-500">Questions</p>
                  <p className="text-xl font-semibold">{results.totalQuestions}</p>
                </div>
                <div className="text-center mb-4 sm:mb-0">
                  <p className="text-sm text-neutral-500">Correct</p>
                  <p className="text-xl font-semibold text-green-600">{results.score}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-500">Incorrect</p>
                  <p className="text-xl font-semibold text-red-500">{results.totalQuestions - results.score}</p>
                </div>
              </div>
              
              {results.incorrectQuestions.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Questions to Review</h3>
                  <div className="space-y-6">
                    {results.incorrectQuestions.map((questionIndex) => {
                      const question = quizQuestions[questionIndex];
                      return (
                        <div key={question.id} className="p-4 bg-neutral-50 rounded-lg">
                          <p className="font-medium mb-2">{question.question}</p>
                          <p className="mb-1 text-green-600">
                            <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                          </p>
                          <p className="text-neutral-700 mt-2 text-sm border-t border-neutral-200 pt-2">
                            <span className="font-medium">Explanation:</span> {question.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => navigate('/apostille/quiz')}
                  className="button-outline"
                >
                  Retake Quiz
                </button>
                <button 
                  onClick={() => navigate('/apostille')}
                  className="button-primary"
                >
                  Learn More About Apostille
                </button>
              </div>
            </div>
            
            <div className="bg-proof/5 border border-proof/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-proof mb-4">Need Professional Apostille Services?</h3>
              <p className="mb-4">
                Navigating international document requirements can be complex. Bridge Notary offers expert apostille and authentication services to ensure your documents are properly prepared for international use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="button-primary"
                >
                  Get Expert Help
                </button>
                <button 
                  onClick={() => navigate('/services/apostille')}
                  className="button-outline"
                >
                  Our Apostille Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuizResultsPage;
