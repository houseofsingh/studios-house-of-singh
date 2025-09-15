import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import CaseStudyTile from "@/components/hos/sections/case-study-tile";
import { Marquee } from "@/components/magicui/marquee";
import { caseStudies, CaseStudy } from "@/lib/data/case-studies";
import Link from "next/link";

export type PageData = {
  title: string;
  caseStudies: CaseStudy[];
  cta: {
    cover: {
      src: string;
    };
    title: string;
    button: {
      href: string;
      label: string;
    };
  };
};

const page: PageData = {
  title:
    "We create designs that deliver measurable results for ambitious brands.",
  caseStudies,
  cta: {
    cover: {
      src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a16fd5070be8427c269c41_world.svg",
    },
    title: "Working in over 20 international markets",
    button: {
      href: "/contact",
      label: "Get in touch",
    },
  },
};

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
              <h1 className="title-large">{page.title}</h1>
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
        <section className="section below-title">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="case-study-grid w-dyn-items">
                {page.caseStudies.map((caseStudy) => (
                  <div
                    key={caseStudy.id}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <CaseStudyTile caseStudy={caseStudy} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
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
            <div className="wide-cta-box">
              <Marquee className="marquee [--duration:60s] w-full wide-cta-bg">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="marquee-group">
                    <img src={page.cta.cover.src} alt="" />
                  </div>
                ))}
              </Marquee>
              <div className="title-large">{page.cta.title}</div>
              <Link
                data-wf--button--variant="white-large"
                href={page.cta.button.href}
                className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">{page.cta.button.label}</div>
                  <div className="button-text">{page.cta.button.label}</div>
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
