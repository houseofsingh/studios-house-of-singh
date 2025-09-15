"use client";
import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import CaseStudyTile from "@/components/hos/sections/case-study-tile";
import Markdown from "@/components/hos/sections/hos-markdown";
import { caseStudies } from "@/lib/data/case-studies";
import { getNeighbors } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { caseId } = useParams();

  const caseStudy = caseStudies.find(({ id }) => id === caseId);

  if (!caseStudy)
    return (
      <>
        <Header />
        <>Not Found</>
        <Footer />
      </>
    );


  const otherCaseStudies = (() => {
    const currentIndex = caseStudies.findIndex(({ id }) => id === caseId);
    return getNeighbors(caseStudies, currentIndex || 0);
  })();

  return (
    <>
      <Header />
      <section className="section">
        <div className="container---main">
          <div className="case-study-intro-grid">
            <div
              className="fade-in-first"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="case-study-hero">
                <img src={caseStudy.badge.src} loading="lazy" alt="" />
                <div className="content-long">
                  <h1 className="title-large">{caseStudy.title}</h1>
                </div>
                <div className="case-study-hero-bottom">
                  <div className="metric">
                    <div className="title-huge">{caseStudy.metrics.stat}</div>
                    <div className="metric-explainer white-body-text">
                      {caseStudy.metrics.description}
                    </div>
                  </div>
                  <div className="case-study-meta">
                    {caseStudy.meta.map((meta, index) => (
                      <div key={index}>
                        <div className="meta-label">{meta.label}</div>
                        {meta.type === "link" ? (
                          <Link href={meta.link || ""} className="white-link">
                            {meta.value}
                          </Link>
                        ) : (
                          <div>{meta.value}</div>
                        )}
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
              <div className="case-study-photo-intro">
                <img
                  src={caseStudy.cover.src}
                  loading="lazy"
                  alt=""
                  className="rounded-edges"
                />
                <div className="case-study-intro-text-area">
                  <div className="subheading">{caseStudy.subtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section last-section">
        <div className="container---main">
          <div className="content-medium align-center">
            <div className="article-wrapper">
              <Markdown>{caseStudy.content}</Markdown>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container---main">
          <div className="horizontal-text-item no-bottom-padding">
            <div className="title-small">Feedback</div>
            <div className="customer-quote">
              <div className="title-small long-text">
                {caseStudy.feedback.content}
              </div>
              <div className="quote-author-bottom">
                <img
                  alt=""
                  src={caseStudy.feedback.author.cover.src}
                  className="customer-medium"
                />
                <div>
                  <div>{caseStudy.feedback.author.fullName}</div>
                  <div className="quote-author-position">
                    {caseStudy.feedback.author.designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!!otherCaseStudies.length && (
        <section className="section last-section">
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
              <div className="vertical-section tight-spacing">
                <div className="title-small">Further Case Studies</div>
                <div className="w-dyn-list">
                  <div role="list" className="case-study-grid w-dyn-items">
                    {otherCaseStudies.map((caseStudy) => (
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
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
