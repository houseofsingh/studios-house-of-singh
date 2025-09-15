import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";

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
                Our multi-disciplinary team are ready for the challenge
              </h1>
            </div>
          </div>
        </section>
      </div>
      <section className="section below-title">
        <div className="container---main">
          <div className="team-collection-list w-dyn-list">
            <div role="list" className="team-grid w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Marcus Schwarz</div>
                      <div className="muted-text">
                        Founder &amp; Creative Director
                      </div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">Marcus Schwarz</div>
                            <div className="title-medium muted-text">
                              Founder &amp; Creative Director
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:marcus@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                marcus@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            Before co-founding Andersen, Marcus led digital
                            transformation at McKinsey, where he noticed a
                            persistent gap between strategy consulting and
                            creative execution. His background in behavioral
                            economics and computer science brings a unique
                            perspective to creative problem-solving. At
                            Andersen, he’s pioneered an approach that merges
                            data-driven insights with human-centered design,
                            leading to notable successes with fintech and
                            healthcare clients. A regular contributor to Harvard
                            Business Review, Marcus is particularly interested
                            in how design thinking can address complex
                            organizational challenges. He serves on the World
                            Economic Forum’s Future of Work committee and
                            advises several AI startups.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/marcus-schwarz"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Marcus Schwarz</div>
                      <div className="muted-text">
                        Founder &amp; Creative Director
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Sofia Cohen</div>
                      <div className="muted-text">Managing Director</div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">Sofia Cohen</div>
                            <div className="title-medium muted-text">
                              Managing Director
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:sofia@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                sofia@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            With roots in Copenhagen’s design scene and a decade
                            at Pentagram, Sofia founded Andersen in 2015 to
                            bridge the gap between strategic thinking and
                            creative execution. Her work with brands like Bang
                            &amp; Olufsen and Maersk demonstrated how thoughtful
                            design could transform business outcomes. She’s
                            known for challenging conventional agency models,
                            advocating for longer-term client partnerships that
                            enable deeper impact. A visiting professor at
                            Central Saint Martins, Sofia frequently speaks on
                            design’s role in shaping business culture. Her
                            approach combines Scandinavian design principles
                            with a sharp understanding of global markets,
                            leading to Andersen’s reputation for work that’s
                            both culturally relevant and commercially
                            successful.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/sofia-cohen"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae32637db3a669ee920d5_team-06.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Sofia Cohen</div>
                      <div className="muted-text">Managing Director</div>
                    </div>
                  </a>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>James Whitaker</div>
                      <div className="muted-text">Creative Director</div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">James Whitaker</div>
                            <div className="title-medium muted-text">
                              Creative Director
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:james@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                james@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            James shaped his perspective on user experience
                            working with early-stage startups in London and
                            Singapore before leading design at Spotify. His
                            approach to experience design, which emphasizes
                            cultural context alongside user needs, has
                            influenced how Andersen approaches digital product
                            development. He established the agency’s research
                            lab, which studies emerging behaviors in digital
                            spaces. A champion of inclusive design practices,
                            James has helped restructure how the agency
                            approaches accessibility, making it central to the
                            design process rather than an afterthought.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/james-whitaker"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae391f0c06ced5e075f89_team-01.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>James Whitaker</div>
                      <div className="muted-text">Creative Director</div>
                    </div>
                  </a>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Eva Lindholm</div>
                      <div className="muted-text">Chief Experience Officer</div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">Eva Lindholm</div>
                            <div className="title-medium muted-text">
                              Chief Experience Officer
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:eva@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                eva@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            Eva’s journey from coding experimental digital art
                            to leading major product launches for Apple and
                            Google gives her a rare perspective on the
                            intersection of technology and creativity. At
                            Andersen, she oversees the creative technology
                            practice, ensuring that innovation serves human
                            needs rather than following trends. Her team’s work
                            on developing new design systems for remote
                            collaboration has been widely adopted across
                            industries. A founding member of the Copenhagen
                            Design Ethics Council, Eva advocates for responsible
                            innovation and regularly collaborates with tech
                            startups on establishing ethical design frameworks.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/eva-lindholm"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Eva Lindholm</div>
                      <div className="muted-text">Chief Experience Officer</div>
                    </div>
                  </a>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Thomas Bergström</div>
                      <div className="muted-text">Client Partnerships</div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">Thomas Bergström</div>
                            <div className="title-medium muted-text">
                              Client Partnerships
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:thomas@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                thomas@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            Thomas joined Andersen after selling his AI startup
                            to Adobe, bringing technical innovation experience
                            to the creative process. He leads Andersen’s
                            emerging technology practice, focusing on practical
                            applications of AI in design and creative workflows.
                            His team developed several proprietary tools that
                            have transformed how the agency approaches
                            generative design and predictive analytics. A former
                            researcher at MIT Media Lab, Thomas maintains close
                            ties with academia and helps guide Andersen’s
                            research partnerships with universities.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/thomas-bergstrom"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3cc7f3db710520c9c77_team-05.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Thomas Bergström</div>
                      <div className="muted-text">Client Partnerships</div>
                    </div>
                  </a>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="hide-on-mobile">
                  <div
                    className="team-member-modal"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp"
                        alt=""
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Mira Chandler</div>
                      <div className="muted-text">Head of Innovation</div>
                    </div>
                  </div>
                  <div
                    className="team-member-modal-wrapper"
                    style={{ opacity: 0 }}
                  >
                    <div className="team-member-modal-screen" />
                    <div className="modal-body">
                      <div className="team-member-contents">
                        <div className="close-modal">
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                            alt="cross icon"
                          />
                        </div>
                        <div className="team-member-title">
                          <div>
                            <div className="title-medium">Mira Chandler</div>
                            <div className="title-medium muted-text">
                              Head of Innovation
                            </div>
                          </div>
                          <div className="team-member-social">
                            <a
                              href="https://twitter.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                                alt="X (Twitter) icon"
                              />
                            </a>
                            <a
                              href="https://linkedin.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                                alt="Linkedin icon"
                              />
                            </a>
                            <a
                              href="https://bluesky.com/"
                              className="social-link w-inline-block"
                            >
                              <img
                                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                                alt="Bluesky icon"
                              />
                            </a>
                            <a
                              data-wf--arrow-hover-link--variant="base"
                              href="mailto:mira@website.com"
                              className="arrow-hover-link w-inline-block"
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
                                mira@website.com
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="team-member-bio">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp"
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp 1024w"
                            className="rounded-edges team-modal-image"
                          />
                          <div className="body-text">
                            Mira’s background spans management consulting at BCG
                            and brand strategy at LVMH, where she developed
                            expertise in luxury and consumer brands. At
                            Andersen, she’s transformed the traditional account
                            management model into a strategic partnership
                            approach, leading to the agency’s industry-leading
                            client retention rate. Her work has been
                            particularly influential in helping heritage brands
                            navigate digital transformation while maintaining
                            their core values. Mira also leads Andersen’s
                            sustainability initiative, helping clients align
                            business goals with environmental responsibility.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-on-mobile">
                  <a
                    href="/team-members/mira-chandler"
                    className="team-member w-inline-block"
                  >
                    <div className="hover-image-link">
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp"
                        alt=""
                        sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, 100vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3f7b25dc4d10b45d212_team-04.webp 1024w"
                        className="hover-image"
                      />
                    </div>
                    <div>
                      <div>Mira Chandler</div>
                      <div className="muted-text">Head of Innovation</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section last-section">
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
            <div className="marquee-box">
              <div className="marquee">
                <div className="marquee-group">
                  <div className="text-marquee-items">
                    <div className="title-huge marquee-text">
                      Brand Strategy
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbafe375c88c2dbb44_graphic-icon-02.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">Messaging</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe069b90469e88a70_graphic-icon-04.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">UX Design</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe7c98e9486b4c4c4_graphic-icon-05.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">Integration</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cb8904518cb730891c_graphic-icon-03.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                  </div>
                </div>
                <div className="marquee-group">
                  <div className="text-marquee-items">
                    <div className="title-huge marquee-text">
                      Brand Strategy
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbafe375c88c2dbb44_graphic-icon-02.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">Messaging</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe069b90469e88a70_graphic-icon-04.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">UX Design</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe7c98e9486b4c4c4_graphic-icon-05.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                    <div className="title-huge marquee-text">Integration</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cb8904518cb730891c_graphic-icon-03.svg"
                      alt=""
                      className="invert marquee-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="marquee-box-text">
                <div className="large-text">
                  We work at the intersection of brand strategy and technical
                  innovation to build lasting digital experiences.
                </div>
              </div>
              <a
                data-wf--button--variant="white-large"
                href="/company/contact-2"
                className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">Get in touch</div>
                  <div className="button-text">Get in touch</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
