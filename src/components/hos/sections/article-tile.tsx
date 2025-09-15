export type ArticleTileProps = {
  slug: string;
  title: string;
  date: string;
  src: string;
  category: {
    slug: string;
    title: string;
  };
};

export function ArticleTile({ article }: { article: ArticleTileProps }) {
  return (
    <div className="article-grid-item">
      <a
        href={`/blog/${article.slug}`}
        className="hover-image-link w-inline-block"
      >
        <img
          src={article.src}
          loading="lazy"
          alt=""
          // sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 22vw"
          // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae9535f31cf9bb5d5787a_blog-01.webp 1920w"
          className="hover-image"
        />
      </a>
      <a
        data-wf--arrow-hover-link--variant="base"
        href={`/blog-categories/${article.category.slug}`}
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
        <div className="arrow-link-text" style={{ opacity: "0.5" }}>
          {article.category.title}
        </div>
      </a>
      <a href={`/blog/${article.slug}`} className="large-text">
        {article.title}
      </a>
      <div className="small-text muted-text">{article.date}</div>
    </div>
  );
}
