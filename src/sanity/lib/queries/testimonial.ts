import { defineQuery } from "next-sanity";

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"][0...12]{
  _id,
  rating,
  review,
  "person": person -> {
    slug,
    name,
    cover,
    title,
    "company": company -> {
      slug,
      name
    }
  }
}`);

export const TESTIMONIAL_QUERY =
  defineQuery(`*[_type == "testimonial" && slug.current == $slug][0]{
  _id,
  rating,
  review,
}`);
