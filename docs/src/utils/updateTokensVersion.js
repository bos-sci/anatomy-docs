/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const axios = require('axios');

const updateTokens = async () => {
  const res = await axios.get('https://cdn.jsdelivr.net/npm/@boston-scientific/anatomy-tokens/package.json');
  const version = res.data.version;
  fs.writeFileSync('src/docs/shared/versions.ts', `export const tokens = '${version}';\n`);
};

updateTokens();
