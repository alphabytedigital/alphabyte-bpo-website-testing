import Section from "@/components/Section";
import HeroBackground from "@/components/HeroBackground";
import ScrollingCards from "@/components/ScrollingCards"; // <-- Import the new component

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 py-20 lg:py-32">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
            Your On-Demand <span className="text-red-500">Technical Support</span> Team
          </h1>
          <p className="text-lg text-white/80 mt-6 max-w-3xl">
            Whether you're supporting your employees or your customers, we provide
            the expert remote support that lets you focus on your core business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
              Request a Quote
            </button>
            <button className="border border-white/50 px-6 py-3 rounded-md hover:bg-white/10 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent z-20" />
      </section>

      {/* --- SCROLLING CARDS SECTION --- */}
      <ScrollingCards />

      {/* --- "WHO WE HELP" SECTION --- */}
      <Section
        title="Built For Your Unique Needs"
        subtitle="We offer two specialized support models designed for distinct business challenges."
      >
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 p-8 rounded-lg border border-transparent hover:border-red-500 transition-colors">
            <h3 className="text-2xl font-bold mb-4">For Your Employees</h3>
            <p className="text-white/80 mb-6">
              Free up your internal teams. We act as your remote IT helpdesk,
              handling the day-to-day technical support for your employees'
              operating systems, M365/GWS, apps, and connectivity issues.
            </p>
            <span className="font-semibold text-red-500">Best for:</span>
            <ul className="list-disc list-inside mt-2 text-white/70">
              <li>Growing businesses needing to scale support.</li>
              <li>Companies wanting to reduce internal IT workload.</li>
              <li>Organizations undergoing technological changes.</li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-lg border border-transparent hover:border-red-500 transition-colors">
            <h3 className="text-2xl font-bold mb-4">For Your Customers</h3>
            <p className="text-white/80 mb-6">
              Let your developers focus on building your product. We act as your
              dedicated Tier 1 customer support team, guiding your users,
              managing your knowledge base, and ensuring your customers succeed.
            </p>
            <span className="font-semibold text-red-500">Best for:</span>
            <ul className="list-disc list-inside mt-2 text-white/70">
              <li>SaaS startups looking for a customer support team.</li>
              <li>Companies launching a new software product.</li>
              <li>Businesses needing 24/7 user support coverage.</li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* --- "HOW WE PARTNER" SECTION --- */}
      <Section
        title="How We Partner With You"
        subtitle="Our partnership model is built on transparency and deep integration to become a true extension of your team."
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-500">1. Initial Knowledge Transfer</h3>
            <p className="text-white/70">Your team provides initial training on your core business applications and specific SaaS platforms.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-500">2. Continuous Learning</h3>
            <p className="text-white/70">We establish a shared communication channel for updates on new features, policies, and user concerns.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-500">3. Proactive Syncs</h3>
            <p className="text-white/70">We schedule regular syncs to discuss ticket trends, user feedback, and upcoming technology changes.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}