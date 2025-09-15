import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import React from "react";
import { cn } from "@/lib/utils";
import Clients from "@/components/hos/sections/clients";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionOneO />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "We power growth through thoughtful design and clear strategy.",
    cta: {
      href: "/work",
      title: "See our work",
    },
    marquee: [
      {
        items: [
          {
            type: "hero-marquee-item",
            src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15.webp",
          },
          {
            type: "w-dyn-list",
            items: [
              {
                href: "/projects/invarion",
                src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp",
                subHeading:
                  "Defining the future of mixed reality through intuitive interaction design",
                cta: "See Project",
              },
            ],
          },
          {
            type: "hero-marquee-item",
            src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c905fe87e145ef6d34_square-12.webp",
          },
          {
            type: "w-dyn-list",
            items: [
              {
                href: "/projects/dunham-co",
                src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09.webp",
                subHeading:
                  "Creating a digital ecosystem for the modern cycling enthusiast",
                cta: "See Project",
              },
            ],
          },
        ],
      },
    ],
  };
  return (
    <section className="section hero">
      <div className="container---main">
        <div className="vertical-section tight-spacing">
          <div
            className="fade-in-first"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="hero-title">
              <div className="content-long">
                <h1 className="title-large">{mock.title}</h1>
              </div>
              <Link
                data-wf--button--variant="large"
                href={mock.cta.href}
                className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">{mock.cta.title}</div>
                  <div className="button-text">{mock.cta.title}</div>
                </div>
              </Link>
            </div>
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
            <Marquee className="marquee [--duration:60s] w-full">
              {[mock.marquee || [], mock.marquee || []]
                .flat()
                .map((marquee, index) => (
                  <div
                    key={index}
                    className="marquee-group"
                    style={
                      {
                        // transform:
                        //   "translate3d(-17.666%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        // transformStyle: "preserve-3d",
                        // willChange: "transform",
                      }
                    }
                  >
                    <div className="hero-marquee-items">
                      {marquee.items?.map((item, index) => (
                        <React.Fragment key={index}>
                          {item.type === "hero-marquee-item" && (
                            <img
                              src={item.src}
                              alt=""
                              // sizes="(max-width: 1920px) 100vw, 1920px"
                              // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca88558037e6c209d3_square-15.webp 1920w"
                              className="hero-marquee-item"
                            />
                          )}
                          {item.type === "w-dyn-list" && (
                            <div className="w-dyn-list">
                              <div role="list" className="w-dyn-items">
                                {item.items?.map((dynItem, index) => (
                                  <div
                                    key={index}
                                    role="listitem"
                                    className="w-dyn-item"
                                  >
                                    <a
                                      href={dynItem.href}
                                      className="wide-project inside-slider w-inline-block"
                                    >
                                      <img
                                        src={dynItem.src}
                                        alt=""
                                        // sizes="100vw"
                                        // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp 1920w"
                                        className="wide-project-image"
                                        style={{ opacity: "0.8" }}
                                      />
                                      <div className="subheading wide-project-title">
                                        {dynItem.subHeading}
                                      </div>
                                      <div className="wide-project-button">
                                        <div className="button white-large">
                                          <div className="button-text-wrapper white-large-2">
                                            <div className="button-text white-large-4">
                                              {dynItem.cta}
                                            </div>
                                            <div className="button-text white-large-4">
                                              {dynItem.cta}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionOneO() {
  return <Clients />;
}

function SectionTwo() {
  const mock = {
    title: "Areas of impact",
    description:
      "Andersen delivers focused expertise to push brands and products forward",
    items: [
      {
        title: "Brand Strategy",
        description:
          "Transform your brand identity into a compelling brand story that resonates with your audience. We align your values and vision with market opportunities.",
        href: "/services/messaging",
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06.webp",
      },
      {
        title: "Messaging",
        description:
          "Craft compelling communications that capture your brand’s unique voice and connect with your target audience. We help you tell stories that drive engagement.",
        href: "/services/messaging",
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08.webp",
      },
      {
        title: "UX Design",
        description:
          "Create intuitive digital experiences that delight users and drive results. Our UX design solutions combine user research and strategic thinking to optimize interactions.",
        href: "/services/ux-design",
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07.webp",
      },
      {
        title: "Integration",
        description:
          "Connect your digital ecosystem to streamline operations and enhance user experience. We implement integrated solutions that maximize efficiency and data flow.",
        href: "/services/integration",
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09.webp",
      },
    ],
  };

  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="vertical-section">
            <div className="section-title">
              <div className="title-large">{mock.title}</div>
              <div className="large-text content-short">{mock.description}</div>
            </div>
            <div className="service-grid-collection w-dyn-list">
              <div role="list" className="service-grid w-dyn-items">
                {mock.items.map((item, index) => (
                  <div key={index} role="listitem" className="w-dyn-item">
                    <a
                      href={item.href}
                      className="service-grid-item w-inline-block"
                    >
                      <img
                        src={item.src}
                        loading="lazy"
                        alt=""
                        // sizes="100vw"
                        // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08.webp 1920w"
                        className="service-grid-image"
                      />
                      <div className="service-panel">
                        <div className="service-panel-title">
                          <div className="title-small">{item.title}</div>
                          <div className="circle-icon">
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6790339e0b57a757126051cb_interface-icon-arrow-right-white.svg"
                              alt="Arrow pointing right icon"
                              className="invert"
                            />
                          </div>
                        </div>
                        <div className="content-short">
                          <div className="body-text">{item.description}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionThree() {
  const mock = {
    title: "Our achievements",
    items: [
      {
        stats: "150",
        description: ["Digital products", "launched"],
      },
      {
        stats: "87%",
        description: ["Average client", "retention rate"],
      },
      {
        stats: "$1.2B",
        description: ["Client revenue", "growth"],
      },
      {
        stats: "4",
        description: ["Teams working", "globally"],
      },
    ],
  };

  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="metrics-section">
            <div className="title-small">{mock.title}</div>
            <div className="metrics-grid">
              {mock.items.map((metric, index) => (
                <div key={index} className="metric">
                  <div className="title-huge">{metric.stats}</div>
                  <div className="body-text">
                    {metric.description.map((row, index) => (
                      <React.Fragment key={index}>
                        {index !== 0 && <br />}
                        {row}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFour() {
  const mock = {
    title: "Case Study",
    subtitle: "Redefining premium audio through human-centered innovation",
    metric: {
      stats: "142%",
      description: "Increase in direct-to-consumer sales within first quarter",
    },
    cta: {
      title: "Read Case Study",
      href: "/case-studies/lucident",
    },
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04.webp",
    badge:
      "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a1665ebcc2a3de1ea22076_customer-logo-lucident-white.svg",
  };
  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-wide">
                  <div
                    id="w-node-_1e603293-d63d-9a64-78d4-18c5ec36fea3-4281d677"
                    className="case-study-wide-contents"
                  >
                    <div className="large-text">{mock.title}</div>
                    <div className="title-medium case-study-wide-title">
                      {mock.subtitle}
                    </div>
                    <div className="case-study-wide-bottom">
                      <div className="metric">
                        <div className="title-huge">{mock.metric.stats}</div>
                        <div className="metric-explainer white-body-text">
                          {mock.metric.description}
                        </div>
                      </div>
                      <a
                        data-wf--button--variant="white-large"
                        href={mock.cta.href}
                        className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">{mock.cta.title}</div>
                          <div className="button-text">{mock.cta.title}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a
                    href={mock.cta.href}
                    className="hover-image-link w-inline-block"
                  >
                    <img
                      src={mock.src}
                      loading="lazy"
                      alt=""
                      // sizes="100vw"
                      // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04.webp 1920w"
                      className="hover-image case-study-image"
                    />
                    <div className="case-study-badge">
                      <img src={mock.badge} loading="lazy" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFive() {
  const mock = {
    title: "Customer reviews",
    description:
      "Hear from our clients and see why Andersen is rated 4.97/5 on Clutch.co",
    items: [
      {
        rating: 5,
        text: "“Their strategic insights helped us navigate the intersection of artificial intelligence and healthcare.”",
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b764a4145d4212aa394_customer-avatar-05.webp",
        fullName: "Daniel Garcia",
        designation: "Product Director, Chausseur",
      },
      {
        rating: 5,
        text: "“Their systematic thinking uncovered opportunities we hadn't considered possible.”",
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b76f651b8679a61c5df_customer-avatar-02.webp",
        fullName: "James Mitchell",
        designation: "Brand Director, Dunham & Co",
      },
      {
        rating: 5,
        text: "“Brought unprecedented clarity to our sustainable investment framework and client communications.”",
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b7618c5dea22323eb57_customer-avatar-03.webp",
        fullName: "Hannah Weber",
        designation: "Digital Director, Hermosa",
      },
      {
        rating: 5,
        text: "“Andersen captured our spirit while maintaining scientific credibility and the technical excellence we demand.”",
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b760f2770281ec92302_customer-avatar-06.webp",
        fullName: "Laura Thompson",
        designation: "CTO, Parallax AI",
      },
    ],
  };

  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="vertical-section">
            <div className="section-title">
              <div className="title-large">{mock.title}</div>
              <div className="large-text content-short">{mock.description}</div>
            </div>
            <Marquee className="marquee [--duration:60s] w-full">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="marquee-group">
                  <div className="testimonial-card-group">
                    {mock.items.map((item, index) => (
                      <div key={index} className="testimonial-card">
                        <div className="stars">
                          {Array.from({ length: item.rating || 0 }).map(
                            (_, index) => (
                              <img
                                key={index}
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930a271054837ad0380d68_interface-icon-star.svg"
                                alt="Star icon"
                                className={cn(
                                  "star-icon",
                                  ["_1", "_2", "_3", "_4", "_5"][index]
                                )}
                              />
                            )
                          )}
                        </div>
                        <div className="large-text testimonial-card-text">
                          {item.text}
                        </div>
                        <div className="quote-author-centered">
                          <img
                            // sizes="(max-width: 600px) 100vw, 600px"
                            // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b764a4145d4212aa394_customer-avatar-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b764a4145d4212aa394_customer-avatar-05.webp 600w"
                            alt=""
                            src={item.src}
                            className="customer-small"
                          />
                          <div>
                            <div>{item.fullName}</div>
                            <div className="quote-author-position">
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSix() {
  const mock = {
    title: "Working in over 20 international markets",
    cta: {
      title: "Get in touch",
      href: "/contact",
    },
  };
  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="wide-cta-box">
            <Marquee className="marquee [--duration:60s] w-full wide-cta-bg">
              <div className="marquee-group">
                <img
                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a16fd5070be8427c269c41_world.svg"
                  alt=""
                />
              </div>
              <div className="marquee-group">
                <img
                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a16fd5070be8427c269c41_world.svg"
                  alt=""
                />
              </div>
            </Marquee>
            <div className="title-large">{mock.title}</div>
            <a
              data-wf--button--variant="white-large"
              href={mock.cta.href}
              className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
            >
              <div className="button-text-wrapper">
                <div className="button-text">{mock.cta.title}</div>
                <div className="button-text">{mock.cta.title}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
