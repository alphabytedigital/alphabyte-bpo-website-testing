"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Define the shape of the data for each card
type CardData = {
  id: number;
  title: string;
  description: string;
};

// Data for the cards
const cardData: CardData[] = [
  {
    id: 1,
    title: "On-Demand Scalability",
    description: "Instantly scale your support team up or down based on call volume, product launches, or seasonal demand. Never pay for idle agents again."
  },
  {
    id: 2,
    title: "Expertise in Your Tools",
    description: "Our agents become experts in your specific SaaS platforms and internal tools, providing support that feels like it's coming from an in-house team."
  },
  {
    id: 3,
    title: "Actionable Insights",
    description: "We don't just answer tickets. We analyze your support data to provide you with actionable insights that help improve your product and user experience."
  },
];
const cardCount = cardData.length;

export default function ScrollingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#111111]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative h-[50vh] w-[80vw] md:h-[60vh] md:w-[60vw] lg:w-[40vw]">
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              index={index}
              scrollYProgress={scrollYProgress}
              data={card}
            />
          ))}
          {/* Call to action that appears after cards are gone */}
          <CallToAction scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

// Individual Card Component
function Card({
  index,
  scrollYProgress,
  data,
}: {
  index: number;
  scrollYProgress: any;
  data: CardData;
}) {
  const start = index / cardCount;
  const end = start + (1 / cardCount);
  const exitDirection = index % 2 === 0 ? -1 : 1;

  // Animate the scale of the card behind the current one to "grow" into place
  const scale = useTransform(scrollYProgress, [start - 0.05, start, end], [0.95, 1, 0.85]);
  
  const y = useTransform(scrollYProgress, [start - 0.05, start], ["4%", "0%"]);
  
  // Swipe animation properties
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const rotate = useTransform(scrollYProgress, [start, end], [0, 5 * exitDirection]);
  const x = useTransform(scrollYProgress, [start, end], ["0%", `${120 * exitDirection}%`]);

  return (
    <motion.div
      style={{
        scale,
        y,
        x,
        rotate,
        zIndex: cardCount - index, // <-- THIS IS THE KEY FIX for stacking order
      }}
      className="absolute top-0 flex h-full w-full flex-col justify-center gap-4 rounded-xl border border-white/20 bg-[#1a1a1a] p-8 text-center"
    >
      <h3 className="text-2xl font-bold text-red-500">{data.title}</h3>
      <p className="text-white/80">{data.description}</p>
    </motion.div>
  );
}

// Call to Action Component
function CallToAction({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  
  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Elevate Your Support?</h2>
        <button className="bg-red-600 px-8 py-4 rounded-md hover:bg-red-700 transition-colors font-semibold text-lg">
            Get a Quote
        </button>
    </motion.div>
  )
}