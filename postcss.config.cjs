module.exports = {
  plugins: [
    require('postcss-import')({ path: 'src/assets/css' }),
    require('postcss-preset-env')({ stage: 2 }),
    require('@csstools/postcss-global-data')({ files: [
      'src/assets/css/00_reset.css',
      'src/assets/css/10_utility.css',
      'src/assets/css/20_components.css',
      'src/assets/css/30_tokens.css',
      'src/assets/css/40_atoms.css',
      'src/assets/css/50_molecules.css',
      'src/assets/css/60_organisms.css',
      'src/assets/css/70_templates.css',
      'src/assets/css/80_pages.css'
    ] }),
    require('postcss-custom-properties'),
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
