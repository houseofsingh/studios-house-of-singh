import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_BY_AUTHOR_QUERY, TEAM_MEMBER_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GlobeIcon,
  LinkedinIcon,
} from "lucide-react";

const socialOptions = [
  { title: "instagram", value: "instagram", icon: InstagramIcon },
  { title: "facebook", value: "facebook", icon: FacebookIcon },
  { title: "x", value: "x", icon: TwitterIcon },
  { title: "linkedin", value: "linkedin", icon: LinkedinIcon },
  { title: "other", value: "other", icon: GlobeIcon },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = await sanityFetch({
    query: TEAM_MEMBER_QUERY,
    params: {
      slug,
    },
  });

  const posts = await sanityFetch({
    query: POSTS_BY_AUTHOR_QUERY,
    params: {
      authorSlug: slug,
    },
  });

  if (!person) return null;

  return (
    <>
      <Header />
      <section className="section team-member-section">
        <div className="container---main">
          <div className="content-long align-center">
            <div className="team-member-contents">
              <Link href="/team" className="back-to-team w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67a4312ccab3e6928ef7a96b_interface-icon-cross-small.svg"
                  alt="cross icon"
                />
              </Link>
              <div
                className="fade-in-first"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="team-member-title">
                  <div>
                    <h1 className="title-medium">{person.name}</h1>
                    <h2 className="title-medium muted-text">{person.title}</h2>
                  </div>
                  {(!!person.socials?.length ||
                    !!person.email ||
                    !!person.website) && (
                    <div className="team-member-social">
                      {person.socials?.map((social, index) => {
                        if (!social.url) return null;

                        let platform;
                        try {
                          platform = socialOptions.find(({ value }) =>
                            new URL(social.url || "").hostname.includes(value)
                          );
                        } catch (err) {
                          // let the error be silent
                          console.error("err: ", err);
                          return null;
                        }

                        const Icon = platform?.icon || GlobeIcon;
                        return (
                          <React.Fragment key={index}>
                            <Link
                              href={social.url}
                              className="social-link w-inline-block"
                            >
                              <Icon />
                            </Link>
                          </React.Fragment>
                        );
                      })}
                      {!!person.website && (
                        <Link
                          href={person.website}
                          className="social-link w-inline-block"
                        >
                          <GlobeIcon />
                        </Link>
                      )}
                      {!!person.email && (
                        <Link
                          data-wf--arrow-hover-link--variant="base"
                          href={`mailto:${person.email}`}
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
                            {person.email}
                          </div>
                        </Link>
                      )}
                    </div>
                  )}
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
                <div className="team-member-bio">
                  <div>
                    {person.cover && (
                      <img
                        src={urlFor(person.cover).url()}
                        loading="lazy"
                        alt=""
                        className="rounded-edges team-modal-image w-full aspect-square object-cover"
                      />
                    )}
                  </div>

                  <div className="body-text">
                    {person.bio && <PortableText value={person.bio} />}
                  </div>
                </div>
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
                <div className="content-vertical team-member-articles">
                  <div className="cms-title large-text">
                    <div>Articles by&nbsp;</div>
                    <div>{person.name}</div>
                  </div>
                  <div className="collection-list-wrapper w-dyn-list">
                    <div role="list" className="author-blog-grid w-dyn-items">
                      {posts.map((post) => (
                        <div
                          key={post._id}
                          role="listitem"
                          className="w-dyn-item"
                        >
                          <Link
                            href={`/blog/${post.slug?.current}`}
                            className="article-small-horizontal w-inline-block"
                          >
                            <div className="hover-image-link">
                              {post.cover && (
                                <img
                                  src={urlFor(post.cover).url()}
                                  loading="lazy"
                                  alt=""
                                  className="hover-image w-full aspect-square object-cover"
                                />
                              )}
                            </div>
                            <div className="article-horizontal-title">
                              <div className="small-text">
                                {post.categories?.[0].title}
                              </div>
                              <div>{post.title}</div>
                              <div className="small-text muted-text">
                                {formatDate(post.publishedAt)}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
