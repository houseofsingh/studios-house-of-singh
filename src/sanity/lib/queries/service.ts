import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "service" && defined(slug.current)][0...12]{
  _id,
  title,
  slug,
  description,
  cover,
  deliverables
}`);

export const SERVICE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  cover,
  deliverables,
  body,
  footmark
}`);
