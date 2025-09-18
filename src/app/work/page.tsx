import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
  });

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
                We build digital products that perform beautifully at any scale.
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
        <section className="section last-section below-title">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="project-grid-a w-dyn-items">
                {projects.map((project) => (
                  <div
                    key={project._id}
                    role="listitem"
                    className="project-grid-item w-dyn-item"
                  >
                    <div className="project-a-wrapper">
                      <Link
                        href={`/work/${project.slug?.current}`}
                        className="project-a w-inline-block"
                      >
                        <div className="project-image-title">
                          <div className="hover-image-link">
                            {!!project.cover?.asset && (
                              <img
                                src={urlFor(project.cover.asset).url()}
                                loading="lazy"
                                alt=""
                                className="hover-image"
                              />
                            )}
                          </div>
                          <div className="project-title">
                            <div className="title-small">
                              {project.client?.name}
                            </div>
                            <div className="project-tagline">
                              {project.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="project-a-services w-dyn-list">
                        <div
                          role="list"
                          className="project-services w-dyn-items"
                        >
                          {project.services?.map((service) => (
                            <div
                              key={service._id}
                              role="listitem"
                              className="w-dyn-item"
                            >
                              <div className="tag">
                                <div>{service.title}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/marco-pierre"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67984773013003adf0f88806_project-01.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Marco Pierre</div>
                          <div className="project-tagline">
                            Bringing culinary artistry into the digital space
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Brand Strategy</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Messaging</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/continuum-ai"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995dcade5d6c60de523b53_project-05.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">continuum.ai</div>
                          <div className="project-tagline">
                            Making artificial intelligence transparent and
                            accessible at enterprise scale
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>UX Design</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Integration</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/invarion"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995ccc1400b35535289289_project-08.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Invarion</div>
                          <div className="project-tagline">
                            Defining the future of mixed reality through
                            intuitive interaction design
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Brand Strategy</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>UX Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/hermosa"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d4087883908fb4c69c3_project-07.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Hermosa</div>
                          <div className="project-tagline">
                            Evolving a heritage brand for the modern luxury
                            consumer
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Messaging</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Brand Strategy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/morance"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67995d6624471ad9df7e28ae_project-04.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Morance</div>
                          <div className="project-tagline">
                            Positioning an electric vehicle innovator in the
                            premium automotive space
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Integration</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Messaging</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/dunham-co"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679959a1ff18202941d564d9_project-09.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Dunham &amp; Co</div>
                          <div className="project-tagline">
                            Creating a digital ecosystem for the modern cycling
                            enthusiast
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>UX Design</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Integration</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/chausser"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67996680ba19896f1903c752_project-02.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Chausser</div>
                          <div className="project-tagline">
                            Championing sustainable fashion and conscious
                            manufacturing
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Brand Strategy</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Messaging</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_9d7cb892-7f2b-f094-5be6-dcb1d36224e3-3c888dd0"
                  role="listitem"
                  className="project-grid-item w-dyn-item"
                >
                  <div className="project-a-wrapper">
                    <Link
                      href="/projects/lucident"
                      className="project-a w-inline-block"
                    >
                      <div className="project-image-title">
                        <div className="hover-image-link">
                          <img
                            src="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03.webp"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 46vw"
                            srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679966c324471ad9df8785ef_project-03.webp 1920w"
                            className="hover-image"
                          />
                        </div>
                        <div className="project-title">
                          <div className="title-small">Lucident</div>
                          <div className="project-tagline">
                            Crafting a new product narrative for an audio
                            technology pioneer
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="project-a-services w-dyn-list">
                      <div role="list" className="project-services w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>UX Design</div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div className="tag">
                            <div>Integration</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
