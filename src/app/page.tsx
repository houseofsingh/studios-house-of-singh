import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import React from "react";
import { cn } from "@/lib/utils";
import Clients from "@/components/hos/sections/clients";
import { caseStudies } from "@/lib/data/case-studies";
import { sanityFetch } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries/service";
import { urlFor } from "@/sanity/lib/image";
import { CLIENTS_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { TESTIMONIALS_QUERYResult } from "../../sanity.types";
import { PortableText } from "next-sanity";

export default async function Page() {
  const services = await sanityFetch({ query: SERVICES_QUERY });
  const clients = await sanityFetch({ query: CLIENTS_QUERY });
  const testimonials = await sanityFetch({ query: TESTIMONIALS_QUERY });

  const page = {
    services: {
      title: "Areas of Impact",
      description:
        "House of Singh Studios delivers focused expertise to push brands and products forward",
    },
  };
  return (
    <>
      <Header />
      <SectionOne />
      {/* <pre>{JSON.stringify(clients, null, 2)}</pre> */}
      {/* <SectionOneO /> */}
      <Clients list={clients} />
      {/**
       * -----------------------------------------------------------------------------
       * Areas of Impact / Services
       * -----------------------------------------------------------------------------
       */}
      {!!services.length && (
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
                  <div className="title-large">{page.services.title}</div>
                  <div className="large-text content-short">
                    {page.services.description}
                  </div>
                </div>
                <div className="service-grid-collection w-dyn-list">
                  <div role="list" className="service-grid w-dyn-items">
                    {services.map((service) => (
                      <div
                        key={service._id}
                        role="listitem"
                        className="w-dyn-item"
                      >
                        <Link
                          href={`/services/${service.slug?.current}`}
                          className="service-grid-item w-inline-block"
                        >
                          {!!service.cover?.asset && (
                            <img
                              src={urlFor(service.cover.asset).url()}
                              loading="lazy"
                              alt=""
                              className="service-grid-image w-full aspect-square object-cover"
                            />
                          )}
                          <div className="service-panel">
                            <div className="service-panel-title">
                              <div className="title-small">{service.title}</div>
                              <div className="circle-icon">
                                <img
                                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6790339e0b57a757126051cb_interface-icon-arrow-right-white.svg"
                                  alt="Arrow pointing right icon"
                                  className="invert"
                                />
                              </div>
                            </div>
                            <div className="content-short">
                              <div className="body-text">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <SectionThree />
      <SectionFour />
      <SectionFive list={testimonials} />
      <SectionSix />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "Built with purpose. Shaped by culture. Ready for what’s next.",
    cta: {
      href: "/work",
      title: "Explore our work",
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
                                    <Link
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
                                    </Link>
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

function SectionThree() {
  const mock = {
    title: "Our achievements",
    items: [
      {
        stats: "160+",

        description: ["Projects delivered", "across industries"],
      },
      {
        stats: "6+",
        description: ["Countries served through", "remote collaboration"],
      },
      {
        stats: "35%",
        description: ["Fewer revisions through", "AI-supported design systems"],
      },
      {
        stats: "12+",
        description: ["Years of multidisciplinary", "creative practice"],
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
  const caseStudy = caseStudies[0];
  const page = {
    title: "Case Study",
    cta: "Read Case Study",
  };
  // const mock = caseStudies[0];
  // const mock = {
  //   title: "Case Study",
  //   subtitle: "Redefining premium audio through human-centered innovation",
  //   metric: {
  //     stats: "142%",
  //     description: "Increase in direct-to-consumer sales within first quarter",
  //   },
  //   cta: {
  //     title: "Read Case Study",
  //     href: "/case-studies/lucident",
  //   },
  //   src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04.webp",
  //   badge:
  //     "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a1665ebcc2a3de1ea22076_customer-logo-lucident-white.svg",
  // };
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
                    <div className="large-text">{page.title}</div>
                    <div className="title-medium case-study-wide-title">
                      {caseStudy.title}
                    </div>
                    <div className="case-study-wide-bottom">
                      <div className="metric">
                        <div className="title-huge">
                          {caseStudy.metrics.stat}
                        </div>
                        <div className="metric-explainer white-body-text">
                          {caseStudy.metrics.description}
                        </div>
                      </div>
                      <Link
                        data-wf--button--variant="white-large"
                        href={`/case-studies/${caseStudy.id}`}
                        className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">{page.cta}</div>
                          <div className="button-text">{page.cta}</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="hover-image-link w-inline-block"
                  >
                    <img
                      src={caseStudy.cover.src}
                      loading="lazy"
                      alt=""
                      // sizes="100vw"
                      // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04.webp 1920w"
                      className="hover-image case-study-image"
                    />
                    <div className="case-study-badge">
                      <img src={caseStudy.badge.src} loading="lazy" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFive({ list }: { list: TESTIMONIALS_QUERYResult }) {
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
              <div className="title-large">Customer reviews</div>
            </div>
            <Marquee className="marquee [--duration:60s] w-full">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="marquee-group">
                  <div className="testimonial-card-group">
                    {list.map((testimonial, index) => (
                      <div key={index} className="testimonial-card">
                        <div className="stars">
                          {Array.from({ length: testimonial.rating || 0 }).map(
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
                          {!!testimonial.review && (
                            <PortableText value={testimonial.review} />
                          )}
                        </div>
                        <div className="quote-author-centered">
                          {!!testimonial.person?.cover?.asset && (
                            <img
                              src={urlFor(
                                testimonial.person?.cover?.asset
                              ).url()}
                              alt=""
                              className="customer-small w-dull aspect-square object-cover"
                            />
                          )}
                          <div>
                            <div>{testimonial.person?.name}</div>
                            <div className="quote-author-position">
                              {testimonial.person?.title}
                              {!!testimonial.person?.company?.name && (
                                <>, {testimonial.person?.company?.name}</>
                              )}
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
    title: "Trusted by founders in 6+ countries and growing",
    cta: {
      title: "Start the conversation",
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
            <Link
              data-wf--button--variant="white-large"
              href={mock.cta.href}
              className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
            >
              <div className="button-text-wrapper">
                <div className="button-text">{mock.cta.title}</div>
                <div className="button-text">{mock.cta.title}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
