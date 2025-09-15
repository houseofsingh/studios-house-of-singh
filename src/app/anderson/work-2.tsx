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
                  We craft purposeful brand stories that connect and drive
                  growth.
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
                      "translate3d(-34.5%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className="image-marquee-items">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01.webp"
                      alt=""
                      sizes="(max-width: 479px) 225px, (max-width: 767px) 300px, (max-width: 991px) 450px, 517.5px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02.webp 1800w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05.webp 1920w"
                      className="image-marquee-item"
                    />
                  </div>
                </div>
                <div
                  className="marquee-group"
                  style={{
                    transform:
                      "translate3d(-34.5%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className="image-marquee-items">
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01.webp"
                      alt=""
                      sizes="(max-width: 479px) 225px, (max-width: 767px) 300px, (max-width: 991px) 450px, 517.5px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d7c2f386612cad98eade_landscape-01.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827ca9c478a74ce3881bd_square-02.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67996bd1005ad96427b71be8_square-16.webp 1920w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02.webp"
                      alt=""
                      sizes="(max-width: 479px) 112.5px, (max-width: 767px) 150px, (max-width: 991px) 225px, 258.75px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6791d20f4be8f4a32c31de15_portrait-02.webp 1800w"
                      className="image-marquee-item"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05.webp"
                      alt=""
                      sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 300px, 345px"
                      srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679827cad8f574aec8c29cab_square-05.webp 1920w"
                      className="image-marquee-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="fade-in-third"
        style={{
          // opacity: 0,
          transform:
            "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section">
          <div className="container---main">
            <div className="vertical-section tight-spacing">
              <div className="title-small">Selected Clients</div>
              <div className="project-list-wrapper w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-list-item">
                      <Link
                        href="/projects/marco-pierre"
                        className="project-list-link w-inline-block"
                      >
                        <div>Marco Pierre</div>
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
                        src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp"
                        alt=""
                        sizes="(max-width: 991px) 100vw, 222px"
                        srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp 1920w"
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
