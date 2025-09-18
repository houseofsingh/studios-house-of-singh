import { QuoteIcon } from "lucide-react";
import { PortableText } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { Testimonial } from "../../../sanity.types";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: QuoteIcon,
  fields: [
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Leave empty or select a rating between 1 and 5",
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: "person",
      type: "reference",
      to: { type: "person" },
    }),
  ],
});
