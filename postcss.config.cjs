module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 2 }),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default'}),
  ],
};
