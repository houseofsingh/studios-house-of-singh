import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)][0...12]{
  _id,
    slug,
    title,
    "client": client->,
    "services": services[]->,
    cover,
    brief,
    body,
    "testimonials": testimonials[]->{
      _id,
      "person": person->{
        name,
        title,
        "company": company->
      },
        review,
        title,
    },    
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,
    slug,
    title,
    "client": client->,
    "services": services[]->,
    cover,
    brief,
    body,
    "testimonials": testimonials[]->{
    _id,
      "person": person->{
        name,
        title,
        "company": company->
      },
        review,
        title,
    },    
}`);
