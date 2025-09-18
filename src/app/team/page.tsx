import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  // const team = await sanityFetch({
  //   query: AUTHORS_QUERY,
  // });

  const team = await sanityFetch({
    query: TEAM_MEMBERS_QUERY,
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
                Our multi-disciplinary team are ready for the challenge
              </h1>
            </div>
          </div>
        </section>
      </div>
      <section className="section below-title">
        <div className="container---main">
          <div className="team-collection-list w-dyn-list">
            <div role="list" className="team-grid w-dyn-items">
              {team.map((member) => (
                <div key={member._id} role="listitem" className="w-dyn-item">
                  <div>
                    <Link
                      href={`/team/${member.slug?.current}`}
                      className="team-member w-inline-block"
                    >
                      <div className="hover-image-link">
                        {member.cover?.asset && (
                          <img
                            src={urlFor(member.cover.asset).url()}
                            alt=""
                            className={cn(
                              "hover-image",
                              "w-full aspect-square object-cover",
                              "transition duration-500",
                              "opacity-100 hover:opacity-80",
                              "transform scale-100 hover:scale-105"
                            )}
                          />
                        )}
                      </div>
                      <div>
                        <div>{member.name}</div>
                        <div className="muted-text">{member.title}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section last-section">
        <div className="container---main">
          <div
            className="fade-in-on-scroll"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="marquee-box">
              <div className="marquees">
                <Marquee className="marquee [--duration:60s] w-full">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="marquee-group">
                      <div className="text-marquee-items">
                        <div className="title-huge marquee-text">
                          Brand Strategy
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbafe375c88c2dbb44_graphic-icon-02.svg"
                          alt=""
                          className="invert marquee-icon"
                        />
                        <div className="title-huge marquee-text">Messaging</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe069b90469e88a70_graphic-icon-04.svg"
                          alt=""
                          className="invert marquee-icon"
                        />
                        <div className="title-huge marquee-text">UX Design</div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cbe7c98e9486b4c4c4_graphic-icon-05.svg"
                          alt=""
                          className="invert marquee-icon"
                        />
                        <div className="title-huge marquee-text">
                          Integration
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a033cb8904518cb730891c_graphic-icon-03.svg"
                          alt=""
                          className="invert marquee-icon"
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="marquee-box-text">
                <div className="large-text">
                  We work at the intersection of brand strategy and technical
                  innovation to build lasting digital experiences.
                </div>
              </div>
              <Link
                data-wf--button--variant="white-large"
                href="/contact"
                className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">Get in touch</div>
                  <div className="button-text">Get in touch</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
