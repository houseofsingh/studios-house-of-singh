import { DocumentTextIcon } from "@sanity/icons";
import { LaptopIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

// id - unique
// position - string
// location - string
// basis - string
// brief - string
// body - richtext

export const careerType = defineType({
  name: "career",
  title: "Career",
  type: "document",
  icon: LaptopIcon,
  fields: [
    defineField({
      name: "position",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "basis",
      type: "string",
    }),
    defineField({
      name: "brief",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "position",
      location: "location",
      basis: "basis",
    },
    prepare(selection) {
      const { location, basis } = selection;
      return {
        ...selection,
        subtitle: [location, basis].filter(Boolean).join(" | "),
      };
    },
  },
});
