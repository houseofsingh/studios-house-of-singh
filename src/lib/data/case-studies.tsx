export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  cover: {
    src: string;
  };
  badge: {
    src: string;
  };
  metrics: {
    stat: string;
    description: string;
  };
  meta: {
    type: "text" | "link";
    label: string;
    value: string;
    link?: string;
  }[];
  content: string;
  feedback: {
    content: string;
    author: {
      cover: {
        src: string;
      };
      fullName: string;
      designation: string;
    };
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "lucident",
    title: "From Concept to Culture: A Brand’s Evolution",
    subtitle:
      "When Lucident approached us to help launch their revolutionary L1 speaker, they weren’t just looking for a product campaign. They needed a complete rethinking of how premium audio products connect with modern audiences.",
    cover: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a166481180e2f9ac8316a7_case-study-04.webp",
    },
    badge: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a1665ebcc2a3de1ea22076_customer-logo-lucident-white.svg",
    },
    metrics: {
      stat: "60%",
      description: "Increase in engagement within the first six months",
    },
    meta: [
      {
        type: "text",
        label: "Client",
        value: "Lucident",
      },
      {
        type: "text",
        label: "Industry",
        value: "Consumer Tech",
      },
      {
        type: "link",
        label: "Website",
        value: "lucident.com",
        link: "https://webflow.com/",
      },
    ],
    content: `##### Understanding the challenge

Every transformation begins with a clear understanding of the current landscape. In this case, our client needed to bridge the gap between established industry practices and evolving user expectations. The challenge wasn't just about updating systems or refreshing visuals—it was about fundamentally reimagining how users interact with the brand in an increasingly digital world.

The complexity lay in balancing multiple stakeholder needs: maintaining the core strengths that built their reputation while creating space for innovation and growth. This required careful consideration of both technical capabilities and human factors, ensuring that any solution would serve not just immediate needs but create a foundation for future evolution.

![Caption for the image here](https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a163de0d4a6c316dedcae9_landscape-04.webp)

##### Our approach

We began by immersing ourselves in the client's world, conducting extensive research to understand their market position, user needs, and technical requirements. This discovery phase revealed key opportunities for innovation that would set our solution apart. Through collaborative workshops and iterative design sessions, we developed a strategic framework that aligned business objectives with user needs.

Take, for instance, the use of soft animations. A smooth transition between screens or a gently pulsating button conveys warmth and approachability, while abrupt, jarring movements can feel cold or mechanical. These animations are more than aesthetic choices—they’re a way to humanize the interface. Subtle motion helps guide users naturally through an experience, making it easier to navigate complex tasks or processes without feeling overwhelmed.

Key elements of our solution included:

*   A comprehensive digital strategy that unified all touchpoints
*   Custom-built tools that streamlined complex processes
*   An intuitive interface that required minimal training
*   Scalable architecture to support future growth

##### Technical innovation

The technical implementation demanded careful consideration of both current needs and future scalability. We developed a modular system that could adapt to changing requirements while maintaining consistent performance. This approach allowed us to create a solution that was both robust and flexible, capable of evolving alongside user needs and technological capabilities.`,
    feedback: {
      content: `“Andersen’s approach brought unexpected clarity to our manufacturing systems. What started as a UI refresh evolved into a complete rethinking of our digital operations. We are thrilled with the outcome.”`,
      author: {
        cover: {
          src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a181ae3bfd384a4a0af4ec_customer-avatar-06.webp",
        },
        fullName: "Isabella Romano",
        designation: "Technical Director",
      },
    },
  },
  {
    id: "morance",
    title: "Building a sustainable automotive brand from the ground up",
    cover: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a179b8cb49ca6a355990d3_case-study-05.webp",
    },
    badge: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a16616c44e0f48685b8900_customer-logo-morance-white.svg",
    },
    metrics: {
      stat: "218%",
      description: "Exceeding pre-order targets across Nordic markets",
    },
    subtitle:
      "Morance came to us with industry-leading EV innovation but needed help crafting a brand that could compete with century-old luxury marques. Our comprehensive brand strategy and launch campaign helped position Morance at the intersection of Scandinavian design philosophy and sustainable innovation.",
    meta: [
      {
        type: "text",
        label: "Client",
        value: "Morance",
      },
      {
        type: "text",
        label: "Industry",
        value: "Automotive",
      },
      {
        type: "link",
        label: "Website",
        value: "morance.com",
        link: "https://morance.com/",
      },
    ],
    content: `##### Understanding the challenge

Every transformation begins with a clear understanding of the current landscape. In this case, our client needed to bridge the gap between established industry practices and evolving user expectations. The challenge wasn't just about updating systems or refreshing visuals—it was about fundamentally reimagining how users interact with the brand in an increasingly digital world.

The complexity lay in balancing multiple stakeholder needs: maintaining the core strengths that built their reputation while creating space for innovation and growth. This required careful consideration of both technical capabilities and human factors, ensuring that any solution would serve not just immediate needs but create a foundation for future evolution.

![](https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a163de0d4a6c316dedcae9_landscape-04.webp)

##### Our approach

We began by immersing ourselves in the client's world, conducting extensive research to understand their market position, user needs, and technical requirements. This discovery phase revealed key opportunities for innovation that would set our solution apart. Through collaborative workshops and iterative design sessions, we developed a strategic framework that aligned business objectives with user needs.

Take, for instance, the use of soft animations. A smooth transition between screens or a gently pulsating button conveys warmth and approachability, while abrupt, jarring movements can feel cold or mechanical. These animations are more than aesthetic choices—they’re a way to humanize the interface. Subtle motion helps guide users naturally through an experience, making it easier to navigate complex tasks or processes without feeling overwhelmed.

Key elements of our solution included:

*   A comprehensive digital strategy that unified all touchpoints
*   Custom-built tools that streamlined complex processes
*   An intuitive interface that required minimal training
*   Scalable architecture to support future growth

##### Technical innovation

The technical implementation demanded careful consideration of both current needs and future scalability. We developed a modular system that could adapt to changing requirements while maintaining consistent performance. This approach allowed us to create a solution that was both robust and flexible, capable of evolving alongside user needs and technological capabilities.`,
    feedback: {
      content: `“Andersen’s approach brought unexpected clarity to our manufacturing systems. What started as a UI refresh evolved into a complete rethinking of our digital operations. We are thrilled with the outcome.”`,
      author: {
        cover: {
          src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a181ae3bfd384a4a0af4ec_customer-avatar-06.webp",
        },
        fullName: "Isabella Romano",
        designation: "Technical Director",
      },
    },
  },
  {
    id: "continuum",
    title: "Making enterprise AI transparent, ethical, and approachable",
    cover: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a165aacff775964e685bc3_case-study-06.webp",
    },
    badge: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a165dabcc2a3de1ea1b91c_customer-logo-contiuumai-white.svg",
    },
    metrics: {
      stat: "103%",
      description: "Performance gains in client AI implementation cycles",
    },
    subtitle:
      "Morance came to us with industry-leading EV innovation but needed help crafting a brand that could compete with century-old luxury marques. Our comprehensive brand strategy and launch campaign helped position Morance at the intersection of Scandinavian design philosophy and sustainable innovation.",
    meta: [
      {
        type: "text",
        label: "Client",
        value: "Lucident",
      },
      {
        type: "text",
        label: "Industry",
        value: "Consumer Tech",
      },
      {
        type: "link",
        label: "Website",
        value: "lucident.com",
        link: "https://lucident.com/",
      },
    ],
    content: `##### Understanding the challenge

Every transformation begins with a clear understanding of the current landscape. In this case, our client needed to bridge the gap between established industry practices and evolving user expectations. The challenge wasn't just about updating systems or refreshing visuals—it was about fundamentally reimagining how users interact with the brand in an increasingly digital world.

The complexity lay in balancing multiple stakeholder needs: maintaining the core strengths that built their reputation while creating space for innovation and growth. This required careful consideration of both technical capabilities and human factors, ensuring that any solution would serve not just immediate needs but create a foundation for future evolution.

![Caption for the image here](https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a163de0d4a6c316dedcae9_landscape-04.webp)

##### Our approach

We began by immersing ourselves in the client's world, conducting extensive research to understand their market position, user needs, and technical requirements. This discovery phase revealed key opportunities for innovation that would set our solution apart. Through collaborative workshops and iterative design sessions, we developed a strategic framework that aligned business objectives with user needs.

Take, for instance, the use of soft animations. A smooth transition between screens or a gently pulsating button conveys warmth and approachability, while abrupt, jarring movements can feel cold or mechanical. These animations are more than aesthetic choices—they’re a way to humanize the interface. Subtle motion helps guide users naturally through an experience, making it easier to navigate complex tasks or processes without feeling overwhelmed.

Key elements of our solution included:

*   A comprehensive digital strategy that unified all touchpoints
*   Custom-built tools that streamlined complex processes
*   An intuitive interface that required minimal training
*   Scalable architecture to support future growth

##### Technical innovation

The technical implementation demanded careful consideration of both current needs and future scalability. We developed a modular system that could adapt to changing requirements while maintaining consistent performance. This approach allowed us to create a solution that was both robust and flexible, capable of evolving alongside user needs and technological capabilities.`,
    feedback: {
      content: `“Andersen’s approach brought unexpected clarity to our manufacturing systems. What started as a UI refresh evolved into a complete rethinking of our digital operations. We are thrilled with the outcome.”`,
      author: {
        cover: {
          src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a181ae3bfd384a4a0af4ec_customer-avatar-06.webp",
        },
        fullName: "Isabella Romano",
        designation: "Technical Director",
      },
    },
  },
  {
    id: "invarion",
    title: "Crafting a new product narrative for an audio technology pioneer",
    cover: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a16331b63c5a0a560d5df9_case-study-07.webp",
    },
    badge: {
      src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a163670309a0f00db1c00c_customer-logo-invarion-white.svg",
    },
    metrics: {
      stat: "167%",
      description: "Growth in e-commerce revenue post-digital transformation",
    },
    subtitle:
      "Morance came to us with industry-leading EV innovation but needed help crafting a brand that could compete with century-old luxury marques. Our comprehensive brand strategy and launch campaign helped position Morance at the intersection of Scandinavian design philosophy and sustainable innovation.",
    meta: [
      {
        type: "text",
        label: "Client",
        value: "Lucident",
      },
      {
        type: "text",
        label: "Industry",
        value: "Consumer Tech",
      },
      {
        type: "link",
        label: "Website",
        value: "lucident.com",
        link: "https://webflow.com/",
      },
    ],
    content: `##### Understanding the challenge

Every transformation begins with a clear understanding of the current landscape. In this case, our client needed to bridge the gap between established industry practices and evolving user expectations. The challenge wasn't just about updating systems or refreshing visuals—it was about fundamentally reimagining how users interact with the brand in an increasingly digital world.

The complexity lay in balancing multiple stakeholder needs: maintaining the core strengths that built their reputation while creating space for innovation and growth. This required careful consideration of both technical capabilities and human factors, ensuring that any solution would serve not just immediate needs but create a foundation for future evolution.

![Caption for the image here](https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a163de0d4a6c316dedcae9_landscape-04.webp)

##### Our approach

We began by immersing ourselves in the client's world, conducting extensive research to understand their market position, user needs, and technical requirements. This discovery phase revealed key opportunities for innovation that would set our solution apart. Through collaborative workshops and iterative design sessions, we developed a strategic framework that aligned business objectives with user needs.

Take, for instance, the use of soft animations. A smooth transition between screens or a gently pulsating button conveys warmth and approachability, while abrupt, jarring movements can feel cold or mechanical. These animations are more than aesthetic choices—they’re a way to humanize the interface. Subtle motion helps guide users naturally through an experience, making it easier to navigate complex tasks or processes without feeling overwhelmed.

Key elements of our solution included:

*   A comprehensive digital strategy that unified all touchpoints
*   Custom-built tools that streamlined complex processes
*   An intuitive interface that required minimal training
*   Scalable architecture to support future growth

##### Technical innovation

The technical implementation demanded careful consideration of both current needs and future scalability. We developed a modular system that could adapt to changing requirements while maintaining consistent performance. This approach allowed us to create a solution that was both robust and flexible, capable of evolving alongside user needs and technological capabilities.`,
    feedback: {
      content: `“Andersen’s approach brought unexpected clarity to our manufacturing systems. What started as a UI refresh evolved into a complete rethinking of our digital operations. We are thrilled with the outcome.”`,
      author: {
        cover: {
          src: "https://cdn.prod.website-files.com/678eed9ee60eb7c8b8e1f3f0/67a181ae3bfd384a4a0af4ec_customer-avatar-06.webp",
        },
        fullName: "Isabella Romano",
        designation: "Technical Director",
      },
    },
  },
];
