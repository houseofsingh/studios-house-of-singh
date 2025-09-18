import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { Marquee } from "@/components/magicui/marquee";
// import { services } from "@/lib/data/services";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { CLIENTS_QUERY } from "@/sanity/lib/queries";
import { SERVICES_QUERY } from "@/sanity/lib/queries/service";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function Page() {
  const services = await sanityFetch({ query: SERVICES_QUERY });
  const clients = await sanityFetch({ query: CLIENTS_QUERY });

  const page = {
    title:
      "From strategy to storytelling, we build brand systems designed to last.",
  };

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
              <h1 className="title-large long-text">{page.title}</h1>
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
              <Marquee className="marquee [--duration:60s] w-full">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index}
                    className="marquee-group"
                    style={{
                      transform:
                        "translate3d(-11.333%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <div className="marquee-logos">
                      {clients.map((client) => {
                        if (!client.logo?.black?.asset) return null;
                        return (
                          <div key={client._id} className="logo-box">
                            <img
                              src={urlFor(client.logo?.black?.asset).url()}
                              alt={client.logo.black.alt}
                              className="logo-box-image"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </Marquee>
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
                {services.map((service) => (
                  <div key={service._id} role="listitem" className="w-dyn-item">
                    <div className="service-item">
                      <div className="service-item-contents">
                        <div className="service-item-text">
                          <div>
                            <Link
                              href={`/services/${service.slug?.current}`}
                              className="w-inline-block"
                            >
                              <div>
                                <div className="title-small service-item-title">
                                  {service.title}
                                </div>
                              </div>
                            </Link>
                            <div className="title-small service-item-description">
                              {service.description}
                            </div>
                          </div>
                          {!!service.deliverables && (
                            <div>
                              <div className="service-item-list-heading">
                                What we deliver:
                              </div>
                              <div className="rich-text-list w-richtext">
                                <PortableText value={service.deliverables} />
                              </div>
                            </div>
                          )}
                        </div>
                        <Link
                          data-wf--button--variant="outlined"
                          href={`/services/${service.slug?.current}`}
                          className="button w-variant-90b7551e-2f4d-fd9e-89eb-368bc1201380 w-inline-block"
                        >
                          <div className="button-text-wrapper">
                            <div className="button-text">
                              Explore this service
                            </div>
                            <div className="button-text">
                              Explore this service
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Link
                        id="w-node-_3e64c8ee-9d04-b336-feae-6e991e1f6837-83c56baf"
                        href={`/services/${service.slug?.current}`}
                        className="hover-image-link w-inline-block aspect-square"
                      >
                        {service.cover?.asset && (
                          <img
                            src={urlFor(service.cover?.asset).url()}
                            loading="lazy"
                            alt=""
                            className="hover-image w-full aspect-square object-cover"
                          />
                        )}
                      </Link>
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
            <div className="cta-box">
              <div className="cta-box-contents">
                <div>
                  <div className="title-small muted-text">
                    What story do you want to tell?
                  </div>
                  <div className="title-small">Let’s plan yours.</div>
                </div>
                <Link
                  data-wf--button--variant="large"
                  href="/contact/project"
                  className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text">Start your project</div>
                    <div className="button-text">Start your project</div>
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
