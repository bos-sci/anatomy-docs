const environment = (envVar) => {
  return process.env[envVar] || "";
};

const toSlug = (string) => string.toLowerCase().replace(/\s+/g, "-");
module.exports = {
  environment,
  toSlug,
};
