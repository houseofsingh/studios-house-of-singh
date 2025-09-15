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
