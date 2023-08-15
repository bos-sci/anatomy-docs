/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const contentful = require('contentful');
const { SitemapStream } = require('sitemap');
const { environment, toSlug } = require('./helpers');
const { createWriteStream } = require('fs');

const ROOT = 'https://www.anatomydesignsystem.com';

const MAIN_NAVIGATION = {
  home: '',
  contentGuideline: 'content',
  foundation: 'foundations',
  component: 'components',
  codeStandard: 'code-standards',
  resource: 'resources'
};

const client = contentful.createClient({
  accessToken: environment('CONTENTFUL_API_TOKEN'),
  space: environment('REACT_APP_CONTENTFUL_SPACE_ID')
});

const createSitemap = async () => {
  const contentTypes = await client.getContentTypes();
  const contentTypeIds = contentTypes.items
    .map((item) => item.sys.id)
    .filter((entry) => {
      return !['pageProperties', 'componentState', 'componentModifier', 'componentStyle'].includes(entry);
    });

  const entries = await client.getEntries({
    content_type: contentTypeIds,
    limit: 1000
  });

  const urls = entries.items
    .filter((entry) => entry.fields.name !== undefined && MAIN_NAVIGATION[entry.sys.contentType.sys.id] !== undefined)
    .map((entry) => {
      const getUrl = () => {
        if (entry.fields.group) {
          return `/${MAIN_NAVIGATION[entry.sys.contentType.sys.id]}/${toSlug(entry.fields.group)}/${toSlug(
            entry.fields.name
          )}`;
        }
        return `/${MAIN_NAVIGATION[entry.sys.contentType.sys.id]}/${toSlug(entry.fields.name)}`;
      };

      const site = {
        url: getUrl()
      };
      if (entry.sys.updatedAt) {
        site.lastmod = entry.sys.updatedAt;
      }
      return site;
    });

  const customPages = [
    ...Object.values(MAIN_NAVIGATION).map((nav) => ROOT + '/' + nav)
    // When creating custom pages (not tied to contentful), add urls to this array
  ];

  customPages.forEach((page) => {
    urls.push({
      url: page
    });
  });

  // Create a stream to write to
  const sitemap = new SitemapStream({
    hostname: ROOT
  });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  urls.forEach((url) => {
    sitemap.write(url);
  });
  sitemap.end();

  console.log('Sitemap generated successfully');
};

createSitemap();
