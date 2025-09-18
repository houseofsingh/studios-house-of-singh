import { defineQuery } from "next-sanity";

export const AUTHORS_QUERY =
  defineQuery(`*[_type == "author" && defined(slug.current)][0...12]{
  _id,
  slug,
  name,
  title,
  image,
}`);

export const AUTHOR_QUERY =
  defineQuery(`*[_type == "author" && slug.current == $slug][0]{
  _id,
  slug,
  name,
  title,
  socials,
  website,
  email,
  image,
  bio
}`);
