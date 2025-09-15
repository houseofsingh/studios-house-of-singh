import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <section className="section team-member-section">
        <div className="container---main">
          <div className="content-long align-center">
            <div className="team-member-contents">
              <Link
                href="/company/team"
                className="back-to-team w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                  alt="cross icon"
                />
              </Link>
              <div
                className="fade-in-first"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="team-member-title">
                  <div>
                    <h1 className="title-medium">Marcus Schwarz</h1>
                    <h2 className="title-medium muted-text">
                      Founder &amp; Creative Director
                    </h2>
                  </div>
                  <div className="team-member-social">
                    <Link
                      href="https://twitter.com/"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3535414e0dc1597a9ad_icon-social-x.svg"
                        alt="X (Twitter) icon"
                      />
                    </Link>
                    <Link
                      href="https://linkedin.com/"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d3545beeb32d99e4ea93_icon-social-linkedin.svg"
                        alt="Linkedin icon"
                      />
                    </Link>
                    <Link
                      href="https://bluesky.com/"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d35312fcde9b75ffb736_icon-social-bluesky.svg"
                        alt="Bluesky icon"
                      />
                    </Link>
                    <Link
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
                    </Link>
                  </div>
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
                <div className="team-member-bio">
                  <img
                    src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 468px, 46vw"
                    srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae35b6cfc5e11e52fa47e_team-02.webp 1024w"
                    className="rounded-edges team-modal-image"
                  />
                  <div className="body-text">
                    Before co-founding Andersen, Marcus led digital
                    transformation at McKinsey, where he noticed a persistent
                    gap between strategy consulting and creative execution. His
                    background in behavioral economics and computer science
                    brings a unique perspective to creative problem-solving. At
                    Andersen, he’s pioneered an approach that merges data-driven
                    insights with human-centered design, leading to notable
                    successes with fintech and healthcare clients. A regular
                    contributor to Harvard Business Review, Marcus is
                    particularly interested in how design thinking can address
                    complex organizational challenges. He serves on the World
                    Economic Forum’s Future of Work committee and advises
                    several AI startups.
                  </div>
                </div>
              </div>
              <div
                className="fade-in-on-scroll"
                style={{
                  opacity: 0,
                  transform:
                    "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="content-vertical team-member-articles">
                  <div className="cms-title large-text">
                    <div>Articles by&nbsp;</div>
                    <div>Marcus Schwarz</div>
                  </div>
                  <div className="collection-list-wrapper w-dyn-list">
                    <div role="list" className="author-blog-grid w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          href="#"
                          className="article-small-horizontal w-inline-block"
                        >
                          <div className="hover-image-link">
                            <img
                              src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04.webp"
                              loading="lazy"
                              alt=""
                              sizes="(max-width: 767px) 30vw, 15vw"
                              srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04.webp 1920w"
                              className="hover-image"
                            />
                          </div>
                          <div
                            id="w-node-_0086273d-ee51-f4a8-15b2-514c17271160-84934dd7"
                            className="article-horizontal-title"
                          >
                            <div className="small-text">Insight</div>
                            <div>
                              How we helped Hermosa rethink luxury packaging
                            </div>
                            <div className="small-text muted-text">
                              January 4, 2025
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
