// @ts-check

const { clean } = require('./clean');
const { copy } = require('./copy');
const { jest, jestWatch } = require('./jest');
const { sass } = require('./sass');
const { ts } = require('./ts');
const { tslint } = require('./tslint');
const { webpack, webpackDevServer } = require('./webpack');
const { outdated, selfupdate } = require('./outdated');
const { verifyApiExtractor, updateApiExtractor } = require('./api-extractor');
const buildCodepenExamples = require('./build-codepen-examples');
const lintImports = require('./lint-imports');
const prettier = require('./prettier');
const bundleSizeCollect = require('./bundle-size-collect');
const checkForModifiedFiles = require('./check-for-modified-files');
const generateVersionFiles = require('./generate-version-files');

exports.rig = {
  clean,
  copy,
  jest,
  jestWatch,
  sass,
  ts,
  tslint,
  webpack,
  webpackDevServer,
  outdated,
  selfupdate,
  verifyApiExtractor,
  updateApiExtractor,
  buildCodepenExamples,
  lintImports,
  prettier,
  bundleSizeCollect,
  checkForModifiedFiles,
  generateVersionFiles
};
