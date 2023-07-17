module.exports = {
  plugins: [
    require('postcss-import-ext-glob')({
      sort: 'asc'
    }),
    require('postcss-import')({ path: 'src/assets/css' }),
    require('postcss-media-minmax'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-discard-empty'),
    require('postcss-merge-rules'),
    require('@csstools/postcss-progressive-custom-properties')
  ],
};