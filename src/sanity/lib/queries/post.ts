import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  slug,
  publishedAt,
  title,
  "cover": mainImage,
  categories[]->,
}`);

export const POSTS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current) && author->person->slug.current == $authorSlug][0...12]{
  _id,
  slug,
  publishedAt,
  title,
  "cover": mainImage,
  categories[]->,
  "author": author->person->
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  slug,
  publishedAt,
  title,
  subtitle,
  "cover": mainImage,
  categories[]->,
  "author": author->person->,
  body
}`);

/** Next 4 posts in a circular list (order: newest → oldest). */
export const NEXT_POSTS_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  "next": *[
    _type == "post" &&
    defined(slug.current) &&
    slug.current != $slug &&
    coalesce(publishedAt, _createdAt) < coalesce(^.publishedAt, ^._createdAt)
  ]
  | order(coalesce(publishedAt, _createdAt) desc)[0...4]{
    _id,
    slug,
    publishedAt,
    title,
    "cover": mainImage,
    categories[]->,
    "author": author->person->,
    body
  },
  "initial": *[
    _type == "post" &&
    defined(slug.current) &&
    slug.current != $slug &&
    coalesce(publishedAt, _createdAt) > coalesce(^.publishedAt, ^._createdAt)
  ]
  | order(coalesce(publishedAt, _createdAt) desc)[0...4]{
    _id,
    slug,
    publishedAt,
    title,
    "cover": mainImage,
    categories[]->,
    "author": author->person->,
    body
  },
}`);