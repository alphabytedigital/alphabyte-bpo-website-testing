export default function HowItWorksPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="container mx-auto flex flex-col items-center text-center px-4 py-20 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-bold">Our Partnership Model</h1>
        <p className="text-lg text-white/80 mt-6 max-w-3xl">
          Our model is built on transparency and deep integration to become a true extension of your team.
        </p>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white/5 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-red-500 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Initial Knowledge Transfer</h3>
            <p className="text-white/70">Your team provides initial training on your core business applications and specific SaaS platforms.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white/5 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-red-500 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-white/70">We establish a shared communication channel for updates on new features, policies, and user concerns.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white/5 p-8 rounded-lg text-center">
            <div className="text-5xl font-bold text-red-500 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Proactive Syncs</h3>
            <p className="text-white/70">We schedule regular syncs to discuss ticket trends, user feedback, and upcoming technology changes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}