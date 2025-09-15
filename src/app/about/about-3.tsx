import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
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
            <div className="content-long">
              <h1 className="title-large">
                We bring digital products to life with purpose and precision.
              </h1>
            </div>
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
        <section className="section below-title">
          <div className="container---main">
            <div className="tryptich">
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca648608c08cea3169_square-13.webp 1920w"
                id="w-node-_8b14a72b-2bc8-e03e-ee78-3b10ef1e08d8-d8819096"
                sizes="(max-width: 479px) 199.828125px, (max-width: 767px) 47vw, (max-width: 991px) 24vw, 27vw"
                alt=""
                className="tryptich-image"
              />
              <div
                id="w-node-_558e6aec-07b8-e7e3-9873-1342f941c267-d8819096"
                className="tryptich-content"
              >
                <div>
                  <div className="subheading muted-text">Our Ethos</div>
                  <div className="subheading">
                    We unite strategic thinking with creative craft to help
                    ambitious brands find their place in the world.
                  </div>
                </div>
                <div className="metric">
                  <div className="title-huge">187%</div>
                  <div className="metric-explainer white-body-text">
                    Average ROI for our clients project launches
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11.webp"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827c9d803bd5e33a6c5e5_square-11.webp 1920w"
                id="w-node-_8233f90d-faa8-451f-4c9d-4832e7880278-d8819096"
                sizes="(max-width: 479px) 243.171875px, (max-width: 767px) 53vw, (max-width: 991px) 24vw, 27vw"
                alt=""
                className="tryptich-image"
              />
            </div>
          </div>
        </section>
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
            <div className="vertical-section">
              <div className="section-title">
                <div className="title-large">How we work</div>
                <div className="large-text content-short">
                  We combine deep research, strategy and craft to achieve
                  outstanding results.
                </div>
              </div>
              <div className="process-section">
                <div className="process-section-item">
                  <div className="process-title">
                    <div>Discovery</div>
                    <div className="muted-text">2–3 Weeks</div>
                  </div>
                  <div className="process-section-text">
                    <div className="title-small">Understanding your vision</div>
                    <div className="body-text">
                      We start with deep research into your business, market
                      position and objectives. This foundational phase sets the
                      direction of our partnership.
                    </div>
                  </div>
                </div>
                <div className="process-section-item">
                  <div className="process-title">
                    <div>Strategy</div>
                    <div className="muted-text">3–4 Weeks</div>
                  </div>
                  <div className="process-section-text">
                    <div className="title-small">Defining the approach</div>
                    <div className="body-text">
                      Together, we develop a comprehensive roadmap that aligns
                      our expertise with your goals, establishing clear metrics
                      for success.
                    </div>
                  </div>
                </div>
                <div className="process-section-item">
                  <div className="process-title">
                    <div>Creation</div>
                    <div className="muted-text">8–12 Weeks</div>
                  </div>
                  <div className="process-section-text">
                    <div className="title-small">Bringing ideas to life</div>
                    <div className="body-text">
                      Our team works in focused sprints, maintaining close
                      collaboration while transforming strategy into tangible
                      outcomes.
                    </div>
                  </div>
                </div>
                <div className="process-section-item">
                  <div className="process-title">
                    <div>Evolution</div>
                    <div className="muted-text">Ongoing</div>
                  </div>
                  <div className="process-section-text">
                    <div className="title-small">Continuous improvement</div>
                    <div className="body-text">
                      We measure, refine and optimize, ensuring your digital
                      presence continues to evolve with your business and market
                      demands.
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
            <div className="grid-section">
              <div
                id="w-node-_5c154a29-1703-2462-ecf7-ab2e4605113a-d8819096"
                className="padded-content padded-right"
              >
                <div className="content-vertical increased-gap">
                  <div>
                    <div className="title-small muted-text">Our People</div>
                    <div className="title-small">
                      We are an ambitious, multi-disciplinary team from all
                      around the world.
                    </div>
                  </div>
                  <div className="show-on-mobile">
                    <div
                      id="w-node-_2cc9a00c-ee5b-32b6-a9d1-b34bf396d646-f396d646"
                      className="team-marquee-box"
                    >
                      <div className="marquee align-center">
                        <div
                          className="marquee-group"
                          style={{
                            transform:
                              "translate3d(-26.67%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                          }}
                        >
                          <div className="team-marquee-items">
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp 1024w"
                              className="team-marquee-image"
                            />
                          </div>
                        </div>
                        <div
                          className="marquee-group"
                          style={{
                            transform:
                              "translate3d(-26.67%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                          }}
                        >
                          <div className="team-marquee-items">
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp 1024w"
                              className="team-marquee-image"
                            />
                            <img
                              src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp"
                              alt=""
                              sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                              srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp 1024w"
                              className="team-marquee-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-short text-wrapper">
                    <div>
                      Our team brings together strategists, designers,
                      developers, and creative technologists from diverse
                      backgrounds, each contributing unique perspectives shaped
                      by global experience.
                      <br />
                      <br />
                      From our studios in Copenhagen, London, and Amsterdam,
                      we&apos;ve built a culture that emphasizes both individual
                      craft and collective innovation, enabling us to tackle
                      complex challenges with fresh thinking and technical
                      precision. What sets us apart isn&apos;t just our range of
                      skills—it&apos;s how we combine them. Our strategists work
                      alongside engineers, our designers collaborate with data
                      scientists, and our researchers partner with creative
                      directors.
                    </div>
                  </div>
                  <Link
                    data-wf--button--variant="outlined"
                    href="/team"
                    className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                  >
                    <div className="button-text-wrapper">
                      <div className="button-text">Meet the team</div>
                      <div className="button-text">Meet the team</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hide-on-mobile">
                <div
                  id="w-node-_2cc9a00c-ee5b-32b6-a9d1-b34bf396d646-f396d646"
                  className="team-marquee-box"
                >
                  <div className="marquee align-center">
                    <div className="marquee-group">
                      <div className="team-marquee-items">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp 1024w"
                          className="team-marquee-image"
                        />
                      </div>
                    </div>
                    <div className="marquee-group">
                      <div className="team-marquee-items">
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a5289a6e521650fa5_team-02.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a791e78aa1666e2a5_team-03.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a9caad38dc8c1eed4_team-05.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9ac6d9b40f9bd2800e_team-06.webp 1024w"
                          className="team-marquee-image"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp"
                          alt=""
                          sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 100vw"
                          srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp 1024w"
                          className="team-marquee-image"
                        />
                      </div>
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
            <div className="vertical-section">
              <div className="section-title">
                <div className="title-large">Locations</div>
                <div className="large-text content-short">
                  We’re headquartered in Denmark but work with clients globally.
                </div>
              </div>
              <div className="location-grid">
                <div className="location-box">
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06.webp"
                    alt=""
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 30vw"
                    srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbdeee94ef57c4578b5c_portrait-06.webp 1800w"
                    className="location-box-image"
                  />
                  <div className="location-box-panel">
                    <div className="title-small">Denmark</div>
                    <div>
                      Nørregade 17
                      <br />
                      1364 København K<br />
                      Denmark
                    </div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{
                          width: 0,
                          opacity: 0,
                        }}
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
                        europe@website.com
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="location-box">
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp"
                    alt=""
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 30vw"
                    srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbe2184649b4486cf2ed_portrait-07.webp 1800w"
                    className="location-box-image"
                  />
                  <div className="location-box-panel">
                    <div className="title-small">UK</div>
                    <div>
                      14 Kensington Park Road
                      <br />
                      London W11 3BU
                      <br />
                      United Kingdom
                    </div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{
                          width: 0,
                          opacity: 0,
                        }}
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
                        uk@website.com
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="location-box">
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08.webp"
                    alt=""
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 30vw"
                    srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a3fbde845946857086f9ce_portrait-08.webp 1800w"
                    className="location-box-image"
                  />
                  <div className="location-box-panel">
                    <div className="title-small">USA</div>
                    <div>
                      328 Willowbrook Ave
                      <br />
                      Pasadena CA 91105
                      <br />
                      USA
                    </div>
                    <Link
                      data-wf--arrow-hover-link--variant="white"
                      href="#"
                      className="arrow-hover-link w-variant-20ae16cd-e32b-9598-6279-b8d1d7fabfd3 w-inline-block"
                    >
                      <div
                        className="arrow-hover-icon-wrapper"
                        style={{
                          width: 0,
                          opacity: 0,
                        }}
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
                        usa@website.com
                      </div>
                    </Link>
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
            <div className="cta-box">
              <div className="cta-box-contents">
                <div>
                  <div className="title-small muted-text">
                    Ready for the next step?
                  </div>
                  <div className="title-small">
                    We&apos;d love to hear about your project
                  </div>
                </div>
                <Link
                  data-wf--button--variant="large"
                  href="/contact"
                  className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">Start Planner</div>
                    <div className="button-text">Start Planner</div>
                  </div>
                </Link>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02.webp"
                alt=""
                sizes="345px"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02.webp 1920w"
                className="cta-box-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
