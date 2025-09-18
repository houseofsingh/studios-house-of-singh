import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import Link from "next/link";
import React from "react";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";

export default async function Page() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  const post = posts[0];
  const page = {
    title: (
      <>
        News and insight from the <br />
        House of Singh Studios team
      </>
    ),
    latestPostCTA: "Read story",
  };

  return (
    <>
      <Header />

      {/**
       * ----------------------------------------------------------------------------
       * Page Title
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
        <section className="section title">
          <div className="container---main">
            <div className="content-long">
              <h1 className="title-large">{page.title}</h1>
            </div>
          </div>
        </section>
      </div>

      {/**
       * ----------------------------------------------------------------------------
       * Latest published articles/posts
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
        <section className="section feautred-blog-section">
          <div className="container---main">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="featured-article">
                    <Link
                      href={`/blog/${post.slug?.current}`}
                      className="hover-image-link w-inline-block"
                    >
                      <img
                        src={urlFor(post.cover?.asset || "").url()}
                        loading="lazy"
                        alt={post.cover?.alt || `${post.title} | cover image`}
                        className="hover-image w-full aspect-square object-cover"
                      />
                    </Link>
                    <div className="featured-article-contents">
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
                      <Link
                        href={`/blog/${post.slug?.current}`}
                        className="w-inline-block"
                      >
                        <div className="title-medium text-white">
                          {post.title}
                        </div>
                      </Link>
                      <Link
                        data-wf--button--variant="white-large"
                        href={`/blog/${post.slug?.current}`}
                        className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
                      >
                        <div className="button-text-wrapper">
                          <div className="button-text">
                            {page.latestPostCTA}
                          </div>
                          <div className="button-text">page.latestPostCTA</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/**
       * ----------------------------------------------------------------------------
       * List of published articles/posts
       * ----------------------------------------------------------------------------
       */}

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
              <div className="title-small">Latest Articles</div>
              <div className="blog-list-wrapper w-dyn-list">
                <div role="list" className="blog-grid w-dyn-items">
                  {posts.map((post) => (
                    <div key={post._id} role="listitem" className="w-dyn-item">
                      <div className="article-grid-item">
                        <Link
                          href={`/blog/${post.slug?.current}`}
                          className="hover-image-link w-inline-block"
                        >
                          <img
                            src={urlFor(post.cover?.asset || "").url()}
                            loading="lazy"
                            alt=""
                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
                            // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01.webp 1920w"
                            className="hover-image w-full aspect-square object-cover"
                          />
                        </Link>
                        <Link
                          data-wf--arrow-hover-link--variant="base"
                          href={`/blog-categories/${post.categories?.[0].slug?.current}`}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
