import BookingSidebar from "@/components/layout/BookingSidebar";

const resources = [
  { name: "Fee Sheet PDF", link: "#" },
  { name: "Sample Service Agreement", link: "#" },
  { name: "Client Checklist: Smooth Closing Prep", link: "#" },
];

const Resources = () => (
  <div className="section">
    <div className="flex flex-col md:flex-row gap-12">
      <main className="w-full md:w-2/3 lg:w-3/4">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-neutral-300"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
            Resources
          </span>
          <span className="h-px w-10 bg-neutral-300"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Resources & Downloads</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Access helpful materials for our notary clients and industry partners. These documents are provided to ensure a smooth and transparent process.
        </p>
        <ul className="space-y-6">
          {resources.map((r) => (
            <li key={r.name} className="card flex items-center justify-between">
              <span className="text-xl font-semibold text-proof">{r.name}</span>
              <a
                href={r.link}
                className="btn btn-secondary"
                download
              >Download</a>
            </li>
          ))}
        </ul>
      </main>
      <BookingSidebar />
    </div>
  </div>
);

export default Resources;
