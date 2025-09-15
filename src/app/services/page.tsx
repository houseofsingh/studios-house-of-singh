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
              <h1 className="title-large long-text">
                Your brand has a story worth telling—we help you tell it right.
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
        <section className="section logos">
          <div className="container---main">
            <div className="marquee">
              <div
                className="marquee-group"
                style={{
                  transform:
                    "translate3d(-11.333%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
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
                    "translate3d(-11.333%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
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
      <div
        className="fade-in-third"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <div className="service-item-text">
                        <div>
                          <Link
                            href="/services/brand-strategy"
                            className="w-inline-block"
                          >
                            <div>
                              <div className="title-small service-item-title">
                                Brand Strategy
                              </div>
                            </div>
                          </Link>
                          <div className="title-small service-item-description">
                            Transform your brand identity into a compelling
                            brand story that resonates with your audience. We
                            align your values and vision with market
                            opportunities.
                          </div>
                        </div>
                        <div>
                          <div className="service-item-list-heading">
                            How we help:
                          </div>
                          <div className="rich-text-list w-richtext">
                            <ul role="list">
                              <li>Market Analysis</li>
                              <li>Brand Architecture</li>
                              <li>Guidelines Creation</li>
                              <li>Strategy Roadmap</li>
                              <li>Performance Tracking</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        data-wf--button--variant="outlined"
                        href="/services/brand-strategy"
                        className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">
                            More about this service
                          </div>
                          <div className="button-text">
                            More about this service
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Link
                      id="w-node-_3e64c8ee-9d04-b336-feae-6e991e1f6837-83c56baf"
                      href="/services/brand-strategy"
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679847d190fdbc72467f1063_square-06.webp 1920w"
                        className="hover-image"
                      />
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <div className="service-item-text">
                        <div>
                          <Link
                            href="/services/messaging"
                            className="w-inline-block"
                          >
                            <div>
                              <div className="title-small service-item-title">
                                Messaging
                              </div>
                            </div>
                          </Link>
                          <div className="title-small service-item-description">
                            Craft compelling communications that capture your
                            brand’s unique voice and connect with your target
                            audience. We help you tell stories that drive
                            engagement.
                          </div>
                        </div>
                        <div>
                          <div className="service-item-list-heading">
                            How we help:
                          </div>
                          <div className="rich-text-list w-richtext">
                            <ul role="list">
                              <li>Voice Development</li>
                              <li>Message Framework</li>
                              <li>Content Creation</li>
                              <li>Story Design</li>
                              <li>Team Training</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        data-wf--button--variant="outlined"
                        href="/services/messaging"
                        className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">
                            More about this service
                          </div>
                          <div className="button-text">
                            More about this service
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Link
                      id="w-node-_3e64c8ee-9d04-b336-feae-6e991e1f6837-83c56baf"
                      href="/services/messaging"
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679849c401443d2a240eab0c_square-08.webp 1920w"
                        className="hover-image"
                      />
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <div className="service-item-text">
                        <div>
                          <Link
                            href="/services/ux-design"
                            className="w-inline-block"
                          >
                            <div>
                              <div className="title-small service-item-title">
                                UX Design
                              </div>
                            </div>
                          </Link>
                          <div className="title-small service-item-description">
                            Create intuitive digital experiences that delight
                            users and drive results. Our UX design solutions
                            combine user research and strategic thinking to
                            optimize interactions.
                          </div>
                        </div>
                        <div>
                          <div className="service-item-list-heading">
                            How we help:
                          </div>
                          <div className="rich-text-list w-richtext">
                            <ul role="list">
                              <li>User Research</li>
                              <li>Journey Mapping</li>
                              <li>Prototype Development</li>
                              <li>Navigation Design</li>
                              <li>Usability Testing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        data-wf--button--variant="outlined"
                        href="/services/ux-design"
                        className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">
                            More about this service
                          </div>
                          <div className="button-text">
                            More about this service
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Link
                      id="w-node-_3e64c8ee-9d04-b336-feae-6e991e1f6837-83c56baf"
                      href="/services/ux-design"
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984c5c05fe87e1450e5d00_square-07.webp 1920w"
                        className="hover-image"
                      />
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <div className="service-item-text">
                        <div>
                          <Link
                            href="/services/integration"
                            className="w-inline-block"
                          >
                            <div>
                              <div className="title-small service-item-title">
                                Integration
                              </div>
                            </div>
                          </Link>
                          <div className="title-small service-item-description">
                            Connect your digital ecosystem to streamline
                            operations and enhance user experience. We implement
                            integrated solutions that maximize efficiency and
                            data flow.
                          </div>
                        </div>
                        <div>
                          <div className="service-item-list-heading">
                            How we help:
                          </div>
                          <div className="rich-text-list w-richtext">
                            <ul role="list">
                              <li>System Assessment</li>
                              <li>Architecture Design</li>
                              <li>API Integration</li>
                              <li>Middleware Development</li>
                              <li>Documentation Creation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        data-wf--button--variant="outlined"
                        href="/services/integration"
                        className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">
                            More about this service
                          </div>
                          <div className="button-text">
                            More about this service
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Link
                      id="w-node-_3e64c8ee-9d04-b336-feae-6e991e1f6837-83c56baf"
                      href="/services/integration"
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984d17a11c968c3a5d8868_square-09.webp 1920w"
                        className="hover-image"
                      />
                    </Link>
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
                    Want to know more?
                  </div>
                  <div className="title-small">
                    Learn about our team and culture
                  </div>
                </div>
                <Link
                  data-wf--button--variant="large"
                  href="/about"
                  className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">About us</div>
                    <div className="button-text">About us</div>
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
        </section>
      </div>
      <Footer />
    </>
  );
}
