module.exports = {
  plugins: [
    require('postcss-import')({ path: 'src/assets/css' }),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': false
      }
    }),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-discard-empty'),
    require('postcss-merge-rules'),
    require('@csstools/postcss-progressive-custom-properties')
  ]
};
