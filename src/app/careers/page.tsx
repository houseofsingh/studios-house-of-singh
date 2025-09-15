import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import GetInTouch from "@/components/hos/sections/get-in-touch";
import OpenRoles from "@/components/hos/sections/open-roles";

export default function Page() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}

function SectionOne() {
  const mock = {
    title: "Join our growing team of ambitious problem solvers.",
    cta: {
      title: "See open roles",
      href: "#open-roles",
    },
    banner: {
      left: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04.webp",
      right:
        "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02.webp",
    },
  };
  return (
    <section className="section">
      <div className="container---main">
        <div className="content-vertical increased-gap">
          <div
            className="fade-in-first"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="page-title">
              <div className="content-long">
                <h1 className="title-large">{mock.title}</h1>
              </div>
              <a
                data-wf--button--variant="large"
                href={mock.cta.href}
                className="button w-variant-25557a4e-06dc-3969-bf0c-432cce6b2ad0 w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text">{mock.cta.title}</div>
                  <div className="button-text">{mock.cta.title}</div>
                </div>
              </a>
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
            <div className="photo-pair">
              <img
                src={mock.banner.left}
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8a958a1eea631272c_landscape-04.webp 1920w"
                id="w-node-_74f399f6-1685-35ed-4033-ce3c93e0cda7-5170c48f"
                sizes="(max-width: 479px) 60vw, (max-width: 767px) 61vw, (max-width: 991px) 63vw, 62vw"
                alt=""
                className="photo-pair-left"
              />
              <img
                src={mock.banner.right}
                srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/6792cee8eb815a96e2198a20_landscape-02.webp 1920w"
                id="w-node-f28ac9bb-ed46-19cc-071a-9ef99f1530b5-5170c48f"
                sizes="(max-width: 479px) 30vw, 31vw"
                alt=""
                className="photo-pair-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  const mock = {
    title: "Benefits",
    description: "We equip you with everything you need to be your best.",
    items: [
      {
        title: "Growth without limits",
        description:
          "Our dedicated learning budget lets you pursue the courses, conferences, and resources that interest you most. You'll also work directly with industry leaders across our global client portfolio, gaining expertise that shapes your career trajectory.",
      },
      {
        title: "Tools of excellence",
        description:
          "Access to premium equipment and software, regularly updated to exceed industry standards. Your workspace is fitted with high-end gear selected to make your craft flow effortlessly.",
      },
      {
        title: "Flexible by design",
        description:
          "Own a piece of V7 and multiply its value as you grow with us. We benchmark at the top 15% percentile of options grants and employ a UK EMI scheme.",
      },
      {
        title: "Impact through craft",
        description:
          "Opportunity to shape major brands through long-term client relationships that go beyond typical project cycles. Your work will influence how millions of people experience leading brands across industries.",
      },
      {
        title: "Health & Wellbeing",
        description:
          "Comprehensive healthcare including mental health support, plus an annual wellbeing allowance you can direct toward fitness, mindfulness, or wellness activities. We take a long-term view of professional life and support sustainable, healthy careers.",
      },
      {
        title: "Global perspective",
        description:
          "Regular collaboration across our international studios, with opportunities for short-term assignments and knowledge exchange. You'll be part of a global creative network, sharing insights and approaches across cultures and markets.",
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
      <section className="section">
        <div className="container---main">
          <div className="vertical-section">
            <div className="section-title">
              <div className="title-large">{mock.title}</div>
              <div className="subheading content-short">{mock.description}</div>
            </div>
            <div className="benefit-grid">
              {mock.items.map((item, index) => (
                <div key={index} className="benefit-box">
                  <div className="large-text">{item.title}</div>
                  <div>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionThree() {
  const mock = {
    src: "https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp",
    text: `“Working with Andersen has been the most satisfying creative challenge of my career. Every day brings interesting opportunity and the team is fantastic.”`,
    fullName: "James Whitaker",
    designation: "Executive Creative Director",
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
            <div className="testimonial-card-d bg-dark">
              <img
                src={mock.src}
                id="w-node-_52660637-5003-3be7-d60c-651d5bf24842-5170c48f"
                // srcSet="https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-500.webp 500w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01-p-800.webp 800w, https://cdn.prod.website-files.com/6789d5b2099e81e88395d27f/679abb9a441d45ebe568b9ef_team-01.webp 1024w"
                // sizes="(max-width: 479px) 85vw, (max-width: 991px) 222px, 30vw"
                alt=""
                className="rounded-edges testimonial-card-image"
              />
              <div className="testimonial-card-d-contents">
                <div className="title-small long-text">{mock.text}</div>
                <div className="testimonial-card-author-logo">
                  <div>
                    <div>{mock.fullName}</div>
                    <div className="muted-text">{mock.designation}</div>
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

function SectionFour() {
  const mock = {
    title: "Open roles",
    description: "Join our growing global team of change-makers.",
    items: [
      {
        href: "/careers/strategy-director",
        title: "Strategy Director",
        location: "Remote",
        basis: "Full-time",
      },
      {
        href: "/careers/motion-design-specialist",
        title: "Motion Design Specialist",
        location: "Barcelona",
        basis: "Full-time",
      },
      {
        href: "/careers/senior-product-designer",
        title: "Senior Product Designer",
        location: "London",
        basis: "Full-time",
      },
      {
        href: "/careers/brand-design-lead",
        title: "Brand Design Lead",
        location: "Amsterdam or Remote",
        basis: "Full-time",
      },
      {
        href: "/careers/design-technologist",
        title: "Design Technologist",
        location: "Copenhagen",
        basis: "Full-time",
      },
      {
        href: "/careers/content-strategy-lead",
        title: "Content Strategy Lead",
        location: "Remote",
        basis: "Full-time",
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
      <OpenRoles {...mock} />
    </div>
  );
}

function SectionFive() {
  const mock = {
    title:
      "Interested in joining our team but didn’t see an appropriate opening? We’d like to hear from you.",
    cta: {
      href: "/company/contact-2",
      title: "Get in touch",
    },
  };

  return <GetInTouch {...mock} />;
}
