// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://35.166.67.156/api',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY29keWVhdHdvcmxkIiwiYSI6ImNpamE3Zms2YzAwNWZ1bWx4bjJpZHhvZG0ifQ.alYL4sUGvCwHzyAQXB8RYQ'
  }
};
