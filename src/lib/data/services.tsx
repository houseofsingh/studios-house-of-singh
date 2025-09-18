export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  src: string;
  whatWeDeliver: string[];
  cta: {
    title: React.ReactElement;
  };
  content: React.ReactElement;
};

export const services: Service[] = [
  {
    id: "brand-identity-visual-design",
    title: "Brand Identity & Visual Design",
    description:
      "We develop cohesive visual identities that distill your brand’s essence into thoughtful design systems — built for clarity, recognition, and enduring creative expression.",
    href: "/services/brand-identity-visual-design",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06.webp",
    whatWeDeliver: [
      "Brand and lifestyle photography",
      "Studio and product shoots",
      "Short-form video content",
      "Creative direction and shot planning",
      "Edited image sets with color grading",
      "Social-ready templates and layouts",
    ],
    cta: {
      title: (
        <>
          Is your brand ready for a visual system that endures?
          <br />
          Let’s build it together.
        </>
      ),
    },
    content: (
      <>
        <p>
          At House of Singh Studios, we believe a strong identity is the
          foundation of every lasting brand. Our approach goes beyond creating a
          logo, we build complete visual systems that balance strategy with
          craft. From typography, color, and iconography to art direction and
          collateral, we design identities that adapt seamlessly across digital
          and physical touchpoints.
        </p>
        <p>
          Each identity is shaped with clarity and consistency in mind, ensuring
          that every element tells the same story. By integrating AI-supported
          research with human-led design, we move with both speed and precision,
          giving founders a scalable visual language that grows as their
          business does.
        </p>
        <p>
          Our goal is to create timeless brand identities, crafted with
          intention, grounded in culture, and ready for the future.
        </p>
      </>
    ),
  },
  {
    id: "photography-content-creation",
    title: "Photography & Content Creation",
    description:
      "From brand-led photography to short-form content, we craft image narratives that articulate who you are and resonate across channels — with purpose and precision.",
    href: "/services/photography-content-creation",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08.webp",
    whatWeDeliver: [
      "Brand and lifestyle photography",
      "Studio and product shoots",
      "Short-form video content",
      "Creative direction and shot planning",
      "Edited image sets with color grading",
      "Social-ready templates and layouts",
    ],
    cta: {
      title: (
        <>
          Ready to bring your story to life through compelling visuals?
          <br />
          Let’s build it together.
        </>
      ),
    },
    content: (
      <>
        <p>
          Strong brands are powered by strong visuals. We create intentional
          photography and content that capture both the essence of your brand
          and the attention of your audience. From lifestyle shoots and
          portraits to product features and short-form video content, our
          process balances art direction with strategy.
        </p>
        <p>
          Each project is planned with precision, from storyboarding and
          location planning to post-production editing and color grading,
          ensuring that every image and video not only looks beautiful but also
          works hard for your business.
        </p>
        <p>
          By combining cultural sensitivity, creative direction, and scalable
          content systems, we deliver visuals that are timeless yet tailored to
          today’s fast-moving platforms.
        </p>
      </>
    ),
  },
  {
    id: "brand-strategy-voice",
    title: "Brand Strategy & Voice",
    description:
      "From brand-led photography to short-form content, we craft image narratives that articulate who you are and resonate across channels — with purpose and precision.",
    href: "/services/brand-strategy-voice",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07.webp",
    whatWeDeliver: [
      "Brand naming and positioning",
      "Mission, vision, and values frameworks",
      "Tone of voice guidelines",
      "Messaging and storytelling copy",
      "Taglines and campaign narratives",
      "Persona mapping and competitor insights",
    ],
    cta: {
      title: (
        <>
          Does your brand have a voice that carries?
          <br />
          Let’s build it together.
        </>
      ),
    },
    content: (
      <>
        <p>
          Every brand needs more than visuals, it needs a voice. We help
          founders define what they stand for and how they communicate, turning
          abstract ideas into clear frameworks that guide long-term growth. From
          positioning and naming to messaging and storytelling, our work ensures
          your brand speaks with confidence and consistency.
        </p>
        <p>
          We combine deep research, cultural insight, and strategic
          narrative-building to craft a voice that resonates with your audience
          while setting you apart in competitive markets. The result is not just
          words on a page, but a complete system for how your brand presents
          itself across platforms and moments.
        </p>
      </>
    ),
  },
  {
    id: "creative-ecosystem",
    title: "Creative Ecosystem",
    description:
      "Through long-term support models and flexible retainers, we embed within your team — extending design across campaigns, content, and brand moments as you grow.",
    href: "/services/creative-ecosystem",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09.webp",
    whatWeDeliver: [
      "Retainer packages for monthly support",
      "Campaign and rollout assets",
      "Social and event design",
      "Pitch decks and internal comms",
      "Fractional design team",
      "Design-for-equity partnerships (selective)",
    ],
    cta: {
      title: (
        <>
          Looking for a design partner who grows with you?
          <br />
          Let’s build it together.
        </>
      ),
    },
    content: (
      <>
        <p>
          A brand is not built in one moment, it grows through consistency. Our
          Creative Ecosystem offers ongoing support that functions as an
          extension of your team. Whether through retainer partnerships,
          campaign rollouts, or personal brand support for founders, we ensure
          your identity is applied with the same clarity it was created with.
        </p>
        <p>
          From social media content and pitch decks to event branding and merch
          design, we deliver the assets that keep your brand alive in the real
          world. For select startups, we also offer design-for-equity
          partnerships, investing in ideas we believe in by providing design
          systems that grow alongside the business.
        </p>
        <p>
          With House of Singh Studios, you don’t just hire a designer, you gain
          a team that understands your brand deeply and evolves with it.
        </p>
      </>
    ),
  },
];
