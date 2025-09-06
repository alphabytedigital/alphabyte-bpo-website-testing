export default function PackagesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="container mx-auto flex flex-col items-center text-center px-4 py-20 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-bold">Our Service Packages</h1>
        <p className="text-lg text-white/80 mt-6 max-w-3xl">
          Predictable, per-user-per-month pricing designed to meet different business needs. Choose the plan that's right for you.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package 1: Essential Support */}
          <div className="bg-white/5 p-8 rounded-lg border border-transparent flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-red-500">Essential Support</h2>
              <p className="text-white/70 mt-2 mb-6 text-sm">
                Ideal for startups needing core IT coverage.
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">✓<span className="font-semibold">Channels:</span> Email, Portal</li>
                <li className="flex items-center gap-3">✓<span>Foundational Support (Module A)</span></li>
                <li className="flex items-center gap-3">✓<span>Basic Reporting</span></li>
              </ul>
            </div>
            <button className="w-full mt-8 border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white transition-colors font-semibold">
              Select Plan
            </button>
          </div>

          {/* Package 2: Business Pro */}
          <div className="bg-white/5 p-8 rounded-lg border border-red-500 relative flex flex-col">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-red-500">Business Pro</h2>
              <p className="text-white/70 mt-2 mb-6 text-sm">
                Ideal for growing businesses with specific SaaS needs.
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">✓<span className="font-semibold">Channels:</span> Email, Portal, Live Chat</li>
                <li className="flex items-center gap-3">✓<span>Foundational Support (Module A)</span></li>
                <li className="flex items-center gap-3">✓<span>SaaS Support (Module B)</span></li>
                <li className="flex items-center gap-3">✓<span>Knowledge Base (Basic Creation)</span></li>
                <li className="flex items-center gap-3">✓<span>Standard Reporting</span></li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
              Select Plan
            </button>
          </div>

          {/* Package 3: Enterprise Partner */}
          <div className="bg-white/5 p-8 rounded-lg border border-transparent flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-red-500">Enterprise Partner</h2>
              <p className="text-white/70 mt-2 mb-6 text-sm">
                Ideal for companies seeking a comprehensive, proactive IT partner.
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">✓<span className="font-semibold">Channels:</span> All, including Phone</li>
                <li className="flex items-center gap-3">✓<span>All Support Modules (A, B, C, D)</span></li>
                <li className="flex items-center gap-3">✓<span>User Onboarding/Offboarding</span></li>
                <li className="flex items-center gap-3">✓<span>Change Management</span></li>
                <li className="flex items-center gap-3">✓<span>Knowledge Base (Continuous Mgmt)</span></li>
                <li className="flex items-center gap-3">✓<span>Advanced Analytics</span></li>
              </ul>
            </div>
            <button className="w-full mt-8 border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white transition-colors font-semibold">
              Select Plan
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}