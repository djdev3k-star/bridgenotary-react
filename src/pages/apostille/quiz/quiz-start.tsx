import React from 'react';
import ApostilleQuiz from '@/features/apostille/components/ApostilleQuiz';
import Layout from '@/components/layout/Layout';

const QuizStartPage: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-proof mb-4">Apostille Knowledge Quiz</h1>
            <p className="text-xl text-neutral-600 mb-8">Answer 10 questions to test your apostille knowledge</p>
          </div>
          
          <ApostilleQuiz />
        </div>
      </section>
    </Layout>
  );
};

export default QuizStartPage;
