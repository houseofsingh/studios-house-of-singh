import { defineQuery } from "next-sanity";

export const CAREERS_QUERY = defineQuery(`*[_type == "career"][0...12]{
  _id,
  position,
  location,
  basis,
  brief,
  body
}`);

export const CAREER_QUERY = defineQuery(`*[_type == "career" && _id == $id][0]{
  _id,
  position,
  location,
  basis,
  brief,
  body
}`);
