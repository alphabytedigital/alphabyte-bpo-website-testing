import Section from "@/components/Section";

export default function FeaturesPage() {
  return (
    <main>
      {/* --- FIRST FULL-SCREEN SECTION --- */}
      <Section
        title="Welcome to Full-Screen Scrolling"
        subtitle="This section takes up the entire viewport height for an immersive experience. Scroll down to see the next one."
        fullScreen={true}
      >
        {/* You can add any content here, or leave it empty for a simple title section */}
      </Section>

      {/* --- SECOND FULL-SCREEN SECTION --- */}
      <Section
        title="Powered by Tailwind CSS"
        subtitle="We use conditional classes to make the sections fill the screen, providing a modern, app-like feel."
        fullScreen={true}
      >
        <div className="text-center text-white/60">
          <p>(Content for the second section)</p>
        </div>
      </Section>

      {/* --- A REGULAR, NON-FULL-SCREEN SECTION --- */}
      <Section
        title="Standard Content Flow"
        subtitle="This is a regular section, just like on the homepage. It only takes up the space its content needs."
      >
        <div className="bg-white/5 p-8 rounded-lg max-w-2xl mx-auto text-center">
          <p>Normal content continues here.</p>
        </div>
      </Section>
    </main>
  );
}