import Section from "@/components/Section";

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="container mx-auto flex flex-col items-center text-center px-4 py-20 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-bold">Our Service Catalog</h1>
        <p className="text-lg text-white/80 mt-6 max-w-3xl">
          A detailed look at the modules we offer. Each can be combined to create a
          support package tailored precisely to your needs.
        </p>
      </section>

      {/* Service Modules Detailed List */}
      <div className="container mx-auto px-4 pb-20">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Module A */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Module A: Foundational End-User Support
            </h2>
            <p className="text-white/80 mb-6">
              The bedrock of our service. We provide comprehensive support for the
              tools your team uses every day.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">In Scope:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Windows 10/11 & macOS troubleshooting.</li>
                  <li>Google Workspace & Microsoft 365 support.</li>
                  <li>Standard software (Adobe, browsers).</li>
                  <li>Basic network & VPN client issues.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Out of Scope:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Hardware failures & physical repairs.</li>
                  <li>OS reinstallations requiring physical access.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Module B */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Module B: Business Application & SaaS Support
            </h2>
            <p className="text-white/80">
              We become Tier 1 experts for the specific software that powers your
              business, acting as the first point of contact for your primary
              SaaS platforms.
            </p>
          </div>

          {/* Module C */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Module C: Proactive IT Operations
            </h2>
            <p className="text-white/80 mb-6">
              We move beyond reactive support to actively improve your IT
              environment.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
              <li>User Onboarding/Offboarding account management.</li>
              <li>Change management support & user adoption guides.</li>
              <li>Internal Knowledge Base management and creation.</li>
              <li>Monthly performance reports and analytics.</li>
            </ul>
          </div>

          {/* Module D */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Module D: Security & Compliance Support
            </h2>
            <p className="text-white/80 mb-6">
              We act as the first line of defense for your user endpoints.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
              <li>Monitoring endpoint security alerts and basic threat remediation.</li>
              <li>Assisting users with Mobile Device Management (MDM) enrollment.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}