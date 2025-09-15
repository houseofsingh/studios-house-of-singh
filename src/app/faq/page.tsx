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
        title: "Approach",
        items: [
          {
            question: "How do you build design systems?",
            answer: [
              "We create design systems that balance consistency with flexibility, typically starting with a core component library that we test with real use cases. Implementation includes documentation, governance guidelines, and training for your internal teams.",
            ],
          },
          {
            question: "How do you measure brand impact?",
            answer: [
              "We establish clear metrics at project outset, combining traditional brand health indicators with specific business outcomes. Our strategy team works with your analytics department to create custom measurement frameworks that track both immediate results and long-term brand value creation.",
              "",
              "Throughout our engagements, we continuously refine these measurements based on emerging data and market dynamics. This includes quarterly deep-dive analytics sessions where we analyze trends, identify opportunities, and adjust our approach to maximize impact across all channels and touchpoints.",
            ],
          },
          {
            question: "How do you manage scope changes?",
            answer: [
              "We build flexibility into our project structures while maintaining clear boundaries. Changes are evaluated against project goals and timeline impact. Our project leads work proactively to identify potential scope shifts early, allowing for thoughtful discussion and adjustment.",
            ],
          },
          {
            question: "Who owns the IP for deliverables?",
            answer: [
              "We typically transfer full ownership of all deliverables to clients, including design systems, code, and associated documentation. For custom tools we develop, we can structure agreements that allow shared usage rights while protecting your competitive advantage.",
            ],
          },
          {
            question: "What's your approach to sustainable digital design?",
            answer: [
              "We consider environmental impact in our technical decisions, from server architecture to front-end optimization. Our digital sustainability framework helps clients reduce their digital carbon footprint while improving performance and user experience.",
            ],
          },
          {
            question: "What's your accessibility standard?",
            answer: [
              "Accessibility is a fundamental part of our design process, not an afterthought. We design and test to WCAG 2.1 AA standards by default, and we can support AAA compliance when required. Our team includes certified accessibility specialists who review all major deliverables.",
              "",
              "Our commitment to accessibility extends beyond technical compliance to include user testing with diverse ability groups and regular accessibility audits. We also provide training to help your teams maintain accessibility standards after launch.",
            ],
          },
          {
            question: "What's your accessibility standard?",
            answer: [
              "Accessibility is a fundamental part of our design process, not an afterthought. We design and test to WCAG 2.1 AA standards by default, and we can support AAA compliance when required. Our team includes certified accessibility specialists who review all major deliverables.",
              "",
              "Our commitment to accessibility extends beyond technical compliance to include user testing with diverse ability groups and regular accessibility audits. We also provide training to help your teams maintain accessibility standards after launch.",
            ],
          },
        ],
      },
      {
        title: "Business",
        items: [
          {
            question: "What's your experience with AI implementation?",
            answer: [
              "Our approach combines deep technical expertise with practical business application. Rather than chasing trends, we focus on identifying specific areas where AI can create measurable value for your business, always prioritizing transparency and ethical considerations.",
              "",
              "We maintain an active AI research practice, collaborating with academic institutions and industry partners to stay at the forefront of developments. This allows us to bring tested, practical applications of AI to our clients while avoiding the pitfalls of implementing immature technologies.",
            ],
          },
          {
            question: "What's your crisis response protocol?",
            answer: [
              "We maintain dedicated rapid response capabilities for our retained clients, with clear escalation protocols and response time agreements. For crisis situations, we can typically mobilize a core team within 24 hours.",
              "",
              "Our crisis response framework includes pre-defined communication channels, decision-making protocols, and resource allocation procedures. We regularly conduct crisis simulation exercises to ensure our teams can respond effectively under pressure.",
            ],
          },
          {
            question: "Do you have Web3 expertise?",
            answer: [
              "Yes, we've developed several Web3 projects, focusing on practical applications that solve real business problems. Our approach emphasizes user experience and business value over technical complexity, ensuring solutions are both innovative and usable.",
            ],
          },
          {
            question: "Do you work with regulated industries?",
            answer: [
              "Yes, particularly in finance, healthcare, and aerospace. Our team includes specialists familiar with regulatory frameworks in these sectors, and we've developed specific workflows to ensure compliance while maintaining creative excellence. We can provide relevant case studies upon request.",
            ],
          },
          {
            question: "Will our core team stay consistent?",
            answer: [
              "We maintain core team consistency throughout the duration of your project, typically comprising a strategic lead, creative director, and project lead. We scale the wider team based on project phases and requirements, always ensuring proper knowledge transfer.",
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
      href: "/company/contact-2",
      title: "Get in touch",
    },
  };

  return <GetInTouch {...mock} />;
}
