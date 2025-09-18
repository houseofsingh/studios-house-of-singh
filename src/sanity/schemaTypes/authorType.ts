import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "person",
      type: "reference",
      to: { type: "person" },
    }),
  ],
  preview: {
    select: {
      title: "person.name",
      media: "person.cover",
      designation: "person.title",
      company: "person.company.name",
      isTeamMember: "person.isTeamMember",
    },
    prepare: (selection) => {
      const { designation, company, isTeamMember } = selection;
      return {
        ...selection,
        subtitle: [isTeamMember ? "Team Member" : null, designation, company]
          .filter(Boolean)
          .join(" | "),
      };
    },
  },
});
