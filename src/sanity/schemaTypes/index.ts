import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { serviceType } from "./serviceType";
import { testimonialType } from "./testimonialType";
import { companyType } from "./companyType";
import { personType } from "./personType";
import { careerType } from "./careerType";
import { projectType } from "./projectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    serviceType,
    testimonialType,
    companyType,
    personType,
    careerType,
    projectType,
  ],
};
