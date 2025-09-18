import { Building2Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

// name - string
// slug - derived from name
// industry - string
// website - url
// cover - image
// badge - image
export const companyType = defineType({
  name: "company",
  title: "Company",
  type: "document",
  icon: Building2Icon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Is Client?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "object",
      fields: [
        defineField({
          name: "white",
          title: "White Logo",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "black",
          title: "Black Logo",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      media: "logo.black",
      title: "name",
      client: "client",
    },
    prepare(selection) {
      const { client } = selection;
      return {
        ...selection,
        subtitle: client ? "Client" : "",
      };
    },
  },
});
