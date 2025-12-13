import React from "react";
import { Link } from "react-router-dom";
import NotaryServicesSidebar from "@/features/notary-services/components/NotaryServicesSidebar";

interface Article {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  readTime?: string;
}

interface NotaryServiceBlogPageProps {
  title: string;
  subtitle: string;
  heroSummary: string;
  mainArticle: Article;
  relatedArticles: Article[];
  ctaText?: string;
  ctaLink?: string;
}

const NotaryServiceBlogPage: React.FC<NotaryServiceBlogPageProps> = ({
  title,
  subtitle,
  heroSummary,
  mainArticle,
  relatedArticles,
  ctaText = "Schedule an Appointment",
  ctaLink = "/book",
}) => {
  const [expandedArticle, setExpandedArticle] = React.useState<string | null>(null);

  const scrollToArticle = (id: string) => {
    setExpandedArticle(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-proof/60 mb-4">
            Notary Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-proof">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">
            {subtitle}
          </p>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl leading-relaxed mb-8">
            {heroSummary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={ctaLink}
              className="bg-electric-blue text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all"
            >
              {ctaText}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-proof text-proof font-semibold px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured/Main Article */}
              <article className="bg-white p-8 md:p-12 shadow-sm border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-electric-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Featured
                  </span>
                  {mainArticle.readTime && (
                    <span className="text-neutral-500 text-sm">
                      {mainArticle.readTime} read
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-proof leading-tight mb-8">
                  {mainArticle.title}
                </h2>
                <div className="max-w-none">
                  {mainArticle.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`text-lg text-neutral-700 leading-[1.9] mb-6 ${
                        idx === 0
                          ? "first-letter:text-5xl first-letter:font-bold first-letter:text-proof first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                          : ""
                      } ${
                        idx === 1
                          ? "pl-6 border-l-4 border-electric-blue/30 text-neutral-800 italic"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <Link
                    to={ctaLink}
                    className="inline-flex items-center text-electric-blue font-semibold hover:underline"
                  >
                    Schedule Your Appointment
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Related Articles Section */}
              <div>
                <h3 className="text-2xl font-bold text-proof mb-8">
                  Related Articles
                </h3>
                <div className="grid gap-6">
                  {relatedArticles.map((article) => (
                    <article
                      key={article.id}
                      id={article.id}
                      className="bg-white shadow-sm border border-neutral-200 overflow-hidden transition-all"
                    >
                      {/* Article Card Header */}
                      <button
                        onClick={() =>
                          setExpandedArticle(
                            expandedArticle === article.id ? null : article.id
                          )
                        }
                        className="w-full p-6 md:p-8 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            {article.readTime && (
                              <span className="text-neutral-500 text-sm mb-2 block">
                                {article.readTime} read
                              </span>
                            )}
                            <h4 className="text-xl md:text-2xl font-bold text-proof mb-3">
                              {article.title}
                            </h4>
                            <p className="text-neutral-600 leading-relaxed">
                              {article.summary}
                            </p>
                          </div>
                          <div
                            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border border-neutral-300 transition-transform ${
                              expandedArticle === article.id ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-neutral-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Expanded Article Content */}
                      {expandedArticle === article.id && (
                        <div className="px-6 md:px-8 pb-8 border-t border-neutral-200">
                          <div className="pt-8 space-y-6">
                            {article.paragraphs.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className={`text-lg leading-[1.9] ${
                                  idx === 0
                                    ? "text-neutral-800 font-medium text-xl"
                                    : "text-neutral-700"
                                } ${
                                  idx === article.paragraphs.length - 1
                                    ? "bg-electric-blue/5 p-5 border-l-4 border-electric-blue text-neutral-800"
                                    : ""
                                }`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <NotaryServicesSidebar currentService={title} />

              {/* Quick Links to Articles */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200 sticky top-24">
                <h4 className="font-bold text-proof mb-4">In This Guide</h4>
                <nav className="space-y-2">
                  <div className="text-sm text-electric-blue font-medium pb-2 border-b border-neutral-200">
                    {mainArticle.title}
                  </div>
                  {relatedArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => scrollToArticle(article.id)}
                      className="block w-full text-left text-sm text-neutral-600 hover:text-electric-blue py-2 transition-colors"
                    >
                      {article.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional, discreet notary services available when you need them.
          </p>
          <Link
            to={ctaLink}
            className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotaryServiceBlogPage;
