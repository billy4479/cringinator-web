// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: {
      url: '/',
      static: true,
    },
  },
  scripts: {
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-babel',
    [
      'snowpack-plugin-minify-html',
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
        },
      },
    ],
  ],
  experiments: {
    optimize: {
      bundle: true,
      manifest: true,
      minify: true,
      target: 'es2020',
    },
  },
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
