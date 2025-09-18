import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import GetInTouch from "@/components/hos/sections/get-in-touch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "Frequently Asked Questions",
    items: [
      {
        title: "Collaboration & Partnership",
        items: [
          {
            question: "What is your process for starting a new project?",
            answer: [
              "We begin with a discovery session to understand your goals, challenges, and audience. From there, we create a tailored proposal outlining scope, timelines, and deliverables. Once aligned, we onboard you into our system so every step is structured, transparent, and collaborative.",
            ],
          },
          {
            question: "Do you offer fractional design team support?",
            answer: [
              "Yes. Through fractional partnerships, we act as your extended design team without the overhead of a full-time hire. This allows startups and growing businesses to access high-level creative direction and execution on a flexible basis.",
            ],
          },
          {
            question: "Do you engage in design for equity partnerships?",
            answer: [
              "Selectively. For founders whose vision aligns with our values, we sometimes offer design systems in exchange for equity. This is a curated process where we evaluate brand potential, growth trajectory, and alignment before moving forward.",
            ],
          },
          {
            question: "Do you provide retainer packages for monthly support?",
            answer: [
              "Yes. We offer tiered retainer packages that cover ongoing design needs such as campaign graphics, social media content, and founder branding. Retainers ensure consistent output, priority access, and deep alignment with your evolving brand.",
            ],
          },
        ],
      },
      {
        title: "Global Presence & Content",
        items: [
          {
            question: "Do you work with clients outside Canada?",
            answer: [
              "Yes. While based in Mississauga, we collaborate with clients in India, the UK, and beyond. Our systems and workflows are designed for seamless global collaboration, making geography no barrier to great design.",
            ],
          },
          {
            question: "Do you provide ongoing brand content support?",
            answer: [
              "Absolutely. Many clients retain us to manage their visual storytelling across campaigns, social platforms, and events. We ensure content remains consistent, fresh, and aligned with the larger brand system.",
            ],
          },
          {
            question:
              "How do you approach photography differently for brands, weddings, and real estate?",
            answer: [
              "Each requires a unique lens. For brands, we focus on storytelling and identity. For weddings, it’s about capturing emotion and narrative. For real estate, clarity and space take priority. Our approach adapts while maintaining a consistent standard of quality.",
            ],
          },
          {
            question:
              "Do you offer video and social media content creation as well?",
            answer: [
              "Yes. We produce short-form video content, reels, and digital campaigns tailored for modern platforms. This complements our photography and design services, giving clients cohesive storytelling across formats.",
            ],
          },
          {
            question:
              "Can you create both strategy and execution under one roof?",
            answer: [
              "Yes. We bridge strategy and execution so you don’t need multiple vendors. From brand frameworks and messaging to photography, video, and design systems — everything is integrated for clarity and consistency.",
            ],
          },
          {
            question:
              "How do you maintain consistency across design and content?",
            answer: [
              "Through brand guidelines, system-led design, and AI-supported workflows. Every asset is created within a defined framework, ensuring your brand feels consistent whether it’s a logo, a campaign, or a social post.",
            ],
          },
        ],
      },
    ],
  };
  return (
    <>
      <div
        className="fade-in-first"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section title">
          <div className="container---main">
            <h1 className="title-large">{mock.title}</h1>
          </div>
        </section>
      </div>
      <div
        className="fade-in-second"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {mock.items.map((item, index) => (
          <section key={index} className="section faq">
            <div className="container---main">
              <div className="faq-section">
                <div className="title-small">{item.title}</div>
                <Accordion type="multiple" className="accordion-style-a">
                  {item.items?.map((item, index) => (
                    <React.Fragment key={index}>
                      <AccordionItem
                        value={String(index)}
                        className="accordion-panel"
                      >
                        <AccordionTrigger asChild>
                          <div className="accordion-title faq-accordion">
                            <div className="large-text accordion-title-text">
                              {item.question}
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792f7abe0a9c6be2c9c5215_interface-icon-plus.svg"
                              alt="Plus icon"
                              className="accordion-title-icon"
                            />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                          <div className="accordion-content-wrapper">
                            <div className="accordion-content">
                              <div className="content-medium">
                                <div className="body-text text-base">
                                  {item.answer.map((row, index) => (
                                    <React.Fragment key={index}>
                                      {index !== 0 && <br />}
                                      {row}
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </React.Fragment>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function SectionTwo() {
  const mock = {
    title:
      "If you have any further questions or enquiries, please get in touch with our team via the contact page.",
    cta: {
      href: "/contact",
      title: "Start the conversation",
    },
  };

  return <GetInTouch {...mock} />;
}
