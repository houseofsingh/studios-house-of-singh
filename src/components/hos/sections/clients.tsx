import { Marquee } from "@/components/magicui/marquee";

export default function Clients() {
  const mock = {
    title: "Selected Clients",
    companies: [
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011a682f7c256886318_customer-logo-lucident.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012711355fff731f054_customer-logo-hermosa.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012711355fff731f054_customer-logo-hermosa.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3b7_customer-logo-contiuumai.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011b91a15ae3272d62d_customer-logo-marcopierre.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011732f8c08a9112d4f_customer-logo-morance.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820112d77156f8eb175f0_customer-logo-invarion.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820124b6fb65ce98ff3ba_customer-logo-gridpoint.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820119dfae2d20259139e_customer-logo-givonni.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982011ff8c8e0d6fe406e1_customer-logo-parallaxai.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820120667dcbd83c4f06f_customer-logo-chausseur.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/67982012725b62cfcb56c94f_customer-logo-eisnersterling.svg",
      },
      {
        logoSrc:
          "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679820117d93ed154affec4c_customer-logo-dunhamco.svg",
      },
    ],
  };

  return (
    <div>
      <div className="hide-on-mobile">
        <section className="section">
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
              <div className="logo-grid">
                <div
                  id="w-node-_7694b064-8ba4-1007-6b98-e35f88aa7eee-4281d677"
                  className="title-small logo-grid-title"
                >
                  {mock.title}
                </div>
                {mock.companies.map((company, index) => (
                  <div key={index} className="logo-box inside-grid">
                    <img
                      src={company.logoSrc}
                      alt=""
                      className="logo-box-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="show-on-mobile">
        <div
          className="fade-in-on-scroll"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <section className="section">
            <div className="container---main">
              <Marquee className="marquee [--duration:60s] w-full">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index}
                    className="marquee-group"
                    style={{
                      transform:
                        "translate3d(-17.666%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <div className="marquee-logos">
                      {mock.companies.map((company, index) => (
                        <div key={index} className="logo-box">
                          <img
                            src={company.logoSrc}
                            alt=""
                            className="logo-box-image"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
