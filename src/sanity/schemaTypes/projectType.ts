import { BriefcaseBusinessIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

// title string
// slug
// client -> client
// services -> ref
// cover image // for now
// brief string
// body blockContent // for now
// testimonaila - references of testimonials

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: BriefcaseBusinessIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "client",
      type: "reference",
      to: { type: "company" },
    }),
    defineField({
      name: "services",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "service" },
        }),
      ],
    }),
    defineField({
      name: "cover",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "brief",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "testimonial" },
        }),
      ],
    }),
  ],
});
