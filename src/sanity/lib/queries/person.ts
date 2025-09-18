import { defineQuery } from "next-sanity";

export const TEAM_MEMBERS_QUERY =
  defineQuery(`*[_type == "person" && isTeamMember == true && defined(slug.current) ][0...12]{
  _id,
  slug,
  name,
  cover,
  title,
  isTeamMember
}`);

export const TEAM_MEMBER_QUERY =
  defineQuery(`*[_type == "person" && isTeamMember == true && slug.current == $slug][0]{
  _id,
  slug,
  name,
  cover,
  title,
  isTeamMember,
  email,
  website,
  socials,
  bio
}`);


// export const TEAM_MEMBER_QUERY =
//   defineQuery(`*[_type == "person" && isTeamMember === true && slug.current == $slug][0]{
//   _id,
//   slug,
//   name,
//   title,
//   socials,
//   website,
//   email,
//   image,
//   bio
// }`);
