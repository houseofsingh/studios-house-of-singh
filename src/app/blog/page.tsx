import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { ArticleTile } from "@/components/hos/sections/article-tile";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: ["News and insight from the", "Andersen team"],
  };
  return (
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
              {mock.title.map((row, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {row}
                </React.Fragment>
              ))}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionTwo() {
  const mock = {
    href: "/post/the-secret-language-of-touch-in-digital-design",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp",
    category: {
      title: "Insight",
      href: "/blog-categories/insight",
      date: "January 8, 2025",
    },
    article: {
      href: "/post/the-secret-language-of-touch-in-digital-design",
      title: "The secret language of touch in digital design",
      cta: "Read story",
    },
  };

  return (
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
                  <a
                    href={mock.href}
                    className="hover-image-link w-inline-block"
                  >
                    <img
                      src={mock.src}
                      loading="lazy"
                      alt=""
                      // sizes="(max-width: 479px) 85vw, (max-width: 767px) 89vw, (max-width: 991px) 92vw, 45vw"
                      // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp 1920w"
                      className="hover-image"
                    />
                  </a>
                  <div className="featured-article-contents">
                    <div className="article-meta">
                      <a
                        href={mock.category.href}
                        className="hover-link text-white"
                      >
                        {mock.category.title}
                      </a>
                      <div className="muted-text">{mock.category.date}</div>
                    </div>
                    <a href={mock.article.href} className="w-inline-block">
                      <div className="title-medium text-white">
                        {mock.article.title}
                      </div>
                    </a>
                    <a
                      data-wf--button--variant="white-large"
                      href={mock.article.href}
                      className="button w-variant-521e6cc1-75a7-b354-2091-51e1cfdc804a w-inline-block"
                    >
                      <div className="button-text-wrapper">
                        <div className="button-text">{mock.article.cta}</div>
                        <div className="button-text">{mock.article.cta}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionThree() {
  const mock = {
    title: "Latest articles",
    items: [
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01.webp",
        title: "Creative breakthroughs happen under pressure",
        date: "January 7, 2025",
        slug: "creative-breakthroughs-happen-under-pressure",
        category: {
          slug: "news",
          title: "News",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae92437db3a669eedddb6_blog-02.webp",
        title: "What we learned from 10 years of design talks",
        date: "January 6, 2025",
        slug: "what-we-learned-from-10-years-of-design-talks",
        category: {
          slug: "insight",
          title: "Insight",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae8fbd683fa01c711ea64_blog-10.webp",
        title: "This shift in design systems will change everything",
        date: "January 5, 2025",
        slug: "this-shift-in-design-systems-will-change-everything",
        category: {
          slug: "news",
          title: "News",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae73edd8ad63a792179f0_blog-04.webp",
        title: "How we helped Hermosa rethink luxury packaging",
        date: "January 4, 2025",
        slug: "how-we-helped-hermosa-rethink-luxury-packaging",
        category: {
          slug: "insight",
          title: "Insight",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6ff5f31cf9bb5d3befd_blog-03.webp",
        title: "What machine learning means for brand expression",
        date: "January 3, 2025",
        slug: "what-machine-learning-means-for-brand-expression",
        category: {
          slug: "news",
          title: "News",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6aed683fa01c70fc4f6_blog-08.webp",
        title: "Where great ideas really come from",
        date: "January 2, 2025",
        slug: "where-great-ideas-really-come-from",
        category: {
          slug: "insight",
          title: "Insight",
        },
      },
      {
        src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae607337b8ed138cd04a9_blog-05.webp",
        title: "Behind Gridpoint’s groundbreaking campaign",
        date: "January 1, 2025",
        slug: "behind-gridpoints-groundbreaking-campaign",
        category: {
          slug: "news",
          title: "News",
        },
      },
    ],
  };

  return (
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
            <div className="title-small">{mock.title}</div>
            <div className="blog-list-wrapper w-dyn-list">
              <div role="list" className="blog-grid w-dyn-items">
                {mock.items.map((article, index) => (
                  <div key={index} role="listitem" className="w-dyn-item">
                    <ArticleTile article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
