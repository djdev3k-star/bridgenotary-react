const faqs = [
  {
    q: "What areas do you serve in Texas?",
    a: "We provide mobile and remote notary services for clients located in Texas, with a focus on the Dallas-Fort Worth Metroplex. We handle real estate signings, general notarizations, and apostille facilitation for documents issued in Texas. For apostilles, documents must originate from Texas (for example, Texas vital records, Texas court documents, or documents notarized by a Texas notary).",
  },
  {
    q: "What is an apostille and when do I need one?",
    a: "An apostille is a certificate issued by the Texas Secretary of State that confirms the authenticity of a Texas public document for use in another country that is part of the Hague Apostille Convention. You typically need an apostille for documents such as birth certificates, marriage certificates, school records, powers of attorney, or notarized affidavits that will be presented overseas.",
  },
  {
    q: "Can you issue the apostille yourself?",
    a: "No. Only the Texas Secretary of State can issue an apostille or authentication for Texas documents. As a notary signing agent, we prepare and notarize your documents correctly, then can assist with submitting them to the Secretary of State for apostille or authentication if you choose a full-service option.",
  },
  {
    q: "Which documents can you help apostille from Texas?",
    a: "Common documents include certified Texas birth and death certificates, marriage and divorce records, court judgments, adoption records, school transcripts and diplomas, and notarized powers of attorney or affidavits. Public records usually must be certified copies from the proper Texas office, while private documents must be properly notarized in Texas before the Secretary of State will issue an apostille.",
  },
  {
    q: "Do my documents need to be notarized before an apostille?",
    a: "Public documents like certified birth or death certificates from Texas generally do not need notarization; they must be official certified copies. Private documents such as affidavits, business agreements, letters, and copies of IDs or diplomas usually must be notarized in Texas with complete notarial wording, signature, date, and seal before they are eligible for an apostille.",
  },
  {
    q: "How long does the apostille process take in Texas?",
    a: "Processing time depends on how documents are submitted to the Secretary of State in Austin. In-person submissions are often processed within a few business days, while mail-in requests can take several weeks plus mailing time. We can discuss current average timelines and rush options, but final processing speed is controlled by the state, not by the notary.",
  },
  {
    q: "How much does a Texas apostille cost?",
    a: "The Texas Secretary of State charges a per-document fee for each apostille or authentication certificate issued. In addition to state fees, you may pay separate charges for notary services, shipping, and any apostille facilitation or courier service you choose. See our Pricing page for details.",
  },
  {
    q: "What is the difference between an apostille and an authentication/certification?",
    a: "An apostille is used when the receiving country is a member of the Hague Apostille Convention, while a certification or authentication is used for countries that are not part of the convention. The Texas Secretary of State issues a universal certificate that functions as an apostille for convention countries and a certification for non-convention countries, depending on the destination you list.",
  },
  {
    q: "Can you help with loan signings in Texas?",
    a: "Yes. As a Texas notary signing agent, we can handle real estate and loan signing packages, verify borrower identities, and supervise execution of documents in accordance with Texas notary law. We handle all residential and commercial loan documents including refinance, purchase, reverse mortgage, HELOC, equity, and more.",
  },
  {
    q: "Do you offer remote online notarization (RON) for Texas signers?",
    a: "Yes! Remote online notarization is permitted in Texas when performed by a commissioned Texas online notary using approved audio-video technology and following state rules. Availability of RON appointments depends on identification, document type, and the destination country's acceptance if the notarized document will be used internationally; some foreign recipients still prefer wet-ink signatures and paper apostilles.",
  },
  {
    q: "What IDs are accepted for notarizations in Texas?",
    a: "Texas notaries typically rely on current government-issued photo identification such as a state driver license, state ID card, U.S. passport, or other qualifying government ID that includes a photo, signature, and physical description. If a signer does not have acceptable ID, Texas law allows alternative methods in some situations (for example, credible witnesses), but these options are limited and must meet state requirements.",
  },
  {
    q: "Can you notarize or apostille documents issued outside Texas?",
    a: "A Texas notary can notarize signatures made in Texas, but cannot authenticate or certify the official records of another state or country. For apostilles, each state or country generally authenticates its own records, so documents issued in another state usually must be sent to that state's authority for apostille.",
  },
  {
    q: "Do you provide legal advice about apostilles or immigration?",
    a: "No. Notaries in Texas are not attorneys and cannot give legal advice, choose documents for you, or tell you what you 'should' sign for legal or immigration purposes. This service can explain general notary and apostille procedures, but you should consult a licensed attorney or the requesting authority for legal guidance.",
  },
  {
    q: "How should I prepare before my appointment?",
    a: "Have all pages of your document ready, including any attachments, and do not sign anything that must be notarized until you are in front of the notary. Bring valid ID, confirm the exact name and country where the document will be used (for apostille requests), and check with the receiving agency for any special wording or forms they require.",
  },
  {
    q: "Are you certified and insured?",
    a: "Yes, Bridge Notary is NNA certified, background screened, and fully bonded & insured (minimum $25,000 E&O coverage).",
  },
  {
    q: "Do you offer after-hours or weekend appointments?",
    a: "Yes! We work evenings and weekends by appointment for urgent closings and convenience.",
  },
  {
    q: "How do I book?",
    a: "Use the Book Appointment page, contact us through our website, or reach out directly. We'll confirm availability and details promptly.",
  }
];

