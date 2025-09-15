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
                News and insight from the
                <br />
                Andersen team
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
        <section className="section feautred-blog-section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="featured-article">
                    <a
                      href="/post/the-secret-language-of-touch-in-digital-design"
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 85vw, (max-width: 767px) 89vw, (max-width: 991px) 92vw, 45vw"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp 1920w"
                        className="hover-image"
                      />
                    </a>
                    <div className="featured-article-contents">
                      <div className="article-meta">
                        <a
                          href="/blog-categories/insight"
                          className="hover-link text-white"
                        >
                          Insight
                        </a>
                        <div className="muted-text">January 8, 2025</div>
                      </div>
                      <a
                        href="/post/the-secret-language-of-touch-in-digital-design"
                        className="w-inline-block"
                      >
                        <div className="title-medium text-white">
                          The secret language of touch in digital design
                        </div>
                      </a>
                      <a
                        data-wf--button--variant="white-large"
                        href="/post/the-secret-language-of-touch-in-digital-design"
                        className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">Read story</div>
                          <div className="button-text">Read story</div>
                        </div>
                      </a>
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
        <section className="section last-section">
          <div className="container---main">
            <div className="vertical-section tight-spacing">
              <div className="title-small">Latest articles</div>
              <div className="blog-list-wrapper w-dyn-list">
                <div role="list" className="blog-grid w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/creative-breakthroughs-happen-under-pressure"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/news"
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
                          News
                        </div>
                      </a>
                      <a
                        href="/post/creative-breakthroughs-happen-under-pressure"
                        className="large-text"
                      >
                        Creative breakthroughs happen under pressure
                      </a>
                      <div className="small-text muted-text">
                        January 7, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/what-we-learned-from-10-years-of-design-talks"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/insight"
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
                          Insight
                        </div>
                      </a>
                      <a
                        href="/post/what-we-learned-from-10-years-of-design-talks"
                        className="large-text"
                      >
                        What we learned from 10 years of design talks
                      </a>
                      <div className="small-text muted-text">
                        January 6, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/this-shift-in-design-systems-will-change-everything"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/news"
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
                          News
                        </div>
                      </a>
                      <a
                        href="/post/this-shift-in-design-systems-will-change-everything"
                        className="large-text"
                      >
                        This shift in design systems will change everything
                      </a>
                      <div className="small-text muted-text">
                        January 5, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/how-we-helped-hermosa-rethink-luxury-packaging"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/insight"
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
                          Insight
                        </div>
                      </a>
                      <a
                        href="/post/how-we-helped-hermosa-rethink-luxury-packaging"
                        className="large-text"
                      >
                        How we helped Hermosa rethink luxury packaging
                      </a>
                      <div className="small-text muted-text">
                        January 4, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/what-machine-learning-means-for-brand-expression"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/news"
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
                          News
                        </div>
                      </a>
                      <a
                        href="/post/what-machine-learning-means-for-brand-expression"
                        className="large-text"
                      >
                        What machine learning means for brand expression
                      </a>
                      <div className="small-text muted-text">
                        January 3, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/where-great-ideas-really-come-from"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/insight"
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
                          Insight
                        </div>
                      </a>
                      <a
                        href="/post/where-great-ideas-really-come-from"
                        className="large-text"
                      >
                        Where great ideas really come from
                      </a>
                      <div className="small-text muted-text">
                        January 2, 2025
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="article-grid-item">
                      <a
                        href="/post/behind-gridpoints-groundbreaking-campaign"
                        className="hover-image-link w-inline-block"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                          srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05.webp 1920w"
                          className="hover-image"
                        />
                      </a>
                      <a
                        data-wf--arrow-hover-link--variant="base"
                        href="/blog-categories/news"
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
                          News
                        </div>
                      </a>
                      <a
                        href="/post/behind-gridpoints-groundbreaking-campaign"
                        className="large-text"
                      >
                        Behind Gridpoint’s groundbreaking campaign
                      </a>
                      <div className="small-text muted-text">
                        January 1, 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
