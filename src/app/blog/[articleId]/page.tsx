import Footer from "@/components/hos/footer";
import Header from "@/components/hos/header";
import { ArticleTile } from "@/components/hos/sections/article-tile";
import Markdown from "@/components/hos/sections/hos-markdown";
import Link from "next/link";

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
    title: "The secret language of touch in digital design",
    date: "January 8, 2025",
    src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp",
    category: {
      slug: "insight",
      title: "Insight",
    },
    teamMember: {
      slug: "eva-lindholm",
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp",
      fullName: "Eva Lindholm",
    },
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
                    href={`/blog-categories/${mock.category.slug}`}
                    className="hover-link text-white"
                  >
                    {mock.category.title}
                  </Link>
                  <div className="muted-text">{mock.date}</div>
                </div>
                <div className="content-medium">
                  <h1 className="title-large long-text">{mock.title}</h1>
                </div>
              </div>
              <Link
                href={`/team-members/${mock.teamMember.slug}`}
                className="article-author w-inline-block"
              >
                <img
                  src={mock.teamMember.src}
                  loading="lazy"
                  alt=""
                  // sizes="(max-width: 479px) 92vw, (max-width: 767px) 86vw, (max-width: 991px) 89vw, 51vw"
                  // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae3aafc68d214db29ecef_team-03.webp 1024w"
                  className="article-author-photo"
                />
                <div className="article-author-text">
                  <div>By&nbsp;</div>
                  <div>{mock.teamMember.fullName}</div>
                </div>
              </Link>
            </div>
            <img
              src={mock.src}
              loading="lazy"
              alt=""
              // sizes="(max-width: 479px) 92vw, (max-width: 767px) 89vw, (max-width: 991px) 91vw, 36vw"
              // srcSet="https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-500.webp 500w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-800.webp 800w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07-p-1600.webp 1600w, https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae97b738338ac7d2d551e_blog-07.webp 1920w"
              className="rounded-edges"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionTwo() {
  const mock = {
    subheading:
      "In an era where screens mediate most of our interactions, the concept of “touch” in digital design has evolved beyond the literal act of tapping or swiping. Touch in design speaks to a deeper, almost subconscious connection between users and digital interfaces.",
      content: `##### Understanding the tactile connection

Touch in digital design starts with how users physically interact with an interface. Whether it’s through a smartphone screen, a tablet, or a haptic-enabled device, the tactile element is the bridge between humans and technology. This connection, while seemingly straightforward, is a complex interplay of responsiveness, feedback, and user expectations. Designers must think beyond the simple act of tapping; they must create interactions that feel intuitive and satisfying at every stage.

Another key aspect of this connection is gesture-based interactions. Swiping, pinching, and dragging are now second nature to users, and designers must ensure these gestures are not only functional but also enjoyable. Does a swipe feel intuitive? Does a pinch-to-zoom react precisely as expected? These seemingly minor details are the building blocks of the language of touch. Together, they form the foundation of user satisfaction, creating interfaces that feel both effortless and engaging. Ultimately, tactile design goes beyond physicality—it’s about instilling confidence in the user. A responsive design that reacts predictably reassures users that their input is recognized, respected, and valued. It fosters trust and loyalty, ensuring users feel in control and connected to the digital space they are navigating.

![Caption for the image goes here](https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/679ae6215f31cf9bb5d30381_679ae46b71e7ded5c91230c6_landscape-03.webp)

##### How touch shapes emotional resonance

Touch in design isn’t limited to tactile feedback. It also plays a crucial role in shaping how users emotionally engage with an interface. Just as physical touch evokes feelings of comfort or trust in human interaction, the digital equivalent creates a similar bond. When done well, touch design can transform a functional experience into an emotionally resonant one, leaving users with a lasting sense of connection.

Take, for instance, the use of soft animations. A smooth transition between screens or a gently pulsating button conveys warmth and approachability, while abrupt, jarring movements can feel cold or mechanical. These animations are more than aesthetic choices—they’re a way to humanize the interface. Subtle motion helps guide users naturally through an experience, making it easier to navigate complex tasks or processes without feeling overwhelmed.

*   Responsive designs that acknowledge user actions immediately
*   Micro-interactions, such as playful animations when completing a task.
*   A consistent and familiar design language that feels like a trusted companion.

Colors, too, play a significant role in touch design. Cool, neutral tones combined with soft gradients can evoke calmness, while vibrant, bold colors paired with sharp edges convey energy and decisiveness. When paired with tactile feedback, these visual choices create a multi-sensory experience that resonates deeply with users. They may not consciously recognize the interplay of touch, color, and motion, but they’ll feel its impact.

##### Designing for the sense of touch

As we move into an age of immersive technology, the language of touch is becoming more sophisticated. Haptic feedback, once limited to a slight buzz, is now capable of simulating textures, temperatures, and even resistance. These advancements are opening up new possibilities for designers to create multi-dimensional experiences that feel almost tangible.

> “Touch design isn’t just about usability anymore—it’s about creating an emotional bond between the user and the interface.”

This progression opens up new opportunities for designers to experiment with sensory feedback in ways that were once impossible. Imagine shopping for clothes online and feeling the texture of the fabric or playing a game where you sense the tension of pulling a bowstring. These are no longer distant dreams but emerging realities in the world of digital design.

1.  Start by observing how users interact with existing touchpoints.
2.  Analyze gaps where tactile feedback or gestures could enhance the experience.
3.  Prototype and test micro-interactions extensively to refine responsiveness.
4.  Use A/B testing to determine which tactile features users find most engaging.
5.  Continuously iterate as new tools and technologies emerge.

The secret language of touch in digital design is more than a trend; it’s a philosophy. By understanding and embracing the nuances of tactile interaction, designers can create experiences that resonate deeply with users—both physically and emotionally. The beauty of this approach lies in its subtlety; it’s not about what users see but what they feel. And in the end, how a design feels can make all the difference.`
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
      <section className="section">
        <div className="container---main">
          <div className="content-medium align-center">
            <div className="article-wrapper">
              <div className="subheading">{mock.subheading}</div>
              <Markdown>{mock.content}</Markdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function SectionThree() {
  const mock = {
    title: "Continue reading",
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
