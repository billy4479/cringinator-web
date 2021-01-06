// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
  },
  scripts: {
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
