const environment = (envVar) => {
  return process.env[envVar] || "";
};

// toSlug is a copy of slugify in src/docs/shared/helpers.ts
// Do not update without also updating slugify
// TODO: ADS-ShrugBucket make helpers.ts a CommonJS module or enable module loading for node.
const toSlug = (string) =>
  string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

module.exports = {
  environment,
  toSlug,
};
