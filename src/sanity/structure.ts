import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
const structures: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author"].includes(item.getId()!)
      ),
    ]);

// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title("Base")
//     .items([
//       S.listItem()
//         .title("Blog")
//         .child(
//           S.list()
//             .title("Blog")
//             .items([
//               S.documentTypeListItem("post").title("Posts"),
//               S.documentTypeListItem("category").title("Categories"),
//               S.documentTypeListItem("author").title("Authors"),
//             ])
//         ),
//       S.documentTypeListItem("service").title("Services"),
//       S.documentTypeListItem("testimonial").title("Testimonials"),
//       S.documentTypeListItem("company").title("Companies"),
//       S.documentTypeListItem("person").title("Persons"),
//       S.documentTypeListItem("career").title("Careers"),
//     ]);

export const structure: StructureResolver = (S) => {
  return S.list()
    .title("House of Singh | Studios")
    .items([
      S.listItem()
        .title("Collections")
        .child(
          S.list()
            .title("Collections")
            .items([
              S.listItem()
                .title("Blog")
                .child(
                  S.list()
                    .title("Blog")
                    .items([
                      S.documentTypeListItem("post").title("Posts"),
                      S.documentTypeListItem("category").title("Categories"),
                      S.documentTypeListItem("author").title("Authors"),
                    ])
                ),
              S.divider(),
              S.documentTypeListItem("career").title("Careers"),
              S.documentTypeListItem("company").title(
                "Clients & Other Companies"
              ),
              S.documentTypeListItem("person").title("Team & Other People"),
              S.documentTypeListItem("service").title("Services"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("project").title("Projects"),
            ])
        ), //
      S.listItem().title("Pages"),
    ]);
};
