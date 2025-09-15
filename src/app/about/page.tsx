import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Clients from "@/components/hos/sections/clients";
import { Marquee } from "@/components/magicui/marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFour0 />
      <SectionFive />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "We build brand systems that flex and scale with your ambitions.",
    items: [
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01.webp",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18.webp",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp",
      },
    ],
  };
  return (
    <section className="section title">
      <div className="container---main">
        <div className="content-vertical increased-gap">
          <div
            className="fade-in-first"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="content-long">
              <h1 className="title-large long-text">{mock.title}</h1>
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
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="marquee-group"
                  style={{
                    transform:
                      "translate3d(-30.942%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className="image-marquee-items">
                    {mock.items.map((item, index) => (
                      <img
                        key={index}
                        src={item.src}
                        alt=""
                        // sizes="(max-width: 479px) 225px, (max-width: 767px) 300px, (max-width: 991px) 450px, 517.5px"
                        // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp 1920w"
                        className="image-marquee-item"
                      />
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

function SectionTwo() {
  const mock = {
    title: "Our Ethos",
    items: [
      {
        title: "Collaborative Spirit",
        descripton:
          "We believe the best solutions emerge from open dialogue and shared perspectives. Each project is an opportunity to combine diverse viewpoints into cohesive solutions.",
        metrics: {
          stats: "72",
          description: ["Ambitious team members working global"],
        },
      },
      {
        title: "Creative Excellence",
        descripton:
          "Every challenge deserves an exceptional solution. We push boundaries through rigorous exploration, always seeking the perfect balance of form and function.",
        metrics: {
          stats: "93+",
          description: ["Successful products", "launched"],
        },
      },
    ],
  };
  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-third"
          style={{
            // opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="vertical-section">
            <div className="title-large">{mock.title}</div>
            <div className="ethos-boxes">
              {mock.items.map((item, index) => (
                <div key={index} className="ethos-box">
                  <div className="ethos-box-text">
                    <div className="subheading">{item.title}</div>
                    <div className="subheading muted-text">
                      {item.descripton}
                    </div>
                  </div>
                  <div className="metric-aligned-bottom">
                    <div className="title-huge">{item.metrics.stats}</div>
                    <div className="metric-explainer aligned-bottom">
                      {item.metrics.description.map((row, index) => (
                        <React.Fragment key={index}>
                          {index !== 0 && <br />}
                          {row}
                        </React.Fragment>
                      ))}
                    </div>
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
function SectionThree() {
  const mock = {
    src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp",
    title: "A word from our Founder",
    text: `“In 2015, after years at Pentagram and working across Copenhagen's design scene, I saw an opportunity to create something different: a practice where strategic thinking and creative execution could truly work in harmony. Not just another agency, but a place where thoughtful design could transform how businesses approach their biggest challenges.”`,
    fullName: "Sebastien Andersen",
    designation: "Founder & CEO",
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
          <div className="testimonial-card-d bg-dark">
            <img
              src={mock.src}
              id="w-node-_39522aad-ff1a-8ea5-82b4-4d9e5e5b1a4f-d7a767ca"
              // sizes="(max-width: 479px) 85vw, (max-width: 991px) 222px, 30vw"
              // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
              alt=""
              className="rounded-edges testimonial-card-image"
            />
            <div className="testimonial-card-d-contents">
              <div className="title-small long-text">{mock.title}</div>
              <div className="content-vertical">
                <div className="large-text quote-text">{mock.text}</div>
                <div>
                  <div>{mock.fullName}</div>
                  <div className="muted-text">{mock.designation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionFour() {
  const mock = {
    title: "The story so far...",
    description:
      "We have deep expertise across sectors that demand excellence.",
    items: [
      {
        title: "2010",
        subtitle: "Breaking ground",
        content:
          "Two designers and a strategist sharing a small Copenhagen studio laid the foundation for what would become Andersen. Their early work with local startups established a reputation for merging strategic thinking with distinctive design.",
      },
      {
        title: "2013",
        subtitle: "Code meets craft",
        content:
          "As client demands evolved beyond traditional design, Andersen expanded into full-service digital development. The acquisition of a boutique development studio in Amsterdam brought technical excellence in-house.",
      },
      {
        title: "2015",
        subtitle: "London Calling",
        content:
          "Opening the London studio marked a turning point, bringing Andersen into one of the world's most dynamic creative markets. This expansion attracted global clients and diverse talent, accelerating the agency's evolution.",
      },
      {
        title: "2018",
        subtitle: "Breaking patterns",
        content:
          "The launch of Andersen Labs formalized the agency's commitment to emerging technologies. This dedicated R&D unit began exploring the intersection of design and artificial intelligence.",
      },
      {
        title: "2021",
        subtitle: "No Borders",
        content:
          "Strategic expansion into key markets - Barcelona, Munich, and Toronto - positioned Andersen to better serve an increasingly international client base. These studios brought fresh perspectives and deeper cultural insights to the agency's work.",
      },
      {
        title: "2024",
        subtitle: "Beyond horizons",
        content:
          "The integration of advanced AI capabilities across all service offerings signals Andersen's continued evolution. What started as a commitment to crafting thoughtful digital experiences has evolved into a global practice.",
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

            <div className="card-slider w-slider">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                  align: "start",
                }}
              >
                <CarouselContent>
                  {mock.items.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="card-slider-mask w-slider-mask basis-[468px]"
                    >
                      <div className="card-slide w-slide" role="group">
                        <div className="timeline-slide">
                          <div className="title-large">{item.title}</div>
                          <div className="timeline-slide-text">
                            <div>{item.subtitle}</div>
                            <div className="muted-text">{item.content}</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="[&>button]:relative">
                  <CarouselPrevious asChild className="border-none">
                    <button
                      className="chevron-button previous below-slider w-slider-arrow-left"
                      role="button"
                      tabIndex={0}
                      aria-controls="w-slider-mask-0"
                      aria-label="previous slide"
                    >
                      <div className="chevron-button-arrow-wrapper">
                        <img
                          alt="chevron arrow icon"
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a03eb4b2a6908fac062030_interface-icon-chevron-right-dark.svg"
                          className="chevron-button-icon"
                        />
                        <img
                          alt="chevron arrow icon"
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a03eb4b2a6908fac062030_interface-icon-chevron-right-dark.svg"
                          className="chevron-button-icon"
                        />
                      </div>
                    </button>
                  </CarouselPrevious>
                  <CarouselNext asChild className="border-none">
                    <button
                      className="chevron-button below-slider-next w-slider-arrow-right"
                      role="button"
                      tabIndex={0}
                      aria-controls="w-slider-mask-0"
                      aria-label="next slide"
                    >
                      <div className="chevron-button-arrow-wrapper">
                        <img
                          alt="chevron arrow icon"
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a03eb4b2a6908fac062030_interface-icon-chevron-right-dark.svg"
                          className="chevron-button-icon"
                        />
                        <img
                          alt="chevron arrow icon"
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a03eb4b2a6908fac062030_interface-icon-chevron-right-dark.svg"
                          className="chevron-button-icon"
                        />
                      </div>
                    </button>
                  </CarouselNext>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionFour0() {
  return <Clients />;
}
function SectionFive() {
  const mock = {
    title: "Locations",
    description:
      "We’re headquartered in Denmark but work with clients globally.",
    items: [
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079bb1d2026561f62e83_country-denmark-map.svg",
        title: "Denmark",
        address: ["Nørregade 17", "1364 København K", "Denmark"],
        email: "europe@website.com",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079b259e1781c8dfb36c_country-uk-map.svg",
        title: "UK",
        address: [
          "14 Kensington Park Road",
          "London W11 3BU",
          "United Kingdom",
        ],
        email: "uk@website.com",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079b0de7ad80010514bc_country-usa-map.svg",
        title: "USA",
        address: ["328 Willowbrook Ave", "Pasadena CA 91105", "USA"],
        email: "usa@website.com",
      },
    ],
  };
  return (
    <section className="section">
      <div className="container---main">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="vertical-section">
            <div className="section-title">
              <div className="title-large">{mock.title}</div>
              <div className="large-text content-short">{mock.description}</div>
            </div>
            <div className="location-grid">
              {mock.items.map((item, index) => (
                <div key={index} className="location-box with-graphic">
                  <div className="location-box-graphic-wrapper">
                    <img
                      src={item.src}
                      alt=""
                      className="location-box-graphic"
                    />
                  </div>
                  <div className="location-box-text">
                    <div className="title-small">{item.title}</div>
                    <div>
                      {item.address.map((row, index) => (
                        <React.Fragment key={index}>
                          {index !== 0 && <br />}
                          {row}
                        </React.Fragment>
                      ))}
                    </div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{ width: 0, opacity: 0 }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="arrow-hover-icon"
                        />
                      </div>
                      <div
                        className="arrow-link-text"
                        style={{ opacity: "0.5" }}
                      >
                        {item.email}
                      </div>
                    </Link>
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
