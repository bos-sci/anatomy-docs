import { slugify } from "../docs/shared/helpers";

const environment = (envVar) => {
  return process.env[envVar] || "";
};

const toSlug = (string) => slugify(string);
module.exports = {
  environment,
  toSlug,
};
