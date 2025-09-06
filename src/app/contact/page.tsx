export default function ContactPage() {
  return (
    <main>
      <section className="container mx-auto flex flex-col items-center text-center px-4 py-20 lg:py-32">
        <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
        <p className="text-lg text-white/80 mt-6 max-w-2xl">
          The next step is a Discovery Call, where we will work with you to understand your specific environment and pain points. Following this call, we will provide a detailed proposal and pricing quote.
        </p>
        <div className="mt-8">
          <button className="bg-red-600 px-8 py-4 rounded-md hover:bg-red-700 transition-colors font-semibold text-lg">
            Schedule a Discovery Call
          </button>
        </div>
        <p className="text-white/60 mt-8">
          Or email us directly at <a href="mailto:support@alphabyte.com" className="underline hover:text-red-500">support@alphabyte.com</a>
        </p>
      </section>
    </main>
  );
}