const faqCategories = [
  {
    category: "Apostille Services",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    questions: [
      {
        q: "What is an apostille and when do I need one?",
        a: "An apostille is a certificate issued by the Texas Secretary of State that confirms the authenticity of a Texas public document for use in another country that is part of the Hague Apostille Convention. You typically need an apostille for documents such as birth certificates, marriage certificates, school records, powers of attorney, or notarized affidavits that will be presented overseas.",
      },
      {
        q: "Can you issue the apostille yourself?",
        a: "No. Only the Texas Secretary of State can issue an apostille or authentication for Texas documents. As a notary signing agent, we prepare and notarize your documents correctly, then can assist with submitting them to the Secretary of State for apostille or authentication if you choose a full-service option.",
      },
      {
        q: "Which documents can you help apostille from Texas?",
        a: "Common documents include certified Texas birth and death certificates, marriage and divorce records, court judgments, adoption records, school transcripts and diplomas, and notarized powers of attorney or affidavits. Public records usually must be certified copies from the proper Texas office, while private documents must be properly notarized in Texas before the Secretary of State will issue an apostille.",
      },
      {
        q: "Do my documents need to be notarized before an apostille?",
        a: "Public documents like certified birth or death certificates from Texas generally do not need notarization; they must be official certified copies. Private documents such as affidavits, business agreements, letters, and copies of IDs or diplomas usually must be notarized in Texas with complete notarial wording, signature, date, and seal before they are eligible for an apostille.",
      },
      {
        q: "How long does the apostille process take in Texas?",
        a: "Processing time depends on how documents are submitted to the Secretary of State in Austin. In-person submissions are often processed within a few business days, while mail-in requests can take several weeks plus mailing time. We can discuss current average timelines and rush options, but final processing speed is controlled by the state, not by the notary.",
      },
      {
        q: "How much does a Texas apostille cost?",
        a: "The Texas Secretary of State charges a per-document fee for each apostille or authentication certificate issued. In addition to state fees, you may pay separate charges for notary services, shipping, and any apostille facilitation or courier service you choose. See our Pricing page for details.",
      },
      {
        q: "What is the difference between an apostille and an authentication/certification?",
        a: "An apostille is used when the receiving country is a member of the Hague Apostille Convention, while a certification or authentication is used for countries that are not part of the convention. The Texas Secretary of State issues a universal certificate that functions as an apostille for convention countries and a certification for non-convention countries, depending on the destination you list.",
      },
      {
        q: "Can you notarize or apostille documents issued outside Texas?",
        a: "A Texas notary can notarize signatures made in Texas, but cannot authenticate or certify the official records of another state or country. For apostilles, each state or country generally authenticates its own records, so documents issued in another state usually must be sent to that state's authority for apostille.",
      },
    ]
  },
  {
    category: "Notary Services",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    questions: [
      {
        q: "What areas do you serve in Texas?",
        a: "We provide mobile and remote notary services for clients located in Texas, with a focus on the Dallas-Fort Worth Metroplex. We handle real estate signings, general notarizations, and apostille facilitation for documents issued in Texas. For apostilles, documents must originate from Texas (for example, Texas vital records, Texas court documents, or documents notarized by a Texas notary).",
      },
      {
        q: "What IDs are accepted for notarizations in Texas?",
        a: "Texas notaries typically rely on current government-issued photo identification such as a state driver license, state ID card, U.S. passport, or other qualifying government ID that includes a photo, signature, and physical description. If a signer does not have acceptable ID, Texas law allows alternative methods in some situations (for example, credible witnesses), but these options are limited and must meet state requirements.",
      },
      {
        q: "How should I prepare before my appointment?",
        a: "Have all pages of your document ready, including any attachments, and do not sign anything that must be notarized until you are in front of the notary. Bring valid ID, confirm the exact name and country where the document will be used (for apostille requests), and check with the receiving agency for any special wording or forms they require.",
      },
      {
        q: "Are you certified and insured?",
        a: "Yes, Bridge Notary is NNA certified, background screened, and fully bonded & insured (minimum $25,000 E&O coverage).",
      },
      {
        q: "Do you provide legal advice about apostilles or immigration?",
        a: "No. Notaries in Texas are not attorneys and cannot give legal advice, choose documents for you, or tell you what you 'should' sign for legal or immigration purposes. This service can explain general notary and apostille procedures, but you should consult a licensed attorney or the requesting authority for legal guidance.",
      },
    ]
  },
  {
    category: "Loan Signing Services",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16H5v-4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 8h8" />
      </svg>
    ),
    questions: [
      {
        q: "Can you help with loan signings in Texas?",
        a: "Yes. As a Texas notary signing agent, we can handle real estate and loan signing packages, verify borrower identities, and supervise execution of documents in accordance with Texas notary law. We handle all residential and commercial loan documents including refinance, purchase, reverse mortgage, HELOC, equity, and more.",
      },
    ]
  },
  {
    category: "Remote Online Notarization (RON)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    questions: [
      {
        q: "Do you offer remote online notarization (RON) for Texas signers?",
        a: "Yes! Remote online notarization is permitted in Texas when performed by a commissioned Texas online notary using approved audio-video technology and following state rules. Availability of RON appointments depends on identification, document type, and the destination country's acceptance if the notarized document will be used internationally; some foreign recipients still prefer wet-ink signatures and paper apostilles.",
      },
    ]
  },
  {
    category: "Booking & General Information",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "Do you offer after-hours or weekend appointments?",
        a: "Yes! We work evenings and weekends by appointment for urgent closings and convenience.",
      },
      {
        q: "How do I book?",
        a: "Use the Book Appointment page, contact us through our website, or reach out directly. We'll confirm availability and details promptly.",
      },
    ]
  },
];

const FAQ = () => (
  <div className="w-full">
    {/* Hero Section */}
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-professional-blue to-professional-blue/90">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6 border border-white/20">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white">Quick Answers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Find answers to common questions about notary services, apostilles, loan signings, and more.
          </p>
        </div>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-16 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Header */}
              <div className="mb-6 pb-4 border-b border-professional-blue/30">
                <h2 className="text-2xl font-bold text-charcoal">{category.category}</h2>
              </div>

              {/* Questions in Category */}
              <div className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-l border-professional-blue/40 hover:border-professional-blue pl-4 py-3 hover:bg-professional-blue/3 transition-all">
                    <h3 className="text-base font-semibold text-charcoal mb-2">{item.q}</h3>
                    <p className="text-charcoal/70 leading-relaxed text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-professional-blue/20">
          <div className="bg-professional-blue/8 border border-professional-blue/20 p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-4">Didn't Find Your Answer?</h3>
            <p className="text-lg text-charcoal/75 mb-8 max-w-2xl mx-auto">
              Our team is ready to help with any questions. Reach out directly and we'll provide personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white font-semibold py-4 px-8 transition-all rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
