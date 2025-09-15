import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="article w-richtext [&>ul]:list-disc [&>ol]:list-decimal">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
        components={{
          p: ({ node, children }) => {
            const first = (node as any).children?.[0];
            const isImg = first?.type === "element" && first.tagName === "img";
            const isLinkImg =
              first?.type === "element" &&
              first.tagName === "a" &&
              first.children?.[0]?.tagName === "img";

            if ((isImg || isLinkImg) && (node as any).children.length === 1) {
              return <>{children}</>;
            }
            return <p>{children}</p>;
          },
          img: ({ src, alt, title }) => (
            <figure className="w-richtext-align-center w-richtext-figure-type-image">
              <div>
                <img src={src ?? ""} loading="lazy" alt={alt ?? ""} />
              </div>
              {(alt || title) && <figcaption>{alt ?? title}</figcaption>}
            </figure>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
