import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "next-sanity";
import Link from "next/link";

// Barebones lazy-loaded image component
const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    <figure className="w-richtext-align-center w-richtext-figure-type-image w-full max-w-full!">
      <img
        src={urlFor(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
      {value.alt && <figcaption>{value.alt}</figcaption>}
    </figure>
  );
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await sanityFetch({
    query: PROJECT_QUERY,
    params: {
      slug,
    },
  });

  const otherProjects = (
    await sanityFetch({
      query: PROJECTS_QUERY,
    })
  ).filter((project) => project.slug?.current !== slug);

  if (!project) return null;

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
                    {project.client?.name}
                  </h1>
                  <h2 className="title-large long-text">{project.title}</h2>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="tags w-dyn-items">
                    {project.services?.map((service) => (
                      <div
                        key={service._id}
                        role="listitem"
                        className="w-dyn-item"
                      >
                        <Link
                          href={`/services/${service.slug?.current}`}
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
                          <div>{service.title}</div>
                        </Link>
                      </div>
                    ))}
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
                {!!project.cover?.asset && (
                  <img
                    src={urlFor(project.cover.asset).url()}
                    loading="lazy"
                    alt=""
                    className="project-hero-image"
                  />
                )}
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
                  <div>{project.client?.name}</div>
                </div>
                <div className="project-meta-item">
                  <div className="meta-label">Industry</div>
                  <div>{project.client?.industry}</div>
                </div>
                <div className="project-meta-item">
                  <div className="meta-label">Website</div>
                  <Link
                    data-wf--arrow-hover-link--variant="base"
                    href={project.client?.website || "#"}
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
                      {(() => {
                        try {
                          return new URL(project.client?.website || "")
                            .hostname;
                        } catch (error) {
                          console.error("err: ", error);
                          return null;
                        }
                      })()}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="project-summary-text-wrapper">
                <div className="subheading">{project.brief}</div>
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
                {project.body && (
                  <div className="project-rich-text w-richtext [&>ul]:list-disc [&>ol]:list-decimal">
                    <PortableText
                      value={project.body}
                      components={{
                        types: {
                          image: SampleImageComponent,
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
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
        <section className="section">
          <div className="container---main">
            <div className="horizontal-text-item no-bottom-padding">
              <div className="title-small">Feedback</div>
              <div className="space-y-28">
                {project.testimonials?.map((testimonial) => (
                  <div key={testimonial._id} className="customer-quote">
                    <div className="title-small long-text">
                      {!!testimonial.review && (
                        <PortableText value={testimonial.review} />
                      )}
                    </div>
                    <div className="testimonial-card-author-logo">
                      <div>
                        <div>{testimonial.person?.name}</div>
                        <div className="muted-text">
                          {testimonial.person?.title}
                        </div>
                      </div>
                      {!!testimonial.person?.company?.logo?.black?.asset && (
                        <img
                          src={urlFor(
                            testimonial.person?.company?.logo?.black?.asset
                          ).url()}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                ))}
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
                  {otherProjects.map((project) => (
                    <div
                      key={project._id}
                      role="listitem"
                      className="w-dyn-item"
                    >
                      <div className="project-list-item">
                        <Link
                          href={`/work/${project.slug?.current}`}
                          className="project-list-link w-inline-block"
                        >
                          <div>{project.client?.name}</div>
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
                            {project.services?.map((service) => (
                              <div
                                key={service._id}
                                role="listitem"
                                className="project-list-item-service w-dyn-item"
                              >
                                <div className="tag">
                                  <div>{service.title}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* {!!project.cover?.asset && (
                          <img
                            src={urlFor(project.cover?.asset).url()}
                            alt=""
                            className="project-list-item-image"
                            style={{
                              opacity: 0,
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        )} */}
                      </div>
                    </div>
                  ))}
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
                    <div className="button-text">Start the conversation</div>
                    <div className="button-text">Start the conversation</div>
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
