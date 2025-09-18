import { defineQuery } from "next-sanity";

export const CLIENTS_QUERY =
  defineQuery(`*[_type == "company" && client == true && defined(slug.current)][0...12]{
  _id,
  name,
  client,
  slug,
  industry,
  website,
  logo
}`);

// export const CLIENT_QUERY =
//   defineQuery(`*[_type == "company" && slug.current == $slug][0]{
//   _id,
//   rating,
//   review,
// }`);
