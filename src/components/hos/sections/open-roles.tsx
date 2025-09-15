import Link from "next/link";

type OpenRolesProps = {
  title: string;
  description: string;
  items: { href: string; title: string; location: string; basis: string }[];
};

export default function OpenRoles(mock: OpenRolesProps) {
  return (
    <section id="open-roles" className="section">
      <div className="container---main">
        <div className="vertical-section">
          <div className="section-title">
            <div className="title-large">{mock.title}</div>
            <div className="subheading content-short">{mock.description}</div>
          </div>
          <div className="careers-collection w-dyn-list">
            <div role="list" className="w-dyn-items">
              {mock.items.map((item, index) => (
                <div key={index} role="listitem" className="w-dyn-item">
                  <Link href={item.href} className="career-link w-inline-block">
                    <div id="w-node-e292ff74-228b-aded-57c4-828a25cfadc0-5170c48f">
                      {item.title}
                    </div>
                    <div className="career-location">{item.location}</div>
                    <div className="career-basis">{item.basis}</div>
                    <img
                      src="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792d047a958a1eea63285bc_interface-icon-arrow-right-dark.svg"
                      alt="Arrow pointing right icon"
                      className="career-link-icon"
                      style={{
                        opacity: 0,
                        transform:
                          "translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
