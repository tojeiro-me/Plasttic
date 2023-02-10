module.exports = {
  plugins: [
    require('postcss-import')({ path: 'src/assets/css' }),
    require('postcss-preset-env')({ stage: 2 }),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-discard-empty'),
    require('cssnano')({ preset: 'default'}),
  ],
};
