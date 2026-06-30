import type { InnovationJourneyContent } from "@/lib/types";

/**
 * PHASE 1 PLACEHOLDER — replaced by site_content (key: journey_steps) in Phase 5.
 * Step order is LOCKED per Architecture Doc 4.10 — mirrors the 12-step
 * pipeline from the Idea Overview document. Do not reorder.
 */
export const placeholderJourney: InnovationJourneyContent = {
  heading: "Your Innovation Journey",
  subHeading: "From idea to deployed product — you're never alone at any stage.",
  steps: [
    { stepNumber: 1, icon: "lightbulb", title: "Idea / Problem Identification", description: "You share your idea or the problem you want to solve." },
    { stepNumber: 2, icon: "bot", title: "AI-Powered Requirement Analysis", description: "AI analyzes your requirements and defines the solution path." },
    { stepNumber: 3, icon: "cpu", title: "Intelligent Component Selection", description: "AI suggests the best components that match your need." },
    { stepNumber: 4, icon: "trending-down", title: "Alternative Components & Cost Optimization", description: "We provide alternative components to reduce cost." },
    { stepNumber: 5, icon: "circuit-board", title: "Circuit Design & Schematic Generation", description: "Our experts/AI create the circuit diagram and schematic." },
    { stepNumber: 6, icon: "code", title: "Code Generation & Library Support", description: "AI generates code, suggests libraries, and explains the logic." },
    { stepNumber: 7, icon: "layers", title: "PCB Design & Product Optimization", description: "PCB layout, routing, and design optimization for performance." },
    { stepNumber: 8, icon: "file-text", title: "Documentation & PPT Generation", description: "Automatic documentation, diagrams, and professional PPT." },
    { stepNumber: 9, icon: "wrench", title: "Prototype Development", description: "We build and test the prototype to make your idea real." },
    { stepNumber: 10, icon: "globe", title: "Website / Software Integration", description: "Web / mobile / IoT integration to give your project a digital identity." },
    { stepNumber: 11, icon: "rocket", title: "Testing & Deployment", description: "Thorough testing, bug fixing, and deployment for real-world use." },
    { stepNumber: 12, icon: "graduation-cap", title: "Internship / Mentorship / Continuous Support", description: "Guidance and continuous support to grow your innovation." },
  ],
};
