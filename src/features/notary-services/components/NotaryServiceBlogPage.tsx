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
      {/* Breadcrumbs */}
      <div className="w-full bg-off-white border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Services</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal/70">{title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-professional-blue/20">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-wider uppercase text-professional-blue mb-4">
            Notary Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-charcoal">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-professional-blue font-semibold mb-6">
            {subtitle}
          </p>
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl leading-relaxed mb-8">
            {heroSummary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={ctaLink}
              className="bg-professional-blue text-white font-semibold px-8 py-4 text-lg hover:bg-professional-blue/90 transition-all"
            >
              {ctaText}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-professional-blue text-professional-blue font-semibold px-8 py-4 text-lg hover:bg-professional-blue hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured/Main Article */}
              <article className="border-l border-professional-blue pl-6 py-4">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-professional-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Featured
                  </span>
                  {mainArticle.readTime && (
                    <span className="text-neutral-500 text-sm">
                      {mainArticle.readTime} read
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                  {mainArticle.title}
                </h2>
                <div className="max-w-none">
                  {mainArticle.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`text-lg text-charcoal/70 leading-[1.9] mb-6 ${
                        idx === 0
                          ? "first-letter:text-5xl first-letter:font-bold first-letter:text-professional-blue first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                          : ""
                      } ${
                        idx === 1
                          ? "pl-6 border-l-4 border-professional-blue/30 text-charcoal italic"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-professional-blue/20">
                  <Link
                    to={ctaLink}
                    className="inline-flex items-center text-professional-blue font-semibold hover:text-professional-blue/80 transition-colors"
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
                <h3 className="text-2xl font-bold text-charcoal mb-8">
                  Related Articles
                </h3>
                <div className="grid gap-6">
                  {relatedArticles.map((article) => (
                    <article
                      key={article.id}
                      id={article.id}
                      className="border-l border-professional-blue pl-6 py-4 overflow-hidden transition-all"
                    >
                      {/* Article Card Header */}
                      <button
                        onClick={() =>
                          setExpandedArticle(
                            expandedArticle === article.id ? null : article.id
                          )
                        }
                        className="w-full p-6 md:p-8 text-left hover:bg-professional-blue/5 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            {article.readTime && (
                              <span className="text-charcoal/70 text-sm mb-2 block">
                                {article.readTime} read
                              </span>
                            )}
                            <h4 className="text-xl md:text-2xl font-bold text-charcoal mb-3">
                              {article.title}
                            </h4>
                            <p className="text-charcoal/70 leading-relaxed">
                              {article.summary}
                            </p>
                          </div>
                          <div
                            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border border-professional-blue/20 transition-transform ${
                              expandedArticle === article.id ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-professional-blue"
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
                        <div className="px-6 md:px-8 pb-8 border-t border-professional-blue/20">
                          <div className="pt-8 space-y-6">
                            {article.paragraphs.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className={`text-lg leading-[1.9] ${
                                  idx === 0
                                    ? "text-charcoal font-medium text-xl"
                                    : "text-charcoal/70"
                                } ${
                                  idx === article.paragraphs.length - 1
                                    ? "bg-professional-blue/5 p-5 border-l-4 border-professional-blue text-charcoal"
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
              <div className="border-l border-professional-blue pl-6 py-4 sticky top-24">
                <h4 className="font-bold text-charcoal mb-4">In This Guide</h4>
                <nav className="space-y-2">
                  <div className="text-sm text-professional-blue font-medium pb-2 border-b border-professional-blue/20">
                    {mainArticle.title}
                  </div>
                  {relatedArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => scrollToArticle(article.id)}
                      className="block w-full text-left text-sm text-charcoal/70 hover:text-professional-blue py-2 transition-colors"
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
      <section className="py-20 md:py-28 bg-professional-blue/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional, discreet notary services available when you need them.
          </p>
          <Link
            to={ctaLink}
            className="inline-block bg-professional-blue text-white hover:bg-professional-blue/90 font-bold py-5 px-12 text-xl transition-all"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotaryServiceBlogPage;
