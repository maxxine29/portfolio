import Layout from "@/components/Layout";
import HeroExpressive from "@/components/HeroExpressive";

const marqueeItems = [
  "Vue.js",
  "Next.js",
  "TypeScript",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Figma",
  "Laravel",
  "React"
];

export default function Home() {
  return (
    <Layout>
      <HeroExpressive
        headlineParts={["Design-minded", "Engineer", "crafting lively, accessible web apps."]}
        subheading="I build playful, performant interfaces that respect users."
        primaryCta={{ text: "View Work", href: "/projects" }}
        secondaryCta={{ text: "Let's Work Together", href: "/contact" }}
        marqueeItems={marqueeItems}
      />
    </Layout>
  );
}