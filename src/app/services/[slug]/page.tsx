import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Markdown from "@/components/hos/sections/hos-markdown";
import { services } from "@/lib/data/services";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SERVICE_QUERY } from "@/sanity/lib/queries/service";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await sanityFetch({
    query: SERVICE_QUERY,
    params: {
      slug,
    },
  });

  if (!service) return null;

  return (
    <>
      <Header />
      <div
        data-w-id="c540c583-6448-aac2-f3ba-71cea82cea22"
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
            <div className="services-title-wrapper">
              <Link
                data-w-id="f1197e9e-15bd-4464-b0e8-de1079947e9a"
                href="/services"
                className="back-link w-inline-block"
                style={{ opacity: "0.5" }}
              >
                <div
                  className="back-link-icon-wrapper"
                  style={{ width: 0, opacity: 0 }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67984dfd648608c08c098ab3_interface-icon-arrow-left-dark.svg"
                    alt="Arrow pointing left icon"
                    className="back-link-icon"
                  />
                </div>
                <div className="title-large">Services</div>
              </Link>
              <h1 className="title-large">{service.title}</h1>
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
        <section className="section service-intro-section">
          <div className="container---main">
            <div className="service-intro">
              {service.cover?.asset && (
                <img
                  src={urlFor(service.cover?.asset).url()}
                  loading="lazy"
                  alt=""
                  className="rounded-edges w-full aspect-square object-cover"
                />
              )}
              <h2 className="title-small long-text">{service.description}</h2>
            </div>
          </div>
        </section>
      </div>
      {(!!service.body || !!service.deliverables?.length) && (
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <section className="section service-details">
            <div className="container---main">
              {!!service.body && (
                <div className="horizontal-text-item">
                  <div className="title-small">Description</div>
                  <div className="basic-rich-text w-richtext">
                    <PortableText value={service.body} />
                  </div>
                </div>
              )}
              {!!service.deliverables && (
                <div className="horizontal-text-item">
                  <div className="title-small">What we deliver</div>
                  <div className="basic-rich-text w-richtext">
                    <PortableText value={service.deliverables} />
                    {/* <ul role="list">
                      {service.deliverables?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
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
            <div className="testimonial-card-d">
              <img
                src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b7618c5dea22323eb57_customer-avatar-03.webp"
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b7618c5dea22323eb57_customer-avatar-03-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67930b7618c5dea22323eb57_customer-avatar-03.webp 600w"
                id="w-node-b5de894a-ee77-286f-e6ae-adda72e8d5b2-f10f6011"
                sizes="(max-width: 479px) 85vw, (max-width: 991px) 222px, 30vw"
                alt=""
                className="rounded-edges testimonial-card-image"
              />
              <div className="testimonial-card-d-contents">
                <div className="title-small long-text">
                  “Working with Andersen changed how we think about digital
                  transformation. Their systematic approach brought clarity to
                  challenges we'd struggled with for years.”
                </div>
                <div className="testimonial-card-author-logo">
                  <div>
                    <div>Clara Fischer</div>
                    <div className="muted-text">
                      Innovation Lead, Continuum AI
                    </div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679855aff743c53e2b63d2b8_customer-logo-contiuumai-white.svg"
                    alt=""
                  />
                </div>
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
        <section className="section bottom-cta">
          <div className="container---main">
            <div className="content-vertical cta">
              <div className="content-long centered">
                <div className="title-small">
                  {service.footmark}
                  <br />
                  Let's build it together.
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
