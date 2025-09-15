import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container---main">
          <div className="project-intro">
            <div
              className="fade-in-first"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="project-heading-wrapper">
                <div>
                  <h1 className="title-large muted-text long-text">
                    Marco Pierre
                  </h1>
                  <h2 className="title-large long-text">
                    Bringing culinary artistry into the digital space
                  </h2>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="tags w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <Link
                        href="/services/brand-strategy"
                        className="tag-link w-inline-block"
                      >
                        <div
                          className="tag-link-image-wrapper"
                          style={{ width: 0, opacity: 0 }}
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                            alt="Arrow pointing right icon"
                            className="tag-link-image"
                          />
                        </div>
                        <div>Brand Strategy</div>
                      </Link>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <Link
                        href="/services/messaging"
                        className="tag-link w-inline-block"
                      >
                        <div
                          className="tag-link-image-wrapper"
                          style={{ width: 0, opacity: 0 }}
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                            alt="Arrow pointing right icon"
                            className="tag-link-image"
                          />
                        </div>
                        <div>Messaging</div>
                      </Link>
                    </div>
                  </div>
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
              <div className="project-hero-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, 95vw"
                  srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp 1920w"
                  className="project-hero-image"
                />
                <Link
                  href="#"
                  className="video-link w-inline-block w-lightbox"
                  aria-label="open lightbox"
                  aria-haspopup="dialog"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6798627436dabe280fd0f984_interface-icon-play.svg"
                    alt="Play video icon"
                    className="play-video-icon"
                  />
                  <div>Watch Video</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="fade-in-on-scroll"
        style={{
          opacity: 0,
          transform:
            "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="project-summary">
              <div className="project-meta">
                <div className="project-meta-item">
                  <div className="meta-label">Client</div>
                  <div>Marco Pierre</div>
                </div>
                <div className="project-meta-item">
                  <div className="meta-label">Industry</div>
                  <div>Hospitality</div>
                </div>
                <div className="project-meta-item">
                  <div className="meta-label">Website</div>
                  <Link
                    data-wf--arrow-hover-link--variant="base"
                    href="https://webflow.com/"
                    className="arrow-hover-link w-inline-block"
                  >
                    <div
                      className="arrow-hover-icon-wrapper"
                      style={{ width: 0, opacity: 0 }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67986863243c068c016fcae7_interface-icon-arrow-upright-dark.svg"
                        alt="Arrow pointing north east icon"
                        className="arrow-hover-icon"
                      />
                    </div>
                    <div className="arrow-link-text" style={{ opacity: "0.5" }}>
                      marcopierre.co
                    </div>
                  </Link>
                </div>
              </div>
              <div className="project-summary-text-wrapper">
                <div className="subheading">
                  For Marco Pierre&apos;s new fine dining concept, we crafted a
                  digital presence that captures the artistry of their culinary
                  innovation. The result is an immersive digital experience that
                  mirrors the sophistication of their physical space while
                  making haute cuisine more approachable.
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="project-images w-dyn-items">
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f9c1f979fa6d2abcf_project-inner-03.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798463f0db7a7b8ab25c669_project-inner-05.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-dyn-hide w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="project-text-wrapper">
              <div className="project-rich-text w-richtext">
                <h5>The Problem</h5>
                <p>
                  Touch in digital design starts with how users physically
                  interact with an interface. Whether it’s through a smartphone
                  screen, a tablet, or a haptic-enabled device, the tactile
                  element is the bridge between humans and technology. This
                  connection, while seemingly straightforward, is a complex
                  interplay of responsiveness, feedback, and user expectations.
                  Designers must think beyond the simple act of tapping; they
                  must create interactions that feel intuitive and satisfying at
                  every stage.
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="project-images w-dyn-items">
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c04342ac1a49502cc_project-inner-01.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/6798464c4d4eec8d3338e65e_project-inner-04.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-dyn-hide w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="project-text-wrapper">
              <div className="project-rich-text w-richtext">
                <h5>The Solution</h5>
                <p>
                  Touch in digital design starts with how users physically
                  interact with an interface. Whether it’s through a smartphone
                  screen, a tablet, or a haptic-enabled device, the tactile
                  element is the bridge between humans and technology. This
                  connection, while seemingly straightforward, is a complex
                  interplay of responsiveness, feedback, and user expectations.
                  Designers must think beyond the simple act of tapping; they
                  must create interactions that feel intuitive and satisfying at
                  every stage.
                </p>
                <p>
                  This connection, while seemingly straightforward, is a complex
                  interplay of responsiveness, feedback, and user expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section project-inner-section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="project-images w-dyn-items">
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655bd6666b8abf31b4f_project-inner-06.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
                <div
                  role="listitem"
                  className="project-image-item w-dyn-item w-dyn-repeater-item"
                >
                  <Link
                    href="#"
                    className="hover-image-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                      srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984655f743c53e2b5720c5_project-inner-07.webp 1920w"
                      className="hover-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-dyn-hide w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section">
          <div className="container---main">
            <div className="horizontal-text-item no-bottom-padding">
              <div className="title-small">Feedback</div>
              <div className="customer-quote">
                <div className="title-small long-text">
                  “Most consultants talk about understanding luxury markets.
                  Andersen actually demonstrated it. The platform they developed
                  now serves as our global standard for digital retail.”
                </div>
                <div className="testimonial-card-author-logo">
                  <div>
                    <div>Philippe Laurent</div>
                    <div className="muted-text">Global Digital Head</div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679846ba0db7a7b8ab26642a_customer-logo-marcopierre.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section">
          <div className="container---main">
            <div className="vertical-section tight-spacing">
              <div className="title-small">Additional work</div>
              <div className="project-list-wrapper w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/continuum-ai"
                        className="project-list-link w-inline-block"
                      >
                        <div>continuum.ai</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>UX Design</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Integration</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/invarion"
                        className="project-list-link w-inline-block"
                      >
                        <div>Invarion</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Brand Strategy</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>UX Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/hermosa"
                        className="project-list-link w-inline-block"
                      >
                        <div>Hermosa</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Messaging</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Brand Strategy</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/morance"
                        className="project-list-link w-inline-block"
                      >
                        <div>Morance</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Integration</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Messaging</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/dunham-co"
                        className="project-list-link w-inline-block"
                      >
                        <div>Dunham &amp; Co</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>UX Design</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Integration</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/chausser"
                        className="project-list-link w-inline-block"
                      >
                        <div>Chausser</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Brand Strategy</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Messaging</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/lucident"
                        className="project-list-link w-inline-block"
                      >
                        <div>Lucident</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                          alt="Arrow pointing right icon"
                          className="project-list-item-arrow"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </Link>
                      <div className="project-list-item-services-collection w-dyn-list">
                        <div
                          role="list"
                          className="project-list-item-services w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>UX Design</div>
                            </div>
                          </div>
                          <div
                            role="listitem"
                            className="project-list-item-service w-dyn-item"
                          >
                            <div className="tag">
                              <div>Integration</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03.webp 1920w"
                        className="project-list-item-image"
                        style={{
                          opacity: 0,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="section">
          <div className="container---main">
            <div className="cta-box">
              <div className="cta-box-contents">
                <div>
                  <div className="title-small muted-text">
                    Ready for the next step?
                  </div>
                  <div className="title-small">
                    Let’s bring your project to life
                  </div>
                </div>
                <Link
                  data-wf--button--variant="large"
                  href="/contact"
                  className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">Get in touch</div>
                    <div className="button-text">Get in touch</div>
                  </div>
                </Link>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04.webp"
                alt=""
                sizes="(max-width: 479px) 87vw, (max-width: 767px) 91vw, 345px"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04.webp 1920w"
                className="cta-box-image"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
