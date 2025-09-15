import Link from "next/link";

type GetInTouchProps = {
  title: string;
  cta: {
    title: string;
    href: string;
  };
};

export default function GetInTouch(mock: GetInTouchProps) {
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
      <section className="section bottom-cta">
        <div className="container---main">
          <div className="content-vertical cta">
            <div className="content-long centered">
              <div className="title-small">{mock.title}</div>
            </div>
            <Link
              data-wf--button--variant="large"
              href={mock.cta.href}
              className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
            >
              <div className="button-text-wrapper">
                <div className="button-text">{mock.cta.title}</div>
                <div className="button-text">{mock.cta.title}</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
