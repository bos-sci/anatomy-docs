require("dotenv").config();
const contentful = require("contentful");
const { SitemapStream } = require("sitemap");
const { environment, toSlug } = require("./helpers");
const { createWriteStream } = require("fs");

const MAIN_NAVIGATION = {
  root: "https://www.anatomydesignsystem.com",
  contentGuideline: "content",
  foundation: "foundations",
  component: "components",
  codeStandard: "code-standards",
  resource: "resources",
};

const client = contentful.createClient({
  accessToken: environment("CONTENTFUL_API_TOKEN"),
  space: environment("REACT_APP_CONTENTFUL_SPACE_ID"),
});

const createSitemap = async () => {
  const contentTypes = await client.getContentTypes();
  const contentTypeIds = contentTypes.items
    .map((item) => item.sys.id)
    .filter((entry) => {
      return ![
        "pageProperties",
        "componentState",
        "componentModifier",
        "componentStyle",
      ].includes(entry);
    });
  const entries = await client.getEntries({
    content_type: contentTypeIds,
  });
  const urls = entries.items
    .filter((entry) => entry.fields.name !== undefined)
    .map((entry) => {
      if (entry.fields.group) {
        return {
          url: `/${MAIN_NAVIGATION[entry.sys.contentType.sys.id]}/${toSlug(
            entry.fields.group
          )}/${toSlug(entry.fields.name)}`,
        };
      }
      return {
        url: `/${MAIN_NAVIGATION[entry.sys.contentType.sys.id]}/${toSlug(
          entry.fields.name
        )}`,
      };
    });

  // Create a stream to write to
  const sitemap = new SitemapStream({
    hostname: MAIN_NAVIGATION.root,
  });

  const writeStream = createWriteStream("./sitemap.xml");
  sitemap.pipe(writeStream);

  urls.forEach((url) => {
    sitemap.write(url);
  });
  sitemap.end();
  
  console.log("Sitemap generated successfully");
};

createSitemap();
