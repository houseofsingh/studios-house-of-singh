import { UserSearchIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

// slug
// name
// teamMember - is team member?
// company
// title
// cover

export const personType = defineType({
  name: "person",
  title: "Person",
  type: "document",
  icon: UserSearchIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Is Team Member ?",
      name: "isTeamMember",
      type: "boolean",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "cover",
      title: "Cover",
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
      name: "bio",
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
      name: "website",
      type: "url",
    }),
    defineField({
      name: "email",
      type: "email",
    }),
    defineField({
      name: "socials",
      title: "Social Profiles",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialProfile",
          fields: [
            defineField({
              name: "url",
              title: "Profile URL",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      media: "cover",
      title: "name",
      company: "company.name",
      designation: "title",
      isTeamMember: "isTeamMember",
    },
    prepare(selection) {
      const { isTeamMember, designation, company } = selection;
      return {
        ...selection,
        subtitle: [isTeamMember ? "Team Member" : null, designation, company]
          .filter(Boolean)
          .join(" | "),
      };
    },
  },
});
