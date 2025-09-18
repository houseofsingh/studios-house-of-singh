import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { NEXT_POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "next/link";

import { getImageDimensions } from "@sanity/asset-utils";

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
    <figure className="w-richtext-align-center w-richtext-figure-type-image w-full">
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
  const post = await sanityFetch({
    query: POST_QUERY,
    params: {
      slug,
    },
  });

  const othersQuery = await sanityFetch({
    query: NEXT_POSTS_QUERY,
    params: { slug },
  });

  const others = [othersQuery?.next, othersQuery?.initial]
    .flat()
    .filter(Boolean)
    .slice(0, 4);

  const page = {
    title: (
      <>
        News and insight from the <br />
        House of Singh Studios team
      </>
    ),
    latestPostCTA: "Read story",
    continueReading: "Continue Reading",
  };

  if (!post) return null;

  return (
    <>
      <Header />

      {/**
       * ----------------------------------------------------------------------------
       * Post Overview
       * ----------------------------------------------------------------------------
       */}
      <div
        className="fade-in-first"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <section className="section article-hero-section">
          <div className="container---main">
            <div className="article-hero">
              <div
                id="w-node-_47357163-fa00-bbc4-71f6-4a07a298b7ef-9d7e0c1f"
                className="article-title-wrapper"
              >
                <div className="article-title">
                  <div className="article-meta">
                    <Link
                      href={`/blog/categories/${post.categories?.[0].slug?.current}`}
                      className="hover-link text-white"
                    >
                      {post.categories?.[0].title}
                    </Link>
                    <div className="muted-text">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  <div className="content-medium">
                    <h1 className="title-large long-text">{post.title}</h1>
                  </div>
                </div>
                <Link
                  href={`/team/${post.author?.slug?.current}`}
                  className="article-author w-inline-block"
                >
                  <img
                    src={urlFor(post.author?.cover?.asset || "").url()}
                    loading="lazy"
                    alt=""
                    className="article-author-photo"
                  />
                  <div className="article-author-text">
                    <div>By&nbsp;</div>
                    <div>{post.author?.name}</div>
                  </div>
                </Link>
              </div>
              <img
                src={urlFor(post.cover?.asset || "").url()}
                loading="lazy"
                alt=""
                className="rounded-edges w-full aspect-square object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/**
       * ----------------------------------------------------------------------------
       * Post Body
       * ----------------------------------------------------------------------------
       */}
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
            <div className="content-medium align-center">
              <div className="article-wrapper">
                <div className="subheading">{post.subtitle}</div>
                {/* <Markdown>{post.}</Markdown> */}
                {post.body && (
                  <div className="article w-richtext [&>ul]:list-disc [&>ol]:list-decimal">
                    <PortableText
                      value={post.body}
                      components={{
                        types: {
                          image: SampleImageComponent,
                        },
                      }}
                      // components={/* optional object of custom components to use */}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/**
       * ----------------------------------------------------------------------------
       * Other Posts
       * ----------------------------------------------------------------------------
       */}
      {/* <pre>{JSON.stringify(others, null, 2)}</pre> */}
      {!!others.length && (
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 0,
            transform:
              "translate3d(0px, 12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <section className="section last-section">
            <div className="container---main">
              <div className="vertical-section tight-spacing">
                <div className="title-small">{page.continueReading}</div>
                <div className="blog-list-wrapper w-dyn-list">
                  <div role="list" className="blog-grid w-dyn-items">
                    {others.map((post) => {
                      if (!post) return null;

                      return (
                        <div
                          key={post._id}
                          role="listitem"
                          className="w-dyn-item"
                        >
                          <div className="article-grid-item">
                            <Link
                              href={`/blog/${post.slug?.current}`}
                              className="hover-image-link w-inline-block"
                            >
                              <img
                                src={urlFor(post.cover?.asset || "").url()}
                                loading="lazy"
                                alt=""
                                className="hover-image w-full aspect-square object-cover"
                              />
                            </Link>
                            <Link
                              data-wf--arrow-hover-link--variant="base"
                              href={`/blog/categories/${post.categories?.[0].slug?.current}`}
                              className="arrow-hover-link w-inline-block"
                            >
                              <div
                                className="arrow-hover-icon-wrapper"
                                style={{ width: 0, opacity: 0 }}
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                                  alt="Arrow pointing right icon"
                                  className="arrow-hover-icon"
                                />
                              </div>
                              <div
                                className="arrow-link-text"
                                style={{ opacity: "0.5" }}
                              >
                                {post.categories?.[0].title}
                              </div>
                            </Link>
                            <Link
                              href={`/blog/${post.slug?.current}`}
                              className="large-text"
                            >
                              {post.title}
                            </Link>
                            <div className="small-text muted-text">
                              {formatDate(post.publishedAt)}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
}
