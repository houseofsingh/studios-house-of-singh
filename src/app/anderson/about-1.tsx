import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
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
                <h1 className="title-large long-text">
                  We build brand systems that flex and scale with your
                  ambitions.
                </h1>
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
              <div className="marquee">
                <div
                  className="marquee-group"
                  style={{
                    transform:
                      "translate3d(-30.942%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className="image-marquee-items">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp"
                      alt=""
                      sizes="(max-width: 479px) 225px, (max-width: 767px) 300px, (max-width: 991px) 450px, 517.5px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01.webp 1800w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp 1800w"
                      className="image-marquee-item"
                    />
                  </div>
                </div>
                <div
                  className="marquee-group"
                  style={{
                    transform:
                      "translate3d(-30.942%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className="image-marquee-items">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp"
                      alt=""
                      sizes="(max-width: 479px) 225px, (max-width: 767px) 300px, (max-width: 991px) 450px, 517.5px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8b9c80dd67d712cd9_landscape-03.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20fac4378cde9b5e4ee_portrait-01.webp 1800w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3ff612ece8444d01ea707_square-18.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp 1800w"
                      className="image-marquee-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className="title-large">Our Ethos</div>
              <div className="ethos-boxes">
                <div className="ethos-box">
                  <div className="ethos-box-text">
                    <div className="subheading">Collaborative Spirit</div>
                    <div className="subheading muted-text">
                      We believe the best solutions emerge from open dialogue
                      and shared perspectives. Each project is an opportunity to
                      combine diverse viewpoints into cohesive solutions.
                    </div>
                  </div>
                  <div className="metric-aligned-bottom">
                    <div className="title-huge">72</div>
                    <div className="metric-explainer aligned-bottom">
                      Ambitious team members working global
                    </div>
                  </div>
                </div>
                <div className="ethos-box">
                  <div className="ethos-box-text">
                    <div className="subheading">Creative Excellence</div>
                    <div className="subheading muted-text">
                      Every challenge deserves an exceptional solution. We push
                      boundaries through rigorous exploration, always seeking
                      the perfect balance of form and function.
                    </div>
                  </div>
                  <div className="metric-aligned-bottom">
                    <div className="title-huge">93+</div>
                    <div className="metric-explainer aligned-bottom">
                      Successful products
                      <br />
                      launched
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
                id="w-node-_39522aad-ff1a-8ea5-82b4-4d9e5e5b1a4f-d7a767ca"
                sizes="(max-width: 479px) 85vw, (max-width: 991px) 222px, 30vw"
                alt=""
                className="rounded-edges testimonial-card-image"
              />
              <div className="testimonial-card-d-contents">
                <div className="title-small long-text">
                  A word from our Founder
                </div>
                <div className="content-vertical">
                  <div className="large-text quote-text">
                    “In 2015, after years at Pentagram and working across
                    Copenhagen's design scene, I saw an opportunity to create
                    something different: a practice where strategic thinking and
                    creative execution could truly work in harmony. Not just
                    another agency, but a place where thoughtful design could
                    transform how businesses approach their biggest challenges.”
                  </div>
                  <div>
                    <div>Sebastien Andersen</div>
                    <div className="muted-text">Founder &amp; CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <div className="title-large">The story so far...</div>
                <div className="large-text content-short">
                  We have deep expertise across sectors that demand excellence.
                </div>
              </div>
              <div
                data-delay={4000}
                data-animation="slide"
                className="card-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit={0}
                data-nav-spacing={3}
                data-duration={500}
                data-infinite="false"
                role="region"
                aria-label="carousel"
              >
                <div
                  className="card-slider-mask w-slider-mask"
                  id="w-slider-mask-0"
                >
                  <div
                    className="card-slide w-slide"
                    aria-label="1 of 6"
                    role="group"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide">
                      <div className="title-large">2010</div>
                      <div className="timeline-slide-text">
                        <div>Breaking ground</div>
                        <div className="muted-text">
                          Two designers and a strategist sharing a small
                          Copenhagen studio laid the foundation for what would
                          become Andersen. Their early work with local startups
                          established a reputation for merging strategic
                          thinking with distinctive design.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-slide w-slide"
                    aria-label="2 of 6"
                    role="group"
                    aria-hidden="true"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide" aria-hidden="true">
                      <div className="title-large" aria-hidden="true">
                        2013
                      </div>
                      <div className="timeline-slide-text" aria-hidden="true">
                        <div aria-hidden="true">Code meets craft</div>
                        <div className="muted-text" aria-hidden="true">
                          As client demands evolved beyond traditional design,
                          Andersen expanded into full-service digital
                          development. The acquisition of a boutique development
                          studio in Amsterdam brought technical excellence
                          in-house.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-slide w-slide"
                    aria-label="3 of 6"
                    role="group"
                    aria-hidden="true"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide" aria-hidden="true">
                      <div className="title-large" aria-hidden="true">
                        2015
                      </div>
                      <div className="timeline-slide-text" aria-hidden="true">
                        <div aria-hidden="true">London Calling</div>
                        <div className="muted-text" aria-hidden="true">
                          Opening the London studio marked a turning point,
                          bringing Andersen into one of the world's most dynamic
                          creative markets. This expansion attracted global
                          clients and diverse talent, accelerating the agency's
                          evolution.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-slide w-slide"
                    aria-label="4 of 6"
                    role="group"
                    aria-hidden="true"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide" aria-hidden="true">
                      <div className="title-large" aria-hidden="true">
                        2018
                      </div>
                      <div className="timeline-slide-text" aria-hidden="true">
                        <div aria-hidden="true">Breaking patterns</div>
                        <div className="muted-text" aria-hidden="true">
                          The launch of Andersen Labs formalized the agency's
                          commitment to emerging technologies. This dedicated
                          R&amp;D unit began exploring the intersection of
                          design and artificial intelligence.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-slide w-slide"
                    aria-label="5 of 6"
                    role="group"
                    aria-hidden="true"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide" aria-hidden="true">
                      <div className="title-large" aria-hidden="true">
                        2021
                      </div>
                      <div className="timeline-slide-text" aria-hidden="true">
                        <div aria-hidden="true">No Borders</div>
                        <div className="muted-text" aria-hidden="true">
                          Strategic expansion into key markets - Barcelona,
                          Munich, and Toronto - positioned Andersen to better
                          serve an increasingly international client base. These
                          studios brought fresh perspectives and deeper cultural
                          insights to the agency's work.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-slide w-slide"
                    aria-label="6 of 6"
                    role="group"
                    aria-hidden="true"
                    style={{
                      transition: "all",
                      transform: "translateX(0px)",
                      opacity: 1,
                    }}
                  >
                    <div className="timeline-slide" aria-hidden="true">
                      <div className="title-large" aria-hidden="true">
                        2024
                      </div>
                      <div className="timeline-slide-text" aria-hidden="true">
                        <div aria-hidden="true">Beyond horizons</div>
                        <div className="muted-text" aria-hidden="true">
                          The integration of advanced AI capabilities across all
                          service offerings signals Andersen's continued
                          evolution. What started as a commitment to crafting
                          thoughtful digital experiences has evolved into a
                          global practice.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-live="off"
                    aria-atomic="true"
                    className="w-slider-aria-label"
                    data-wf-ignore=""
                  />
                </div>
                <div
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
                </div>
                <div
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
                </div>
                <div className="hide w-slider-nav w-round w-num">
                  <div
                    className="w-slider-dot w-active"
                    data-wf-ignore=""
                    aria-label="Show slide 1 of 6"
                    aria-pressed="true"
                    role="button"
                    tabIndex={0}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    1
                  </div>
                  <div
                    className="w-slider-dot"
                    data-wf-ignore=""
                    aria-label="Show slide 2 of 6"
                    aria-pressed="false"
                    role="button"
                    tabIndex={-1}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    2
                  </div>
                  <div
                    className="w-slider-dot"
                    data-wf-ignore=""
                    aria-label="Show slide 3 of 6"
                    aria-pressed="false"
                    role="button"
                    tabIndex={-1}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    3
                  </div>
                  <div
                    className="w-slider-dot"
                    data-wf-ignore=""
                    aria-label="Show slide 4 of 6"
                    aria-pressed="false"
                    role="button"
                    tabIndex={-1}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    4
                  </div>
                  <div
                    className="w-slider-dot"
                    data-wf-ignore=""
                    aria-label="Show slide 5 of 6"
                    aria-pressed="false"
                    role="button"
                    tabIndex={-1}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    5
                  </div>
                  <div
                    className="w-slider-dot"
                    data-wf-ignore=""
                    aria-label="Show slide 6 of 6"
                    aria-pressed="false"
                    role="button"
                    tabIndex={-1}
                    style={{ marginLeft: 3, marginRight: 3 }}
                  >
                    6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="hide-on-mobile">
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
                <div className="logo-grid">
                  <div
                    id="w-node-_5e08ebab-b880-80b4-b9f7-a2a5e5cfd7cd-d7a767ca"
                    className="title-small logo-grid-title"
                  >
                    Selected Clients
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011a682f7c256886318_customer-logo-lucident.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012711355fff731f054_customer-logo-hermosa.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3b7_customer-logo-contiuumai.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011b91a15ae3272d62d_customer-logo-marcopierre.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011732f8c08a9112d4f_customer-logo-morance.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820112d77156f8eb175f0_customer-logo-invarion.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3ba_customer-logo-gridpoint.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820119dfae2d20259139e_customer-logo-givonni.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011ff8c8e0d6fe406e1_customer-logo-parallaxai.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820120667dcbd83c4f06f_customer-logo-chausseur.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012725b62cfcb56c94f_customer-logo-eisnersterling.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                  <div className="logo-box inside-grid">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820117d93ed154affec4c_customer-logo-dunhamco.svg"
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="show-on-mobile">
          <div
            className="fade-in-on-scroll"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <section className="section">
              <div className="container---main">
                <div className="marquee">
                  <div
                    className="marquee-group"
                    style={{
                      transform:
                        "translate3d(-30.942%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <div className="marquee-logos">
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012711355fff731f054_customer-logo-hermosa.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3b7_customer-logo-contiuumai.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011b91a15ae3272d62d_customer-logo-marcopierre.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820120667dcbd83c4f06f_customer-logo-chausseur.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3ba_customer-logo-gridpoint.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="marquee-group"
                    style={{
                      transform:
                        "translate3d(-30.942%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <div className="marquee-logos">
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012711355fff731f054_customer-logo-hermosa.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3b7_customer-logo-contiuumai.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011b91a15ae3272d62d_customer-logo-marcopierre.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820120667dcbd83c4f06f_customer-logo-chausseur.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                      <div className="logo-box">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3ba_customer-logo-gridpoint.svg"
                          alt=""
                          className="logo-box-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
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
              <div className="marquee wide-cta-bg">
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
              </div>
              <div className="title-large">
                Working in over 20 international markets
              </div>
              <Link
                data-wf--button--variant="white-large"
                href="/contact"
                className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">Get in touch</div>
                  <div className="button-text">Get in touch</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
