import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import OpenRoles from "@/components/hos/sections/open-roles";
import Link from "next/link";
import { CAREER_QUERY, CAREERS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { ApplyNowForm } from "./apply-now-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = await sanityFetch({
    query: CAREER_QUERY,
    params: { id },
  });

  const careers = (
    await sanityFetch({
      query: CAREERS_QUERY,
    })
  ).filter((career) => career._id !== id);

  if (!career) return null;

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
            <div className="title-with-tags">
              <div className="services-title-wrapper">
                <Link
                  data-w-id="f1197e9e-15bd-4464-b0e8-de1079947e9a"
                  href={"/careers"}
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
                  <div className="title-large">Careers</div>
                </Link>
                <h1 className="title-large">{career.position}</h1>
              </div>
              <div className="tags">
                <div className="tag">{career.location}</div>
                <div className="tag">{career.basis}</div>
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
            <div className="content-medium">
              <div className="article-wrapper">
                <div className="subheading long-text">{career.brief}</div>
                {!!career.body && (
                  <div className="article w-richtext [&>ul]:list-disc [&>ol]:list-decimal">
                    <PortableText value={career.body} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <ApplyNowForm career={career} />

      {!!careers.length && (
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <OpenRoles list={careers} />
        </div>
      )}
      <Footer />
    </>
  );
}
