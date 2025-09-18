import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function Page() {
  const testimonials = await sanityFetch({
    query: TESTIMONIALS_QUERY,
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
            <div className="content-vertical increased-gap">
              <div className="title-rating">
                <div className="content-long">
                  <h1 className="title-large">
                    Hear from real customers who partnered with us.
                  </h1>
                </div>
              </div>
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
        <section className="section">
          <div className="container---main">
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="testimonial-card-a">
                  <div className="testimonial-avatar-quote">
                    <div>
                      {}
                      {!!testimonial.person?.cover?.asset && (
                        <img
                          src={urlFor(testimonial.person?.cover?.asset).url()}
                          alt=""
                          className="testimonial-avatar w-full aspect-square object-cover"
                        />
                      )}
                    </div>
                    {!!testimonial.review && (
                      <div className="large-text">
                        <PortableText value={testimonial.review} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div>{testimonial.person?.name}</div>
                    <div className="muted-text">
                      {testimonial.person?.title}
                      {!!testimonial.person?.company?.name && (
                        <>, {testimonial.person?.company?.name}</>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div
        className="fade-in-on-scroll"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section bottom-cta">
          <div className="container---main">
            <div className="content-vertical cta">
              <div className="content-long centered">
                <div className="title-small">
                  If you have any further questions or enquiries, please get in
                  touch with our team via the contact page.
                </div>
              </div>
              <a
                data-wf--button--variant="large"
                href="/contact"
                className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">Start the conversation</div>
                  <div className="button-text">Start the conversation</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
