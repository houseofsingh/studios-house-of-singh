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
import { sanityFetch } from "@/sanity/lib/client";
import { CLIENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const clients = await sanityFetch({ query: CLIENTS_QUERY });

  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Clients list={clients} />
      <SectionFive />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title:
      "Inspired by founders. Informed by culture. Defined by design that lasts.",
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
    title: "Design Philosophy",
    items: [
      {
        title: "Principled Creativity",
        descripton:
          "We believe design is more than decoration. It is a system that shapes clarity, consistency, and connection. Every project begins with strategy and ends with storytelling that lasts.",
        metrics: {
          stats: "110+",
          description: ["Projects shaped through", "principled creativity"],
        },
      },
      {
        title: "AI-Supported, Human-Led",
        descripton:
          "We integrate intelligent tools to accelerate research and reduce friction — but our design thinking remains human at its core. This balance allows us to deliver clarity with speed, without losing craft.",
        metrics: {
          stats: "35%",
          description: [
            "Fewer revisions through",
            "AI-supported design systems",
          ],
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
    src: "https://cdn.sanity.io/images/sjn00lvn/production/b330f28f2802a3b1a249b5308ba12406a4e4ad8f-854x1236.heif",
    title: "Our Founder’s Vision",
    text: `“When I started House of Singh Studios, the goal was more than design. I wanted to build a studio that founders could trust for clarity, systems, and long-term creative direction. Our work is shaped by culture, strategy, and intelligent tools — but always led by people. We exist to help purpose-driven brands grow with intention and leave an enduring mark.”`,
    fullName: "Maninder Singh",
    designation: "Founder & Creative Director",
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
              className="rounded-edges testimonial-card-image w-full aspect-square object-cover"
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
        title: "2014",
        subtitle: "Roots in India",
        content:
          "House of Singh began in New Delhi as a boutique studio, working with artists, SMEs, and cultural organizations. These early years established our reputation for clarity and storytelling in design, building the foundation of a practice that has grown steadily ever since.",
      },
      {
        title: "2016",
        subtitle: "Early Growth",
        content:
          "The studio expanded its reach, delivering branding, campaigns, and content for diverse industries. With each project, the practice developed multidisciplinary expertise across visual design, photography, and strategy, while nurturing a growing community of creative collaborators in India and beyond.",
      },
      {
        title: "2018",
        subtitle: "Expanding Horizons",
        content:
          "Our services broadened beyond brand identity into photography, video production, and aerial drone projects. This expansion marked the transition from a boutique studio into a multidisciplinary practice, blending visual storytelling with design systems to serve a wider range of client needs.",
      },
      {
        title: "2020",
        subtitle: "Navigating Challenges",
        content:
          "The global pandemic forced a reset, as many projects were paused or scaled down. Instead of retreating, the studio used this period to refine its methods, focusing on sustainable systems and preparing for international expansion under a stronger vision.",
      },
      {
        title: "2021",
        subtitle: "North American Chapter",
        content:
          "Founder Maninder Singh relocated to Toronto, bringing the practice to North America. This move aligned the studio with new markets, allowing it to work with founder-led brands, SMEs, and culturally rooted ventures across the Greater Toronto Area.",
      },
      {
        title: "2023",
        subtitle: "Trademark & Incorporation",
        content:
          "House of Singh Studios Inc. was federally incorporated and trademarked in Canada. This milestone formalized the brand as a modern design studio, rooted in culture and strategy, and prepared it for long-term growth across Canadian and international markets.",
      },
      {
        title: "2025",
        subtitle: "AI-Supported Future",
        content:
          "With the integration of AI supported research and workflows, the studio continues to evolve. By combining intelligent tools with human led design, House of Singh Studios delivers faster, smarter, and more consistent outcomes. This sets a new standard for scalable and intentional branding.",
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
// function SectionFour0() {
//   return <Clients />;
// }
function SectionFive() {
  const mock = {
    title: "Our Footprints",
    description:
      "A global presence with studios in Canada, India and the UK serving clients worldwide.",
    items: [
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079bb1d2026561f62e83_country-denmark-map.svg",
        title: "Canada",
        address: ["Mississauga"],
        email: "hello+canada@houseofsingh.com",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079b259e1781c8dfb36c_country-uk-map.svg",
        title: "India",
        address: ["New Delhi"],
        email: "hello+india@houseofsingh.com",
      },
      {
        src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4079b0de7ad80010514bc_country-usa-map.svg",
        title: "UK",
        address: ["London"],
        email: "hello+uk@houseofsingh.com",
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
