import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

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
